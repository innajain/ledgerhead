'use server';

import {
  PrismaClient,
  account,
  income_source,
  expense_item,
  mutual_fund,
  mutual_fund_units_lot,
  investment_transaction,
  redemption_transaction,
  redemption_bucket,
  transaction,
  transfer_transaction,
  expense_transaction,
  income_transaction,
} from '@/generated/prisma';
import type { db_history_entity_type, db_history_event_type } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function getDbHistory() {
  return prisma.db_history.findMany({ orderBy: { timestamp: 'desc' } });
}

export type snapshot = {
  account: account[];
  income_source: income_source[];
  expense_item: expense_item[];
  mutual_fund: mutual_fund[];
  mutual_fund_units_lot: mutual_fund_units_lot[];
  investment_transaction: investment_transaction[];
  redemption_transaction: redemption_transaction[];
  redemption_bucket: redemption_bucket[];
  transaction: transaction[];
  transfer_transaction: transfer_transaction[];
  expense_transaction: expense_transaction[];
  income_transaction: income_transaction[];
};
export async function getFullDbSnapshot() {
  return {
    account: await prisma.account.findMany(),
    income_source: await prisma.income_source.findMany(),
    expense_item: await prisma.expense_item.findMany(),
    mutual_fund: await prisma.mutual_fund.findMany(),
    mutual_fund_units_lot: await prisma.mutual_fund_units_lot.findMany(),
    investment_transaction: await prisma.investment_transaction.findMany(),
    redemption_transaction: await prisma.redemption_transaction.findMany(),
    redemption_bucket: await prisma.redemption_bucket.findMany(),
    transaction: await prisma.transaction.findMany(),
    transfer_transaction: await prisma.transfer_transaction.findMany(),
    expense_transaction: await prisma.expense_transaction.findMany(),
    income_transaction: await prisma.income_transaction.findMany(),
  };
}

// Utility: Log db_history event
export async function create_db_history(event_type: db_history_event_type, entity_type: db_history_entity_type, entity_id: string) {
  const snapshot = await getFullDbSnapshot();
  await prisma.db_history.create({
    data: {
      event_type,
      entity_type,
      entity_id,
      snapshot,
    },
  });
}
