import { parse } from "csv-parse";
import fs from "fs";
import { PrismaClient, type Round } from "@prisma/client";

const prisma = new PrismaClient();

const SEEDING_DATA_FILE_PATH = "prisma/seeding-data";

async function seedEERoundTable() {
  const parser = fs
    .createReadStream(`${SEEDING_DATA_FILE_PATH}/ee_round.csv`)
    .pipe(parse({ columns: true, skip_empty_lines: true, trim: true }));

  const records = [];
  for await (const record of parser) {
    records.push(record as Round);
  }
  // push the records into the database
  for (const record of records) {
    await prisma.round.create({
      data: record,
    });
  }
}

async function main() {
  await seedEERoundTable();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });