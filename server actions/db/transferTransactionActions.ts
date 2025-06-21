'use server';

import { PrismaClient, transaction_type } from '@/generated/prisma';
import { create_db_history } from './historyActions';

const prisma = new PrismaClient();

export async function createTransferTransaction(data: {
  date: string;
  time?: string | null;
  amount: number;
  note?: string | null;
  from_account_id: string;
  to_account_id: string;
}) {
  const tx = await prisma.transaction.create({
    data: {
      date: new Date(data.date),
      time: data.time ? new Date(`${data.date}T${data.time}`) : undefined,
      amount: data.amount,
      type: 'TRANSFER',
      note: data.note,
      transfer_transaction: {
        create: {
          from_account_id: data.from_account_id,
          to_account_id: data.to_account_id,
        },
      },
    },
  });
  await create_db_history('CREATE', 'TRANSFER_TRANSACTION', tx.id);
  return tx;
}
