-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_expense_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "account_id" TEXT NOT NULL,
    "expense_item_id" TEXT NOT NULL,
    "transaction_id" TEXT NOT NULL,
    CONSTRAINT "expense_transaction_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "expense_transaction_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "expense_transaction_expense_item_id_fkey" FOREIGN KEY ("expense_item_id") REFERENCES "expense_item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_expense_transaction" ("account_id", "expense_item_id", "id", "transaction_id") SELECT "account_id", "expense_item_id", "id", "transaction_id" FROM "expense_transaction";
DROP TABLE "expense_transaction";
ALTER TABLE "new_expense_transaction" RENAME TO "expense_transaction";
CREATE UNIQUE INDEX "expense_transaction_transaction_id_key" ON "expense_transaction"("transaction_id");
CREATE TABLE "new_income_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "income_source_id" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "transaction_id" TEXT NOT NULL,
    CONSTRAINT "income_transaction_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "income_transaction_income_source_id_fkey" FOREIGN KEY ("income_source_id") REFERENCES "income_source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "income_transaction_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_income_transaction" ("account_id", "id", "income_source_id", "transaction_id") SELECT "account_id", "id", "income_source_id", "transaction_id" FROM "income_transaction";
DROP TABLE "income_transaction";
ALTER TABLE "new_income_transaction" RENAME TO "income_transaction";
CREATE UNIQUE INDEX "income_transaction_transaction_id_key" ON "income_transaction"("transaction_id");
CREATE TABLE "new_transfer_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from_account_id" TEXT NOT NULL,
    "to_account_id" TEXT NOT NULL,
    "transaction_id" TEXT NOT NULL,
    CONSTRAINT "transfer_transaction_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "transfer_transaction_from_account_id_fkey" FOREIGN KEY ("from_account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "transfer_transaction_to_account_id_fkey" FOREIGN KEY ("to_account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_transfer_transaction" ("from_account_id", "id", "to_account_id", "transaction_id") SELECT "from_account_id", "id", "to_account_id", "transaction_id" FROM "transfer_transaction";
DROP TABLE "transfer_transaction";
ALTER TABLE "new_transfer_transaction" RENAME TO "transfer_transaction";
CREATE UNIQUE INDEX "transfer_transaction_transaction_id_key" ON "transfer_transaction"("transaction_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
