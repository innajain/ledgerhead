/*
  Warnings:

  - Made the column `isin` on table `mutual_fund` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_mutual_fund" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "isin" TEXT NOT NULL
);
INSERT INTO "new_mutual_fund" ("id", "isin", "name") SELECT "id", "isin", "name" FROM "mutual_fund";
DROP TABLE "mutual_fund";
ALTER TABLE "new_mutual_fund" RENAME TO "mutual_fund";
CREATE UNIQUE INDEX "mutual_fund_name_key" ON "mutual_fund"("name");
CREATE UNIQUE INDEX "mutual_fund_isin_key" ON "mutual_fund"("isin");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
