'use server';

import { PrismaClient } from '@/generated/prisma';
import type { transaction } from '@/generated/prisma';
import { create_db_history } from './historyActions';
import type { db_history_event_type, db_history_entity_type } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function getTransactions(): Promise<transaction[]> {
  return prisma.transaction.findMany({
    include: {
      expense_transaction: true,
      income_transaction: true,
      investment_transaction: { include: { mutual_fund_units_lot: true } },
      redemption_transaction: { include: { redemption_buckets: true } },
      transfer_transaction: true,
    }
  });
}

export async function deleteTransaction(id: string): Promise<transaction> {
  const tx = await prisma.transaction.delete({ where: { id } });
  // Try to infer type, but fallback to generic TRANSACTION if not available
  let entityType: db_history_entity_type = 'ACCOUNT_TRANSACTION';
  if (tx.type === 'EXPENSE') entityType = 'EXPENSE_TRANSACTION';
  else if (tx.type === 'INCOME') entityType = 'INCOME_TRANSACTION';
  else if (tx.type === 'TRANSFER') entityType = 'TRANSFER_TRANSACTION';
  else if (tx.type === 'MF_INVESTMENT') entityType = 'INVESTMENT_TRANSACTION';
  else if (tx.type === 'MF_REDEMPTION') entityType = 'REDEMPTION_TRANSACTION';
  await create_db_history('DELETE', entityType, tx.id);
  return tx;
}
