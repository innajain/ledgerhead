'use server';

import {
  account,
  income_source,
  expense_item,
  mutual_fund,
  units_lot,
  investment_transaction,
  redemption_transaction,
  redemption_bucket,
  transaction,
  transfer_transaction,
  expense_transaction,
  income_transaction,
} from '@/generated/prisma';
import type { db_history_entity_type, db_history_event_type } from '@/generated/prisma';
import { prisma } from '../prisma';

export async function getDbHistory() {
  return prisma.db_history.findMany({ orderBy: { timestamp: 'desc' } });
}

export type Snapshot = {
  account: account[];
  income_source: income_source[];
  expense_item: expense_item[];
  mutual_fund: mutual_fund[];
  units_lot: units_lot[];
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
    units_lot: await prisma.units_lot.findMany(),
    investment_transaction: await prisma.investment_transaction.findMany(),
    redemption_transaction: await prisma.redemption_transaction.findMany(),
    redemption_bucket: await prisma.redemption_bucket.findMany(),
    transaction: await prisma.transaction.findMany(),
    transfer_transaction: await prisma.transfer_transaction.findMany(),
    expense_transaction: await prisma.expense_transaction.findMany(),
    income_transaction: await prisma.income_transaction.findMany(),
  };
}

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

export async function emptyDb() {
  const deletionOrder = [
    'redemption_bucket',
    'investment_transaction',
    'redemption_transaction', 
    'transfer_transaction',
    'expense_transaction',
    'income_transaction',
    'transaction',
    'units_lot',
    'mutual_fund',
    'account',
    'income_source',
    'expense_item'
  ];
  
  const deletionPromises = deletionOrder.map(table => {
    // @ts-ignore
    return prisma[table].deleteMany({});
  });
  
  await prisma.$transaction(deletionPromises);
}

export async function populateDbFromSnapshot(snapshot: Snapshot) {
  const insertionOrder = [
    'account',
    'income_source', 
    'expense_item',
    'mutual_fund',
    'units_lot',
    'transaction',
    'transfer_transaction',
    'expense_transaction', 
    'income_transaction',
    'investment_transaction',
    'redemption_transaction',
    'redemption_bucket'
  ];
  
  for (const table of insertionOrder) {
    const rows = snapshot[table as keyof Snapshot];
    if (!Array.isArray(rows)) continue;
    
    for (const row of rows) {
      try {
        // @ts-ignore
        await prisma[table].create({ data: row });
      } catch (error) {
        // Silently continue on error
      }
    }
  }
}
export async function restoreDbFromSnapshot(historyId: string) {
  const history = await prisma.db_history.findUnique({ where: { id: historyId } });
  if (!history) throw new Error('History item not found');
  const snapshot = history.snapshot as any as Snapshot;
  await emptyDb();
  await populateDbFromSnapshot(snapshot);
  await prisma.db_history.create({
    data: {
      event_type: 'RESTORE',
      entity_type: 'DB_HISTORY',
      entity_id: historyId,
      snapshot,
    },
  });
}

export async function deleteLatestDbHistory() {
  const [latest, secondLatest] = await prisma.db_history.findMany({ orderBy: { timestamp: 'desc' }, take: 2 });
  if (latest && secondLatest) {
    const secondLatestSnapshot = secondLatest.snapshot as any as Snapshot;
    await prisma.db_history.delete({ where: { id: latest.id } });
    await emptyDb();
    await populateDbFromSnapshot(secondLatestSnapshot);
  }
}
