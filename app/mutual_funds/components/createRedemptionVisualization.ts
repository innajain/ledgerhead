import { LedgerMutualFund } from '@/server actions/db';

export type RedemptionSegment = {
  type: 'redeemed' | 'remaining';
  units: number;
  percentage: number;
  color: string;
  txnId: string | null;
  date: Date | null;
};
export type LotVisualization = {
  id: string;
  index: number;
  totalUnits: number;
  segments: RedemptionSegment[];
};
export type RedemptionTxnVis = {
  id: string;
  date: Date;
  buckets: { lotId: string; unitsRedeemed: number }[];
  color?: string;
};

export function createRedemptionVisualization(mf: LedgerMutualFund) {
  if (!mf.units_lots || mf.units_lots.length === 0) return { lots: [] as LotVisualization[], redemptionTransactions: [] as RedemptionTxnVis[] };

  // Create lot data with original units
  const lots: LotVisualization[] = mf.units_lots.map((lot, index) => ({
    id: lot.id,
    index: index,
    totalUnits: lot.investment_transaction?.units_bought || 0,
    segments: [],
  }));

  // Collect all unique redemption transactions
  const redemptionTransactionsMap = new Map<string, RedemptionTxnVis>();
  mf.units_lots.forEach(lot => {
    lot.redemption_buckets?.forEach(bucket => {
      if (bucket.redemption_transaction) {
        const txnId = bucket.redemption_transaction.id;
        if (!redemptionTransactionsMap.has(txnId)) {
          redemptionTransactionsMap.set(txnId, {
            id: txnId,
            date: bucket.redemption_transaction.redemption_date,
            buckets: [],
          });
        }
        redemptionTransactionsMap.get(txnId)!.buckets.push({
          lotId: lot.id,
          unitsRedeemed: bucket.units_redeemed || 0,
        });
      }
    });
  });

  // Sort redemption transactions by date
  const redemptionTransactions = Array.from(redemptionTransactionsMap.values()).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Color palette for different redemption transactions
  const colors = ['#f87171', '#60a5fa', '#4ade80', '#facc15', '#c084fc', '#f472b6', '#818cf8', '#fb923c'];

  // Assign colors to redemption transactions
  redemptionTransactions.forEach((txn, index) => {
    txn.color = colors[index % colors.length];
  });

  // Create segments for each lot
  lots.forEach(lot => {
    let processedUnits = 0;
    redemptionTransactions.forEach(txn => {
      const bucket = txn.buckets.find(b => b.lotId === lot.id);
      if (bucket && bucket.unitsRedeemed > 0) {
        const percentage = lot.totalUnits > 0 ? (bucket.unitsRedeemed / lot.totalUnits) * 100 : 0;
        lot.segments.push({
          type: 'redeemed',
          units: bucket.unitsRedeemed,
          percentage: percentage,
          color: txn.color!,
          txnId: txn.id,
          date: txn.date,
        });
        processedUnits += bucket.unitsRedeemed;
      }
    });
    // Add remaining units segment
    const remainingUnits = Math.round((lot.totalUnits - processedUnits) * 1e6) / 1e6;
    if (remainingUnits > 0) {
      const percentage = lot.totalUnits > 0 ? (remainingUnits / lot.totalUnits) * 100 : 0;
      lot.segments.push({
        type: 'remaining',
        units: remainingUnits,
        percentage: percentage,
        color: '#e5e7eb',
        txnId: null,
        date: null,
      });
    }
  });

  return { lots, redemptionTransactions };
}
