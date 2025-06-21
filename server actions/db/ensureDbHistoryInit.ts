import { PrismaClient } from '@/generated/prisma';
import type { db_history_event_type, db_history_entity_type } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function ensureDbHistoryInit() {
  const count = await prisma.db_history.count();
  if (count === 0) {
    const snapshot = await getFullDbSnapshot();
    await prisma.db_history.create({
      data: {
        event_type: 'INIT' as db_history_event_type,
        entity_type: 'DB_HISTORY' as db_history_entity_type,
        entity_id: 'init',
        snapshot,
      },
    });
  }
}

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
