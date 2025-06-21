'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { getAccounts, getExpenseItems, getIncomeSources, getMutualFunds, getTransactions, MutualFundWithUnits } from '@/server actions/db';
import type { account, expense_item, income_source, transaction } from '@/generated/prisma';
import { usePreview } from './PreviewContext';

interface LedgerContextType {
  accounts: account[];
  expenseItems: expense_item[];
  incomeSources: income_source[];
  mutualFunds: MutualFundWithUnits[];
  transactions: transaction[];
  refreshEntities: () => Promise<void>;
  loading: boolean;
}

const LedgerContext = createContext<LedgerContextType | undefined>(undefined);

export function useLedgerData() {
  const ctx = useContext(LedgerContext);
  if (!ctx) throw new Error('useLedgerEntities must be used within a LedgerEntitiesProvider');
  return ctx;
}

export function LedgerDataProvider({ children }: { children: ReactNode }) {
  const [accounts, setAccounts] = useState<account[]>([]);
  const [expenseItems, setExpenseItems] = useState<expense_item[]>([]);
  const [incomeSources, setIncomeSources] = useState<income_source[]>([]);
  const [mutualFunds, setMutualFunds] = useState<MutualFundWithUnits[]>([]);
  const [transactions, setTransactions] = useState<transaction[]>([]);
  const [loading, setLoading] = useState(true);
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
    if (!inPreview) refreshEntities();
    else if (preview) {
      const mutual_fund_with_units = preview.mutual_fund.map(mf => {
        const redemption_transactions_with_transaction = preview.redemption_transaction.map(rt => ({
          ...rt,
          transaction: preview.transaction.find(t => t.id === rt.id)!,
        }));
        const redemption_buckets_with_redemption_transaction = preview.redemption_bucket.map(rb => ({
          ...rb,
          redemption_transaction: redemption_transactions_with_transaction.find(rt => rt.id === rb.redemption_transaction_id)!,
        }));
        const investment_transactions_with_transaction = preview.investment_transaction.map(it => ({
          ...it,
          transaction: preview.transaction.find(t => t.id === it.id)!,
        }));
        const units = preview.mutual_fund_units_lot.filter(u => u.mutual_fund_id === mf.id);
        const units_with_investment_transaction_and_redemption_buckets = units.map(u => ({
          ...u,
          investment_transaction: investment_transactions_with_transaction.find(it => it.id === u.id)!,
          redemption_buckets: redemption_buckets_with_redemption_transaction.filter(rb => rb.mutual_fund_units_lot_id === u.id),
        }));
        return {
          ...mf,
          units: units_with_investment_transaction_and_redemption_buckets,
        };
      });

      setAccounts(preview.account);
      setExpenseItems(preview.expense_item);
      setIncomeSources(preview.income_source);
      setMutualFunds(mutual_fund_with_units);
      setTransactions(preview.transaction);
      setLoading(false);
    }
  }, [inPreview, preview, refreshEntities]);

  return (
    <LedgerContext.Provider value={{ accounts, expenseItems, incomeSources, mutualFunds, transactions, refreshEntities, loading }}>
      {children}
    </LedgerContext.Provider>
  );
}
