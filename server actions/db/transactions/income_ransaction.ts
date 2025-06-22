'use server';

import { prisma } from '../prisma';
import { create_db_history } from '../history/db_history';

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
    include: {
      income_transaction: true,
    },
  });
  await create_db_history('CREATE', 'INCOME_TRANSACTION', tx.income_transaction.id);
  return tx;
}
