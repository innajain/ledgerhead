/*
  Warnings:

  - Made the column `group` on table `account` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "balance" REAL NOT NULL DEFAULT 0
);
INSERT INTO "new_account" ("balance", "group", "id", "name") SELECT "balance", "group", "id", "name" FROM "account";
DROP TABLE "account";
ALTER TABLE "new_account" RENAME TO "account";
CREATE UNIQUE INDEX "account_name_group_key" ON "account"("name", "group");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
