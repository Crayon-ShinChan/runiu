/*
  Warnings:

  - You are about to drop the column `lowest_crs` on the `ee_round` table. All the data in the column will be lost.
  - You are about to drop the column `type_clean` on the `ee_round` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ee_round"
RENAME COLUMN "lowest_crs" TO "lowestCRS";

ALTER TABLE "ee_round"
RENAME COLUMN "type_clean" TO "typeClean";