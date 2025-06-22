'use server';

import { prisma } from '../prisma';
import { create_db_history } from '../history/db_history';

export async function updateTransferTransaction(id: string, data: {
  date: string;
  time?: string | null;
  amount: number;
  note?: string | null;
  from_account_id: string;
  to_account_id: string;
}) {
  const tx = await prisma.transaction.update({
    where: { id },
    data: {
      date: new Date(data.date),
      time: data.time ? new Date(`${data.date}T${data.time}`) : undefined,
      amount: data.amount,
      note: data.note,
      transfer_transaction: {
        update: {
          from_account_id: data.from_account_id,
          to_account_id: data.to_account_id,
        },
      },
    },
  });
  await create_db_history('MODIFY', 'TRANSFER_TRANSACTION', tx.id);
  return tx;
}

export async function updateExpenseTransaction(id: string, data: {
  date: string;
  time?: string | null;
  amount: number;
  note?: string | null;
  account_id: string;
  expense_item_id: string;
}) {
  const tx = await prisma.transaction.update({
    where: { id },
    data: {
      date: new Date(data.date),
      time: data.time ? new Date(`${data.date}T${data.time}`) : undefined,
      amount: data.amount,
      note: data.note,
      expense_transaction: {
        update: {
          account_id: data.account_id,
          expense_item_id: data.expense_item_id,
        },
      },
    },
  });
  await create_db_history('MODIFY', 'EXPENSE_TRANSACTION', tx.id);
  return tx;
}

export async function updateIncomeTransaction(id: string, data: {
  date: string;
  time?: string | null;
  amount: number;
  note?: string | null;
  income_source_id: string;
  account_id: string;
}) {
  const tx = await prisma.transaction.update({
    where: { id },
    data: {
      date: new Date(data.date),
      time: data.time ? new Date(`${data.date}T${data.time}`) : undefined,
      amount: data.amount,
      note: data.note,
      income_transaction: {
        update: {
          income_source_id: data.income_source_id,
          account_id: data.account_id,
        },
      },
    },
  });
  await create_db_history('MODIFY', 'INCOME_TRANSACTION', tx.id);
  return tx;
}

export async function updateInvestmentTransaction(id: string, data: {
  date: string;
  time?: string | null;
  amount: number;
  note?: string | null;
  from_account_id: string;
  units_bought: number;
  buy_nav: number;
}) {
  const tx = await prisma.transaction.update({
    where: { id },
    data: {
      date: new Date(data.date),
      time: data.time ? new Date(`${data.date}T${data.time}`) : undefined,
      amount: data.amount,
      note: data.note,
      investment_transaction: {
        update: {
          from_account_id: data.from_account_id,
          units_bought: data.units_bought,
          buy_nav: data.buy_nav,
        },
      },
    },
  });
  await create_db_history('MODIFY', 'INVESTMENT_TRANSACTION', tx.id);
  return tx;
}

export async function updateRedemptionTransaction(id: string, data: {
  date: string;
  time?: string | null;
  amount: number;
  note?: string | null;
  to_account_id: string;
  sell_nav: number;
}) {
  const tx = await prisma.transaction.update({
    where: { id },
    data: {
      date: new Date(data.date),
      time: data.time ? new Date(`${data.date}T${data.time}`) : undefined,
      amount: data.amount,
      note: data.note,
      redemption_transaction: {
        update: {
          to_account_id: data.to_account_id,
          sell_nav: data.sell_nav,
        },
      },
    },
  });
  await create_db_history('MODIFY', 'REDEMPTION_TRANSACTION', tx.id);
  return tx;
}
