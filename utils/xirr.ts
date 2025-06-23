import { redemption_transaction, transaction } from '@/generated/prisma';
import { LedgerMutualFund } from '@/server actions/db';
import { getNAVFromISIN } from '@/server actions/getNAVFromISIN';
import { getUnitsHeld } from './getUnitsHeld';

export type CashFlow = {
  date: Date;
  amount: number;
};
export function calc_xirr(cashFlows: CashFlow[]): number | null {
  console.log('Calculating XIRR for cash flows:', cashFlows);

  // Input validation
  if (cashFlows.length < 2) {
    console.error('XIRR requires at least 2 cash flows');
    return null;
  }

  // Check for mixed signs (at least one positive and one negative)
  const hasPositive = cashFlows.some(cf => cf.amount > 0);
  const hasNegative = cashFlows.some(cf => cf.amount < 0);

  if (!hasPositive || !hasNegative) {
    console.error('XIRR requires both positive and negative cash flows');
    return null;
  }

  // Sort cash flows by date to ensure proper calculation
  const sortedCashFlows = [...cashFlows].sort((a, b) => a.date.getTime() - b.date.getTime());

  let xirr = 0.1; // Initial guess

  for (let i = 0; i < 1000; i++) {
    let f = 0; // Function value
    let df = 0; // Derivative value

    for (const { date, amount } of sortedCashFlows) {
      // Calculate time difference in years from the first cash flow
      const t = (date.getTime() - sortedCashFlows[0].date.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

      // Avoid division by zero or negative base in power calculation
      if (1 + xirr <= 0 && t !== 0) {
        console.error('Invalid rate leading to negative base in power calculation');
        return null;
      }

      const term = t === 0 ? 1 : Math.pow(1 + xirr, t);

      // NPV calculation
      f += amount / term;

      // Derivative calculation
      if (t !== 0) {
        df -= (t * amount) / (term * (1 + xirr));
      }
    }

    // Check if derivative is too small (would cause division issues)
    if (Math.abs(df) < 1e-12) {
      console.error('Derivative too small, cannot continue iteration');
      return null;
    }

    // Newton-Raphson update
    const newXirr = xirr - f / df;

    // Check for convergence
    if (Math.abs(newXirr - xirr) < 1e-8) {
      console.log(`XIRR converged after ${i + 1} iterations: ${newXirr}`);
      return newXirr;
    }

    // Prevent extreme values that could cause overflow
    if (Math.abs(newXirr) > 100) {
      console.error('XIRR calculation diverged to extreme values');
      return null;
    }

    xirr = newXirr;
  }

  console.error('XIRR did not converge after 1000 iterations');
  return null;
}

export async function get_cash_flows(mf: LedgerMutualFund) {
  const investments = mf.units_lots.map(lot => ({
    date: lot.investment_transaction!.allotment_date,
    amount: -1 * lot.investment_transaction!.transaction.amount,
  }));
  const redemptions = mf.units_lots.reduce((acc, lot) => {
    const lotRedemptions = lot.redemption_buckets.map(bucket => bucket.redemption_transaction);
    return [...acc, ...lotRedemptions];
  }, []);

  const uniqueRedemptions = get_unique_redemption_txs(mf).map(r => ({
    date: r.transaction.date,
    amount: r.transaction.amount,
  }));

  const curr_nav = await getNAVFromISIN(mf.isin);
  if (curr_nav !== null) {
    uniqueRedemptions.push({
      date: new Date(),
      amount: parseFloat(curr_nav.nav) * getUnitsHeld(mf),
    });
  }

  return [...investments, ...uniqueRedemptions].sort((a, b) => a.date.getTime() - b.date.getTime());
}

export function get_unique_redemption_txs(mf: LedgerMutualFund) {
  const redemptions = mf.units_lots.reduce((acc, lot) => {
    const lotRedemptions = lot.redemption_buckets.map(bucket => bucket.redemption_transaction);
    return [...acc, ...lotRedemptions];
  }, [] as (redemption_transaction & { transaction: transaction })[]);

  return Array.from(new Set(redemptions.map(r => r.id))).map(id => redemptions.find(r => r.id === id)!);
}
