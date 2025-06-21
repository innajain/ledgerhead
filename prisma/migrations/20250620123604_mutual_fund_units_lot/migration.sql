/*
  Warnings:

  - You are about to drop the column `mutual_fund_id` on the `investment_transaction` table. All the data in the column will be lost.
  - You are about to drop the column `units_alloted` on the `investment_transaction` table. All the data in the column will be lost.
  - You are about to drop the column `units_held` on the `mutual_fund` table. All the data in the column will be lost.
  - You are about to drop the column `mutual_fund_id` on the `redemption_transaction` table. All the data in the column will be lost.
  - You are about to drop the column `units_sold` on the `redemption_transaction` table. All the data in the column will be lost.
  - Added the required column `units_bought` to the `investment_transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `units_redeemed` to the `redemption_transaction` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "mutual_fund_units_lot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mutual_fund_id" TEXT NOT NULL,
    "units_remaining" REAL NOT NULL,
    "redeemed_units" REAL NOT NULL DEFAULT 0,
    CONSTRAINT "mutual_fund_units_lot_mutual_fund_id_fkey" FOREIGN KEY ("mutual_fund_id") REFERENCES "mutual_fund" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "mutual_fund_units_lot_id_fkey" FOREIGN KEY ("id") REFERENCES "investment_transaction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_mutual_fund_units_lotToredemption_transaction" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_mutual_fund_units_lotToredemption_transaction_A_fkey" FOREIGN KEY ("A") REFERENCES "mutual_fund_units_lot" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_mutual_fund_units_lotToredemption_transaction_B_fkey" FOREIGN KEY ("B") REFERENCES "redemption_transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_expense_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from_account_id" TEXT NOT NULL,
    "to_sink_id" TEXT NOT NULL,
    CONSTRAINT "expense_transaction_id_fkey" FOREIGN KEY ("id") REFERENCES "transaction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "expense_transaction_from_account_id_fkey" FOREIGN KEY ("from_account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "expense_transaction_to_sink_id_fkey" FOREIGN KEY ("to_sink_id") REFERENCES "expense_item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_expense_transaction" ("from_account_id", "id", "to_sink_id") SELECT "from_account_id", "id", "to_sink_id" FROM "expense_transaction";
DROP TABLE "expense_transaction";
ALTER TABLE "new_expense_transaction" RENAME TO "expense_transaction";
CREATE TABLE "new_income_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from_source_id" TEXT NOT NULL,
    "to_account_id" TEXT NOT NULL,
    CONSTRAINT "income_transaction_id_fkey" FOREIGN KEY ("id") REFERENCES "transaction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "income_transaction_from_source_id_fkey" FOREIGN KEY ("from_source_id") REFERENCES "income_source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "income_transaction_to_account_id_fkey" FOREIGN KEY ("to_account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_income_transaction" ("from_source_id", "id", "to_account_id") SELECT "from_source_id", "id", "to_account_id" FROM "income_transaction";
DROP TABLE "income_transaction";
ALTER TABLE "new_income_transaction" RENAME TO "income_transaction";
CREATE TABLE "new_investment_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from_account_id" TEXT NOT NULL,
    "units_bought" REAL NOT NULL,
    "buy_nav" REAL NOT NULL,
    CONSTRAINT "investment_transaction_id_fkey" FOREIGN KEY ("id") REFERENCES "transaction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "investment_transaction_from_account_id_fkey" FOREIGN KEY ("from_account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_investment_transaction" ("buy_nav", "from_account_id", "id") SELECT "buy_nav", "from_account_id", "id" FROM "investment_transaction";
DROP TABLE "investment_transaction";
ALTER TABLE "new_investment_transaction" RENAME TO "investment_transaction";
CREATE TABLE "new_mutual_fund" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_mutual_fund" ("id", "name") SELECT "id", "name" FROM "mutual_fund";
DROP TABLE "mutual_fund";
ALTER TABLE "new_mutual_fund" RENAME TO "mutual_fund";
CREATE UNIQUE INDEX "mutual_fund_name_key" ON "mutual_fund"("name");
CREATE TABLE "new_redemption_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "to_account_id" TEXT NOT NULL,
    "sell_nav" REAL NOT NULL,
    "units_redeemed" REAL NOT NULL,
    CONSTRAINT "redemption_transaction_id_fkey" FOREIGN KEY ("id") REFERENCES "transaction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "redemption_transaction_to_account_id_fkey" FOREIGN KEY ("to_account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_redemption_transaction" ("id", "sell_nav", "to_account_id") SELECT "id", "sell_nav", "to_account_id" FROM "redemption_transaction";
DROP TABLE "redemption_transaction";
ALTER TABLE "new_redemption_transaction" RENAME TO "redemption_transaction";
CREATE TABLE "new_transfer_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from_account_id" TEXT NOT NULL,
    "to_account_id" TEXT NOT NULL,
    CONSTRAINT "transfer_transaction_id_fkey" FOREIGN KEY ("id") REFERENCES "transaction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "transfer_transaction_from_account_id_fkey" FOREIGN KEY ("from_account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "transfer_transaction_to_account_id_fkey" FOREIGN KEY ("to_account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_transfer_transaction" ("from_account_id", "id", "to_account_id") SELECT "from_account_id", "id", "to_account_id" FROM "transfer_transaction";
DROP TABLE "transfer_transaction";
ALTER TABLE "new_transfer_transaction" RENAME TO "transfer_transaction";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_mutual_fund_units_lotToredemption_transaction_AB_unique" ON "_mutual_fund_units_lotToredemption_transaction"("A", "B");

-- CreateIndex
CREATE INDEX "_mutual_fund_units_lotToredemption_transaction_B_index" ON "_mutual_fund_units_lotToredemption_transaction"("B");
