-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_mutual_fund_units_lot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mutual_fund_id" TEXT NOT NULL,
    CONSTRAINT "mutual_fund_units_lot_mutual_fund_id_fkey" FOREIGN KEY ("mutual_fund_id") REFERENCES "mutual_fund" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "mutual_fund_units_lot_id_fkey" FOREIGN KEY ("id") REFERENCES "investment_transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_mutual_fund_units_lot" ("id", "mutual_fund_id") SELECT "id", "mutual_fund_id" FROM "mutual_fund_units_lot";
DROP TABLE "mutual_fund_units_lot";
ALTER TABLE "new_mutual_fund_units_lot" RENAME TO "mutual_fund_units_lot";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
