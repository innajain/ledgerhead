/*
  Warnings:

  - You are about to drop the `_mutual_fund_units_lotToredemption_transaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `balance` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `redeemed_units` on the `mutual_fund_units_lot` table. All the data in the column will be lost.
  - You are about to drop the column `units_remaining` on the `mutual_fund_units_lot` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "_mutual_fund_units_lotToredemption_transaction_B_index";

-- DropIndex
DROP INDEX "_mutual_fund_units_lotToredemption_transaction_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_mutual_fund_units_lotToredemption_transaction";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "redemption_bucket" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "redemption_transaction_id" TEXT NOT NULL,
    "mutual_fund_units_lot_id" TEXT NOT NULL,
    "units_redeemed" REAL NOT NULL,
    CONSTRAINT "redemption_bucket_redemption_transaction_id_fkey" FOREIGN KEY ("redemption_transaction_id") REFERENCES "redemption_transaction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "redemption_bucket_mutual_fund_units_lot_id_fkey" FOREIGN KEY ("mutual_fund_units_lot_id") REFERENCES "mutual_fund_units_lot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "group" TEXT NOT NULL
);
INSERT INTO "new_account" ("group", "id", "name") SELECT "group", "id", "name" FROM "account";
DROP TABLE "account";
ALTER TABLE "new_account" RENAME TO "account";
CREATE UNIQUE INDEX "account_name_group_key" ON "account"("name", "group");
CREATE TABLE "new_mutual_fund_units_lot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mutual_fund_id" TEXT NOT NULL,
    CONSTRAINT "mutual_fund_units_lot_mutual_fund_id_fkey" FOREIGN KEY ("mutual_fund_id") REFERENCES "mutual_fund" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "mutual_fund_units_lot_id_fkey" FOREIGN KEY ("id") REFERENCES "investment_transaction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_mutual_fund_units_lot" ("id", "mutual_fund_id") SELECT "id", "mutual_fund_id" FROM "mutual_fund_units_lot";
DROP TABLE "mutual_fund_units_lot";
ALTER TABLE "new_mutual_fund_units_lot" RENAME TO "mutual_fund_units_lot";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
