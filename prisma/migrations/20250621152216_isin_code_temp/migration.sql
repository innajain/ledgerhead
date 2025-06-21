/*
  Warnings:

  - A unique constraint covering the columns `[isin]` on the table `mutual_fund` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "mutual_fund" ADD COLUMN "isin" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "mutual_fund_isin_key" ON "mutual_fund"("isin");
