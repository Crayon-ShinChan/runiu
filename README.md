# Runiu - Canadian Immigration Stats

<p align="center">
  <img src="public/runiu-with-text.png" alt="icon" width=288>
</p>

Discover comprehensive, up-to-date statistics for Canadian Immigration Programs at Runiu. Your go-to source for detailed insights into Express Entry, Provincial Nominee Programs (PNP), and more. Whether you're planning to immigrate, study, or work in Canada, Runiu offers invaluable data and analysis to help you navigate the complex landscape of Canadian immigration. Explore our interactive tools and resources tailored for prospective immigrants and stakeholders. Start your journey to Canada with confidence—visit Runiu today.

## How to contribute

### Get started

1. Fork the repo, then clone the repo to your local
2. Start docker
3. Run `./start-database.sh`
   1. This will create a postgres database in docker locally
4. Run `pnpm i`
5. Migrate database and prepare data for the database, run `pnpm db:reset`
6. run `pnpm dev`

### Database migrations

If you want to change the database schema, you need to create a migration file and migrate the database. Check this [guide](docs/database-migration.md) for more information.
