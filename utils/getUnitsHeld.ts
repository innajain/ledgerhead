import { LedgerMutualFund } from "@/server actions/db";

export  function getUnitsHeld(mf: LedgerMutualFund) {
    let bought = 0;
    let redeemed = 0;

    mf.units_lots.forEach(lot => {
      bought += lot.investment_transaction!.units_bought;
      redeemed += lot.redemption_buckets.reduce((sum, b) => sum + b.units_redeemed, 0);
    });
    return bought - redeemed;
  }