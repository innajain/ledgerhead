'use server';

import { PrismaClient } from '@/generated/prisma';
import type {
  investment_transaction,
  mutual_fund,
  mutual_fund_units_lot,
  redemption_bucket,
  redemption_transaction,
  transaction,
} from '@/generated/prisma';
import { create_db_history } from './historyActions';

const prisma = new PrismaClient();

export async function createMutualFund(data: { name: string; isin: string }): Promise<mutual_fund> {
  const mf = await prisma.mutual_fund.create({ data });
  await create_db_history('CREATE', 'MUTUAL_FUND', mf.id);
  return mf;
}

export type MutualFundWithUnits = mutual_fund & {
  units: (mutual_fund_units_lot & {
    investment_transaction: investment_transaction & { transaction: transaction };
    redemption_buckets: (redemption_bucket & { redemption_transaction: redemption_transaction & { transaction: transaction } })[];
  })[];
};

export async function getMutualFunds(): Promise<MutualFundWithUnits[]> {
  return prisma.mutual_fund.findMany({
    include: {
      units: {
        include: {
          investment_transaction: { include: { transaction: true } },
          redemption_buckets: { include: { redemption_transaction: { include: { transaction: true } } } },
        },
      },
    },
  });
}

export async function updateMutualFund(id: string, data: { name?: string }): Promise<mutual_fund> {
  const mf = await prisma.mutual_fund.update({ where: { id }, data });
  await create_db_history('MODIFY', 'MUTUAL_FUND', mf.id);
  return mf;
}

export async function deleteMutualFund(id: string): Promise<mutual_fund> {
  const mf = await prisma.mutual_fund.delete({ where: { id } });
  await create_db_history('DELETE', 'MUTUAL_FUND', mf.id);
  return mf;
}
