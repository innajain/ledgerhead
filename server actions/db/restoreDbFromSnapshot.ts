'use server';

import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function restoreDbFromSnapshot(historyId: string) {
  const history = await prisma.db_history.findUnique({ where: { id: historyId } });
  if (!history) throw new Error('History item not found');
  const snapshot = history.snapshot as Record<string, any[]>;

  // Delete all data from all tables (except db_history)
  await prisma.$transaction([
    prisma.account.deleteMany({}),
    prisma.income_source.deleteMany({}),
    prisma.expense_item.deleteMany({}),
    prisma.mutual_fund.deleteMany({}),
    prisma.mutual_fund_units_lot.deleteMany({}),
    prisma.investment_transaction.deleteMany({}),
    prisma.redemption_transaction.deleteMany({}),
    prisma.redemption_bucket.deleteMany({}),
    prisma.transaction.deleteMany({}),
    prisma.transfer_transaction.deleteMany({}),
    prisma.expense_transaction.deleteMany({}),
    prisma.income_transaction.deleteMany({}),
  ]);

  // Restore all tables from snapshot
  for (const [table, rows] of Object.entries(snapshot)) {
    if (!Array.isArray(rows) || table === 'db_history') continue;
    for (const row of rows) {
      // @ts-ignore
      await prisma[table].create({ data: row });
    }
  }

  // Log restore event
  await prisma.db_history.create({
    data: {
      event_type: 'RESTORE',
      entity_type: 'DB_HISTORY',
      entity_id: historyId,
      snapshot,
    },
  });
}
