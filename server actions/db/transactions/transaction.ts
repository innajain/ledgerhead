'use server';

import { prisma } from '../prisma';
import type { transaction } from '@/generated/prisma';
import { create_db_history } from '../history/db_history';
import type { db_history_entity_type } from '@/generated/prisma';
import { LedgerTransaction } from '@/app/LedgerContext';

export async function getTransactions(): Promise<LedgerTransaction[]> {
  return prisma.transaction.findMany({
    include: {
      expense_transaction: true,
      income_transaction: true,
      transfer_transaction: true,
      investment_transaction: { include: { units_lot: true } },
      redemption_transaction: {
        include: {
          redemption_buckets: {
            include: { units_lot: true },
          },
        },
      },
    },
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
