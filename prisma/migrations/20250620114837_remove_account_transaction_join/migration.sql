/*
  Warnings:

  - You are about to drop the `account_transaction_join` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "account_transaction_join";
PRAGMA foreign_keys=on;
