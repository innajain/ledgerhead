import { LedgerMutualFund } from "@/server actions/db";

function getAmountInvested(mf: LedgerMutualFund) {
    const invested = mf.units_lots.reduce(
      (total, lot) => (lot.investment_transaction ? total + lot.investment_transaction.transaction.amount : total),
      0
    );
    const redeemed = mf.units_lots.reduce((total, lot) => {
      return total + lot.redemption_buckets.reduce((sum, b) => sum + b.redemption_transaction.transaction.amount, 0);
    }, 0);
    return invested - redeemed;
  }