'use server';

import { PrismaClient } from '@/generated/prisma';
import { create_db_history } from './historyActions';

const prisma = new PrismaClient();

export async function createInvestmentTransaction(data: {
  date: string;
  time?: string | null;
  amount: number;
  note?: string | null;
  mutual_fund_id: string;
  from_account_id: string;
  units_bought: number;
  buy_nav: number;
}) {
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
          buy_nav: data.buy_nav,
          units_bought: data.units_bought,
          mutual_fund_units_lot: { create: { mutual_fund_id: data.mutual_fund_id } },
        },
      },
    },
  });
  await create_db_history('CREATE', 'INVESTMENT_TRANSACTION', tx.id);
  return tx;
}

export async function createRedemptionTransaction(data: {
  date: string;
  time?: string | null;
  amount: number;
  note?: string | null;
  mutual_fund_id: string;
  to_account_id: string;
  sell_nav: number;
  units_sold: number;
}) {
  // find unit lots oldest to newest
  const unit_lots = await prisma.mutual_fund_units_lot.findMany({
    where: { mutual_fund_id: data.mutual_fund_id },
    select: {
      id: true,
      investment_transaction: { select: { units_bought: true, transaction: { select: { date: true, time: true } } } },
      redemption_buckets: { select: { units_redeemed: true } },
    },
  });

  // Sort lots by date, then by time (FIFO)
  unit_lots.sort((a, b) => {
    const ad = a.investment_transaction.transaction.date;
    const bd = b.investment_transaction.transaction.date;
    if (ad.getTime() !== bd.getTime()) return ad.getTime() - bd.getTime();
    const at = a.investment_transaction.transaction.time ? a.investment_transaction.transaction.time.getTime() : 0;
    const bt = b.investment_transaction.transaction.time ? b.investment_transaction.transaction.time.getTime() : 0;
    return at - bt;
  });

  const remaining_units = unit_lots.map(lot => ({
    id: lot.id,
    remaining_units: lot.redemption_buckets.reduce((acc, bucket) => acc + bucket.units_redeemed, 0),
  }));
  const filtered_lots = remaining_units.filter(lot => lot.remaining_units > 0);
  const redemption_buckets = [];
  let units_to_redeem = data.units_sold;
  for (const lot of filtered_lots) {
    if (units_to_redeem <= 0) break;
    const units_from_lot = Math.min(units_to_redeem, lot.remaining_units);
    redemption_buckets.push({
      mutual_fund_units_lot_id: lot.id,
      units_redeemed: units_from_lot,
    });
    units_to_redeem -= units_from_lot;
  }

  const tx = await prisma.transaction.create({
    data: {
      date: new Date(data.date),
      time: data.time ? new Date(`${data.date}T${data.time}`) : undefined,
      amount: data.amount,
      type: 'MF_REDEMPTION',
      note: data.note,
      redemption_transaction: {
        create: {
          to_account_id: data.to_account_id,
          sell_nav: data.sell_nav,
          units_redeemed: data.units_sold,
          redemption_buckets: { create: redemption_buckets },
        },
      },
    },
  });
  await create_db_history('CREATE', 'REDEMPTION_TRANSACTION', tx.id);
  return tx;
}
