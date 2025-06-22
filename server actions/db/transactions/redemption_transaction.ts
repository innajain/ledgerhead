'use server';

import { create_db_history } from '../history/db_history';
import { prisma } from '../prisma';

export async function createRedemptionTransaction(data: {
  date: string;
  time?: string | null;
  amount: number;
  note?: string | null;
  mutual_fund_id: string;
  to_account_id: string;
  sell_nav: number;
  units_sold: number;
  redemption_date: Date;
}) {
  // find unit lots oldest to newest
  const unit_lots = await prisma.units_lot.findMany({
    where: { mutual_fund_id: data.mutual_fund_id },
    select: {
      id: true,
      investment_transaction: true,
      redemption_buckets: { select: { units_redeemed: true } },
    },
  });

  // Sort lots by date, then by time (FIFO)
  unit_lots.sort((a, b) => {
    const ad = a.investment_transaction.allotment_date;
    const bd = b.investment_transaction.allotment_date;
    return ad.getTime() - bd.getTime();
  });

  const remaining_units = unit_lots.map(lot => ({
    id: lot.id,
    remaining_units: lot.investment_transaction.units_bought - lot.redemption_buckets.reduce((acc, bucket) => acc + bucket.units_redeemed, 0),
  }));
  const filtered_lots = remaining_units.filter(lot => lot.remaining_units > 0);
  const redemption_buckets = [];
  let units_to_redeem = data.units_sold;
  for (const lot of filtered_lots) {
    if (units_to_redeem <= 0) break;
    const units_from_lot = Math.min(units_to_redeem, lot.remaining_units);
    redemption_buckets.push({
      units_lot_id: lot.id,
      units_redeemed: units_from_lot,
    });
    units_to_redeem -= units_from_lot;
  }
  console.log('redemption_buckets', redemption_buckets);

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
          redemption_date: data.redemption_date,
          redemption_buckets: { create: redemption_buckets },
        },
      },
    },
    include: {
      redemption_transaction: true,
    },
  });
  await create_db_history('CREATE', 'REDEMPTION_TRANSACTION', tx.redemption_transaction.id);
  return tx;
}
