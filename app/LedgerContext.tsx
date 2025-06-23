'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { getAccounts, getExpenseItems, getIncomeSources, getMutualFunds, getTransactions, LedgerMutualFund } from '@/server actions/db';
import { mapMutualFundsWithUnits, convert_transactions_to_ledger } from '@/utils';
import type {
  account,
  expense_item,
  expense_transaction,
  income_source,
  income_transaction,
  investment_transaction,
  redemption_bucket,
  redemption_transaction,
  transaction,
  transfer_transaction,
  units_lot,
} from '@/generated/prisma';
import { usePreview } from './PreviewContext';

interface LedgerContextType {
  accounts: account[];
  expenseItems: expense_item[];
  incomeSources: income_source[];
  mutualFunds: LedgerMutualFund[];
  transactions: LedgerTransaction[];
  refreshEntities: () => Promise<void>;
  loading: boolean;
}

interface InitialData {
  accounts: account[];
  expenseItems: expense_item[];
  incomeSources: income_source[];
  mutualFunds: LedgerMutualFund[];
  transactions: LedgerTransaction[];
}

export type LedgerExpenseTransaction = transaction & {
  expense_transaction: expense_transaction;
};
export type LedgerIncomeTransaction = transaction & {
  income_transaction: income_transaction;
};
export type LedgerTransferTransaction = transaction & {
  transfer_transaction: transfer_transaction;
};
export type LedgerInvestmentTransaction = transaction & {
  investment_transaction: investment_transaction & {
    units_lot: units_lot;
  };
};
export type LedgerRedemptionTransaction = transaction & {
  redemption_transaction: redemption_transaction & {
    redemption_buckets: (redemption_bucket & {
      units_lot: units_lot;
    })[];
  };
};
export type LedgerTransaction =
  | LedgerExpenseTransaction
  | LedgerIncomeTransaction
  | LedgerTransferTransaction
  | LedgerInvestmentTransaction
  | LedgerRedemptionTransaction;

const LedgerContext = createContext<LedgerContextType | undefined>(undefined);

export function useLedgerData() {
  const ctx = useContext(LedgerContext);
  if (!ctx) throw new Error('useLedgerEntities must be used within a LedgerEntitiesProvider');
  return ctx;
}

export function LedgerDataProvider({ children, initialData }: { children: ReactNode; initialData?: InitialData }) {
  const [accounts, setAccounts] = useState<account[]>(initialData?.accounts || []);
  const [expenseItems, setExpenseItems] = useState<expense_item[]>(initialData?.expenseItems || []);
  const [incomeSources, setIncomeSources] = useState<income_source[]>(initialData?.incomeSources || []);
  const [mutualFunds, setMutualFunds] = useState<LedgerMutualFund[]>(initialData?.mutualFunds || []);
  const [transactions, setTransactions] = useState<LedgerTransaction[]>(initialData?.transactions || []);
  const [loading, setLoading] = useState(!initialData);
  const { preview, inPreview } = usePreview();

  const refreshEntities = useCallback(async () => {
    if (inPreview) return; // Don't refresh in preview mode
    setLoading(true);
    const [acc, exp, inc, mf, txs] = await Promise.all([getAccounts(), getExpenseItems(), getIncomeSources(), getMutualFunds(), getTransactions()]);
    setAccounts(acc);
    setExpenseItems(exp);
    setIncomeSources(inc);
    setMutualFunds(mf);
    setTransactions(txs);
    setLoading(false);
  }, [inPreview]);

  React.useEffect(() => {
    if (!inPreview && !initialData) refreshEntities();
    else if (!inPreview && initialData) setLoading(false); // We already have initial data
    else if (preview) {
      const mutual_fund_with_units = mapMutualFundsWithUnits(preview);
      const ledger_transactions = convert_transactions_to_ledger(preview);

      setAccounts(preview.account);
      setExpenseItems(preview.expense_item);
      setIncomeSources(preview.income_source);
      setMutualFunds(mutual_fund_with_units);
      setTransactions(ledger_transactions);
      setLoading(false);
    }
  }, [inPreview, preview, refreshEntities, initialData]);

  return (
    <LedgerContext.Provider value={{ accounts, expenseItems, incomeSources, mutualFunds, transactions, refreshEntities, loading }}>
      {children}
    </LedgerContext.Provider>
  );
}
