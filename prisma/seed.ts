import { parse as parseCSV} from "csv-parse";
import fs from "fs";
import { PrismaClient } from "@prisma/client";
import { parseISO, parse } from "date-fns";

const prisma = new PrismaClient();

const SEEDING_DATA_FILE_PATH = "prisma/seeding-data";

async function seedEERoundTable() {
  const parser = fs
    .createReadStream(`${SEEDING_DATA_FILE_PATH}/ee_round.csv`)
    .pipe(parseCSV({ columns: true, skip_empty_lines: true, trim: true }));

  const records = [];
  for await (const record of parser) {
    records.push(record as Record<string, string>);
  }
  
  const datetimeFormat = "yyyy-MM-dd HH:mm:ss"

  for (const record of records) {
    const distributionDetails: Record<string, number> = {};
    for (let i = 1; i <= 18; i++) {
      distributionDetails[`dd${i}`] = Number(record[`dd${i}`]);
    }

    await prisma.round.create({
      data: {
        number: record.number!,
        url: record.url,
        type: record.type,
        typeClean: record.type_clean,
        issued: Number(record.issued),
        lowestCRS: Number(record.lowest_crs),
        date: record.date ? parseISO(record.date) : null,
        datetime: record.datetime ? parse(record.datetime, datetimeFormat, new Date()) : null,
        cutOffDatetime: record.cut_off_datetime ? parse(record.cut_off_datetime, datetimeFormat, new Date()) : null,
        distributionAsOnDate: record.distribution_as_on_date ? parseISO(record.distribution_as_on_date): null,
        ...distributionDetails
      }
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
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e)
    await prisma.$disconnect();
    process.exit(1);
  });