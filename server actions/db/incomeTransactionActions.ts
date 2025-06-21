'use server';

import { PrismaClient } from '@/generated/prisma';
import { create_db_history } from './historyActions';

const prisma = new PrismaClient();

export async function createIncomeTransaction(data: {
  date: string;
  time?: string | null;
  amount: number;
  note?: string | null;
  income_source_id: string;
  account_id: string;
}) {
  const tx = await prisma.transaction.create({
    data: {
      date: new Date(data.date),
      time: data.time ? new Date(`${data.date}T${data.time}`) : undefined,
      amount: data.amount,
      type: 'INCOME',
      note: data.note,
      income_transaction: {
        create: {
          income_source_id: data.income_source_id,
          account_id: data.account_id,
        },
      },
    },
  });
  await create_db_history('CREATE', 'INCOME_TRANSACTION', tx.id);
  return tx;
}
