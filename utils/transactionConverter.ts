import type { LedgerTransaction } from '@/app/LedgerContext';
import type { Snapshot } from '@/server actions/db/history/db_history';

export function convert_transactions_to_ledger(snapshot: Snapshot): LedgerTransaction[] {
  return snapshot.transaction.map(tx => {
    const baseTransaction = { ...tx };

    // Find and attach related transaction data based on transaction type
    const result: any = baseTransaction;

    if (tx.type === 'EXPENSE') {
      const expenseTransaction = snapshot.expense_transaction.find(et => et.transaction_id === tx.id);
      if (expenseTransaction) {
        result.expense_transaction = expenseTransaction;
      }
    } else if (tx.type === 'INCOME') {
      const incomeTransaction = snapshot.income_transaction.find(it => it.transaction_id === tx.id);
      if (incomeTransaction) {
        result.income_transaction = incomeTransaction;
      }
    } else if (tx.type === 'TRANSFER') {
      const transferTransaction = snapshot.transfer_transaction.find(tt => tt.transaction_id === tx.id);
      if (transferTransaction) {
        result.transfer_transaction = transferTransaction;
      }
    } else if (tx.type === 'MF_INVESTMENT') {
      const investmentTransaction = snapshot.investment_transaction.find(it => it.transaction_id === tx.id);
      if (investmentTransaction) {
        const unitsLot = snapshot.units_lot.find(ul => ul.id === investmentTransaction.units_lot_id);
        result.investment_transaction = {
          ...investmentTransaction,
          units_lot: unitsLot
        };
      }
    } else if (tx.type === 'MF_REDEMPTION') {
      const redemptionTransaction = snapshot.redemption_transaction.find(rt => rt.transaction_id === tx.id);
      if (redemptionTransaction) {
        const redemptionBuckets = snapshot.redemption_bucket
          .filter(rb => rb.redemption_transaction_id === redemptionTransaction.id)
          .map(rb => ({
            ...rb,
            units_lot: snapshot.units_lot.find(ul => ul.id === rb.units_lot_id)
          }));
        
        result.redemption_transaction = {
          ...redemptionTransaction,
          redemption_buckets: redemptionBuckets
        };
      }
    }

    return result as LedgerTransaction;
  });
}
