-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_expense_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from_account_id" TEXT NOT NULL,
    "to_sink_id" TEXT NOT NULL,
    CONSTRAINT "expense_transaction_id_fkey" FOREIGN KEY ("id") REFERENCES "transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
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
    CONSTRAINT "income_transaction_id_fkey" FOREIGN KEY ("id") REFERENCES "transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "income_transaction_from_source_id_fkey" FOREIGN KEY ("from_source_id") REFERENCES "income_source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "income_transaction_to_account_id_fkey" FOREIGN KEY ("to_account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_income_transaction" ("from_source_id", "id", "to_account_id") SELECT "from_source_id", "id", "to_account_id" FROM "income_transaction";
DROP TABLE "income_transaction";
ALTER TABLE "new_income_transaction" RENAME TO "income_transaction";
CREATE TABLE "new_transfer_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from_account_id" TEXT NOT NULL,
    "to_account_id" TEXT NOT NULL,
    CONSTRAINT "transfer_transaction_id_fkey" FOREIGN KEY ("id") REFERENCES "transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "transfer_transaction_from_account_id_fkey" FOREIGN KEY ("from_account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "transfer_transaction_to_account_id_fkey" FOREIGN KEY ("to_account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_transfer_transaction" ("from_account_id", "id", "to_account_id") SELECT "from_account_id", "id", "to_account_id" FROM "transfer_transaction";
DROP TABLE "transfer_transaction";
ALTER TABLE "new_transfer_transaction" RENAME TO "transfer_transaction";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
