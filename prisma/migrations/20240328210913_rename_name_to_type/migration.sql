/*
  Warnings:

  - You are about to drop the column `name` on the `ee_round` table. All the data in the column will be lost.
  - You are about to drop the column `name_clean` on the `ee_round` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ee_round"
RENAME COLUMN "name" TO "type";

ALTER TABLE "ee_round"
RENAME COLUMN "name_clean" TO "type_clean";
