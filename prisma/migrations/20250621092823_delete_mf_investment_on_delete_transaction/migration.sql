-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_investment_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from_account_id" TEXT NOT NULL,
    "units_bought" REAL NOT NULL,
    "buy_nav" REAL NOT NULL,
    CONSTRAINT "investment_transaction_id_fkey" FOREIGN KEY ("id") REFERENCES "transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "investment_transaction_from_account_id_fkey" FOREIGN KEY ("from_account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_investment_transaction" ("buy_nav", "from_account_id", "id", "units_bought") SELECT "buy_nav", "from_account_id", "id", "units_bought" FROM "investment_transaction";
DROP TABLE "investment_transaction";
ALTER TABLE "new_investment_transaction" RENAME TO "investment_transaction";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
