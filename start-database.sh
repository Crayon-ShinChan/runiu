#!/bin/bash
# Use this script to start a docker container for a local development database

# TO RUN ON WINDOWS: 
# 1. Install WSL (Windows Subsystem for Linux) - https://learn.microsoft.com/en-us/windows/wsl/install
# 2. Install Docker Desktop for Windows - https://docs.docker.com/docker-for-windows/install/
# 3. Open WSL - `wsl`
# 4. Run this script - `./start-database.sh`

# On Linux and macOS you can run this script directly - `./start-database.sh`

DB_CONTAINER_NAME="runiu-postgres"

if ! [ -x "$(command -v docker)" ]; then
  echo "Docker is not installed. Please install docker and try again.\nDocker install guide: https://docs.docker.com/engine/install/"
  exit 1
fi

if [ "$(docker ps -q -f name=$DB_CONTAINER_NAME)" ]; then
  docker start $DB_CONTAINER_NAME
  echo "Database container started"
  exit 0
fi

# import env variables from .env
set -a
source .env

DB_PASSWORD=$(echo $DATABASE_URL | awk -F':' '{print $3}' | awk -F'@' '{print $1}')

if [ "$DB_PASSWORD" = "password" ]; then
  echo "You are using the default database password"
  read -p "Should we generate a random password for you? [y/N]: " -r REPLY
  if ! [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Please set a password in the .env file and try again"
    exit 1
  fi
  DB_PASSWORD=$(openssl rand -base64 12)
  sed -i -e "s#:password@#:$DB_PASSWORD@#" .env
fi

# Set the DIRECT_URL to the DATABASE_URL
set -a
source .env
DIRECT_URL=$DATABASE_URL
sed '/^DIRECT_URL=.*$/d' .env > .env.tmp
mv .env.tmp .env
echo "DIRECT_URL=$DIRECT_URL" >> .env

# If the 5432 port is already in use, you can change it in the following, e.g. 5440:5432
docker run --name $DB_CONTAINER_NAME -e POSTGRES_PASSWORD=$DB_PASSWORD -e POSTGRES_DB=runiu -d -p 5432:5432 docker.io/postgres

echo "Database container was succesfuly created"
