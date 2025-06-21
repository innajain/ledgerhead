-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "group" TEXT,
    "balance" REAL NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "income_source" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "money_received" REAL NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "expense_item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "money_spent" REAL NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "mutual_fund" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "units_held" REAL NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "investment_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mutual_fund_id" TEXT NOT NULL,
    "from_account_id" TEXT NOT NULL,
    "units_alloted" REAL NOT NULL,
    "buy_nav" REAL NOT NULL,
    CONSTRAINT "investment_transaction_id_fkey" FOREIGN KEY ("id") REFERENCES "transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "investment_transaction_mutual_fund_id_fkey" FOREIGN KEY ("mutual_fund_id") REFERENCES "mutual_fund" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "investment_transaction_from_account_id_fkey" FOREIGN KEY ("from_account_id") REFERENCES "account" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "redemption_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mutual_fund_id" TEXT NOT NULL,
    "to_account_id" TEXT NOT NULL,
    "units_sold" REAL NOT NULL,
    "sell_nav" REAL NOT NULL,
    CONSTRAINT "redemption_transaction_id_fkey" FOREIGN KEY ("id") REFERENCES "transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "redemption_transaction_mutual_fund_id_fkey" FOREIGN KEY ("mutual_fund_id") REFERENCES "mutual_fund" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "redemption_transaction_to_account_id_fkey" FOREIGN KEY ("to_account_id") REFERENCES "account" ("id") ON DELETE CASCADE ON UPDATE CASCADE
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
CREATE TABLE "account_transaction_join" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "transaction_id" TEXT NOT NULL,
    CONSTRAINT "account_transaction_join_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "account" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "account_transaction_join_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "transfer_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from_account_id" TEXT NOT NULL,
    "to_account_id" TEXT NOT NULL,
    CONSTRAINT "transfer_transaction_id_fkey" FOREIGN KEY ("id") REFERENCES "transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "transfer_transaction_from_account_id_fkey" FOREIGN KEY ("from_account_id") REFERENCES "account" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "transfer_transaction_to_account_id_fkey" FOREIGN KEY ("to_account_id") REFERENCES "account" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "expense_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from_account_id" TEXT NOT NULL,
    "to_sink_id" TEXT NOT NULL,
    CONSTRAINT "expense_transaction_id_fkey" FOREIGN KEY ("id") REFERENCES "transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "expense_transaction_from_account_id_fkey" FOREIGN KEY ("from_account_id") REFERENCES "account" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "expense_transaction_to_sink_id_fkey" FOREIGN KEY ("to_sink_id") REFERENCES "expense_item" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "income_transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from_source_id" TEXT NOT NULL,
    "to_account_id" TEXT NOT NULL,
    CONSTRAINT "income_transaction_id_fkey" FOREIGN KEY ("id") REFERENCES "transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "income_transaction_from_source_id_fkey" FOREIGN KEY ("from_source_id") REFERENCES "income_source" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "income_transaction_to_account_id_fkey" FOREIGN KEY ("to_account_id") REFERENCES "account" ("id") ON DELETE CASCADE ON UPDATE CASCADE
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
CREATE UNIQUE INDEX "account_transaction_join_account_id_transaction_id_key" ON "account_transaction_join"("account_id", "transaction_id");
