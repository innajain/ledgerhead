'use server';

import { PrismaClient } from '@/generated/prisma';
import { create_db_history } from './historyActions';

const prisma = new PrismaClient();

export async function createExpenseTransaction(data: {
  date: string;
  time?: string | null;
  amount: number;
  note?: string | null;
  account_id: string;
  expense_item_id: string;
}) {
  const tx = await prisma.transaction.create({
    data: {
      date: new Date(data.date),
      time: data.time ? new Date(`${data.date}T${data.time}`) : undefined,
      amount: data.amount,
      type: 'EXPENSE',
      note: data.note,
      expense_transaction: {
        create: {
          account_id: data.account_id,
          expense_item_id: data.expense_item_id,
        },
      },
    },
  });
  await create_db_history('CREATE', 'EXPENSE_TRANSACTION', tx.id);
  return tx;
}
