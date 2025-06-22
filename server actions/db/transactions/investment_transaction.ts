'use server';

import { prisma } from '../prisma';
import { create_db_history } from '../history/db_history';

export async function createInvestmentTransaction(data: {
  date: string;
  time?: string | null;
  amount: number;
  note?: string | null;
  mutual_fund_id: string;
  from_account_id: string;
  units_bought: number;
  buy_nav: number;
  allotment_date: Date;
}) {
  console.log(data);
  
  const units_lot = await prisma.units_lot.create({
    data: {
      mutual_fund: {
        connect: {
          id: data.mutual_fund_id,
        },
      },
    },
  });
  const tx = await prisma.transaction.create({
    data: {
      date: new Date(data.date),
      time: data.time ? new Date(`${data.date}T${data.time}`) : undefined,
      amount: data.amount,
      type: 'MF_INVESTMENT',
      note: data.note,
      investment_transaction: {
        create: {
          from_account_id: data.from_account_id,
          units_bought: data.units_bought,
          buy_nav: data.buy_nav,
          allotment_date: data.allotment_date,
          units_lot_id: units_lot.id,
        },
      },
    },
    include: {
      investment_transaction: true,
    },
  });

  await create_db_history('CREATE', 'INVESTMENT_TRANSACTION', tx.investment_transaction.id);
  return tx;
}


