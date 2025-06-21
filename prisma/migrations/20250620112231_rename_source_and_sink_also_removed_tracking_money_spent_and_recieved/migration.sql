/*
  Warnings:

  - You are about to drop the column `money_spent` on the `expense_item` table. All the data in the column will be lost.
  - You are about to drop the column `money_received` on the `income_source` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_expense_item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "group" TEXT NOT NULL
);
INSERT INTO "new_expense_item" ("group", "id", "name") SELECT "group", "id", "name" FROM "expense_item";
DROP TABLE "expense_item";
ALTER TABLE "new_expense_item" RENAME TO "expense_item";
CREATE TABLE "new_income_source" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "group" TEXT NOT NULL
);
INSERT INTO "new_income_source" ("group", "id", "name") SELECT "group", "id", "name" FROM "income_source";
DROP TABLE "income_source";
ALTER TABLE "new_income_source" RENAME TO "income_source";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
