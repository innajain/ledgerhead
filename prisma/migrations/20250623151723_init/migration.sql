-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "group" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "income_source" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "group" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "expense_item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "group" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "mutual_fund" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "isin" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "units_lot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mutual_fund_id" TEXT NOT NULL,
    CONSTRAINT "units_lot_mutual_fund_id_fkey" FOREIGN KEY ("mutual_fund_id") REFERENCES "mutual_fund" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "investment_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from_account_id" TEXT NOT NULL,
    "units_bought" REAL NOT NULL,
    "buy_nav" REAL NOT NULL,
    "allotment_date" DATETIME NOT NULL,
    "units_lot_id" TEXT NOT NULL,
    "transaction_id" TEXT NOT NULL,
    CONSTRAINT "investment_transaction_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transaction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "investment_transaction_from_account_id_fkey" FOREIGN KEY ("from_account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "investment_transaction_units_lot_id_fkey" FOREIGN KEY ("units_lot_id") REFERENCES "units_lot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "redemption_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "to_account_id" TEXT NOT NULL,
    "sell_nav" REAL NOT NULL,
    "redemption_date" DATETIME NOT NULL,
    "transaction_id" TEXT NOT NULL,
    CONSTRAINT "redemption_transaction_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transaction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "redemption_transaction_to_account_id_fkey" FOREIGN KEY ("to_account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "redemption_bucket" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "redemption_transaction_id" TEXT NOT NULL,
    "units_lot_id" TEXT NOT NULL,
    "units_redeemed" REAL NOT NULL,
    CONSTRAINT "redemption_bucket_redemption_transaction_id_fkey" FOREIGN KEY ("redemption_transaction_id") REFERENCES "redemption_transaction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "redemption_bucket_units_lot_id_fkey" FOREIGN KEY ("units_lot_id") REFERENCES "units_lot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date" DATETIME NOT NULL,
    "time" DATETIME,
    "amount" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "note" TEXT
);

-- CreateTable
CREATE TABLE "transfer_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from_account_id" TEXT NOT NULL,
    "to_account_id" TEXT NOT NULL,
    "transaction_id" TEXT NOT NULL,
    CONSTRAINT "transfer_transaction_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "transfer_transaction_from_account_id_fkey" FOREIGN KEY ("from_account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "transfer_transaction_to_account_id_fkey" FOREIGN KEY ("to_account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "expense_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "account_id" TEXT NOT NULL,
    "expense_item_id" TEXT NOT NULL,
    "transaction_id" TEXT NOT NULL,
    CONSTRAINT "expense_transaction_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "expense_transaction_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "expense_transaction_expense_item_id_fkey" FOREIGN KEY ("expense_item_id") REFERENCES "expense_item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "income_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "income_source_id" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "transaction_id" TEXT NOT NULL,
    CONSTRAINT "income_transaction_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "income_transaction_income_source_id_fkey" FOREIGN KEY ("income_source_id") REFERENCES "income_source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "income_transaction_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "db_history" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "event_type" TEXT NOT NULL,
    "entity_type" TEXT NOT NULL,
    "entity_id" TEXT NOT NULL,
    "snapshot" JSONB NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "account_name_group_key" ON "account"("name", "group");

-- CreateIndex
CREATE UNIQUE INDEX "mutual_fund_name_key" ON "mutual_fund"("name");

-- CreateIndex
CREATE UNIQUE INDEX "mutual_fund_isin_key" ON "mutual_fund"("isin");

-- CreateIndex
CREATE UNIQUE INDEX "investment_transaction_units_lot_id_key" ON "investment_transaction"("units_lot_id");

-- CreateIndex
CREATE UNIQUE INDEX "investment_transaction_transaction_id_key" ON "investment_transaction"("transaction_id");

-- CreateIndex
CREATE UNIQUE INDEX "redemption_transaction_transaction_id_key" ON "redemption_transaction"("transaction_id");

-- CreateIndex
CREATE UNIQUE INDEX "transfer_transaction_transaction_id_key" ON "transfer_transaction"("transaction_id");

-- CreateIndex
CREATE UNIQUE INDEX "expense_transaction_transaction_id_key" ON "expense_transaction"("transaction_id");

-- CreateIndex
CREATE UNIQUE INDEX "income_transaction_transaction_id_key" ON "income_transaction"("transaction_id");
