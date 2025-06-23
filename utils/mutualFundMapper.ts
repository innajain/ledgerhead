import type { LedgerMutualFund } from '@/server actions/db';
import type { Snapshot } from '@/server actions/db/history/db_history';

export function mapMutualFundsWithUnits(snapshot: Snapshot): LedgerMutualFund[] {
  const redemptionTxs = snapshot.redemption_transaction.map(rt => ({
    ...rt,
    transaction: snapshot.transaction.find(t => t.id === rt.transaction_id)!,
  }));
  
  const redemptionBuckets = snapshot.redemption_bucket.map(rb => ({
    ...rb,
    redemption_transaction: redemptionTxs.find(rt => rt.id === rb.redemption_transaction_id)!,
  }));
  
  const investmentTxs = snapshot.investment_transaction.map(it => ({
    ...it,
    transaction: snapshot.transaction.find(t => t.id === it.transaction_id)!,
  }));

  return snapshot.mutual_fund.map(mf => ({
    ...mf,
    units_lots: snapshot.units_lot
      .filter(u => u.mutual_fund_id === mf.id)
      .map(u => ({
        ...u,
        investment_transaction: investmentTxs.find(it => it.units_lot_id === u.id)!,
        redemption_buckets: redemptionBuckets.filter(rb => rb.units_lot_id === u.id),
      })),
  }));
}
