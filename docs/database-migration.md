# Database migration with Prisma

## Create migration file

First, you need to change schema to `schema.prisma`

Then at the root of project, run

```bash
pnpm migrate:dev-create
```

or

```bash
npx dotenv -c development -- prisma migrate dev --read-only
```

To allow Prisma to automatically create the `migration.sql` file for you, use the `read-only` flag. However, please be aware that this file is likely to be incorrect. Prisma is adept at generating additional changes such as adding a key or constraint. However, for certain changes, using the `migration.sql` file may result in data loss. For instance, when renaming a column, Prisma will drop the original column and create a new column instead of simply renaming it, leading to potential data loss during migration. Therefore, you need to check `migration.sql` carefully.

## Migrate

Then you should go to the folder name like `20231112062501_xxxxxx_xxx_xxxx` to check if the migration.sql is right. If it’s right, you can run code:

```bash
pnpm migrate:dev
```

or

```bash
npx dotenv -c development -- prisma migrate dev
```

You should see something like `Your database is now in sync with your schema` in the return

## If you want to update your local database with the cloud one

In this case, the cloud database is ahead of your local db (more migration). Then you git pull then just run

```bash
pnpm migrate:dev
```

## Migrate cloud database

The logic is written in github action files. You can check the file in folder `.github/workflows` to see how it works. The workflow will run automatically when you push to branches at Github.
