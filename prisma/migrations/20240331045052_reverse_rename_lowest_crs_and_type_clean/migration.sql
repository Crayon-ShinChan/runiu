/*
  Warnings:

  - You are about to drop the column `lowestCRS` on the `ee_round` table. All the data in the column will be lost.
  - You are about to drop the column `typeClean` on the `ee_round` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ee_round"
RENAME COLUMN "lowestCRS" TO "lowest_crs";

ALTER TABLE "ee_round"
RENAME COLUMN "typeClean" TO "type_clean";