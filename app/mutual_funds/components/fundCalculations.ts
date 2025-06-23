import { LedgerMutualFund } from '@/server actions/db';

export function calculateTotalUnits(mf: LedgerMutualFund) {
  let totalUnits = 0;
  mf.units_lots?.forEach(lot => {
    totalUnits += lot.investment_transaction?.units_bought || 0;
    lot.redemption_buckets?.forEach(bucket => {
      totalUnits -= bucket.units_redeemed || 0;
    });
  });
  return totalUnits;
}

export function calculateTotalInvested(mf: LedgerMutualFund) {
  let totalInvested = 0;
  mf.units_lots?.forEach(lot => {
    if (lot.investment_transaction) {
      totalInvested += lot.investment_transaction.transaction.amount;
    }
  });
  return totalInvested;
}

export function calculateTotalRedeemed(mf: LedgerMutualFund) {
  let totalRedeemed = 0;
  mf.units_lots?.forEach(lot => {
    lot.redemption_buckets?.forEach(bucket => {
      if (bucket.redemption_transaction) {
        totalRedeemed += bucket.redemption_transaction.transaction.amount;
      }
    });
  });
  return totalRedeemed;
}
