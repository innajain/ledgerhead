'use client';

import type { MutualFundWithUnits } from '@/server actions/db';
import { getNAVFromISIN } from '@/server actions/getNAVFromISIN';
import { useLedgerData } from './LedgerContext';
import { usePreview } from "./PreviewContext";
import React from 'react';

type TransactionWithRelations = {
  id: string;
  created_at: Date;
  date: Date;
  time: Date | null;
  amount: number;
  type: string;
  note: string | null;
  income_transaction?: { account_id: string } | null;
  expense_transaction?: { account_id: string } | null;
  transfer_transaction?: { from_account_id: string; to_account_id: string } | null;
  investment_transaction?: { from_account_id: string } | null;
  redemption_transaction?: { to_account_id: string } | null;
};

// If import still fails, define the type inline as a workaround
// type MutualFundWithUnits = any;

function getAccountBalances(accounts: any[], transactions: TransactionWithRelations[]): Record<string, number> {
  const balances: Record<string, number> = {};
  accounts.forEach((acc: any) => {
    balances[acc.id] = 0;
  });
  transactions.forEach((tx: TransactionWithRelations) => {
    switch (tx.type) {
      case 'INCOME':
        if (tx.income_transaction) {
          balances[tx.income_transaction.account_id] += tx.amount;
        }
        break;
      case 'EXPENSE':
        if (tx.expense_transaction) {
          balances[tx.expense_transaction.account_id] -= tx.amount;
        }
        break;
      case 'TRANSFER':
        if (tx.transfer_transaction) {
          balances[tx.transfer_transaction.from_account_id] -= tx.amount;
          balances[tx.transfer_transaction.to_account_id] += tx.amount;
        }
        break;
      case 'MF_INVESTMENT':
        if (tx.investment_transaction) {
          balances[tx.investment_transaction.from_account_id] -= tx.amount;
        }
        break;
      case 'MF_REDEMPTION':
        if (tx.redemption_transaction) {
          balances[tx.redemption_transaction.to_account_id] += tx.amount;
        }
        break;
      default:
        break;
    }
  });
  return balances;
}

function getMonthwisePL(transactions: TransactionWithRelations[]): [string, { income: number, expenses: number }][] {
  const pl: Record<string, { income: number, expenses: number }> = {};
  transactions.forEach((tx: TransactionWithRelations) => {
    const date = new Date(tx.date);
    const month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    if (!pl[month]) pl[month] = { income: 0, expenses: 0 };
    if (tx.type === 'INCOME') {
      pl[month].income += tx.amount;
    } else if (tx.type === 'EXPENSE') {
      pl[month].expenses += tx.amount;
    }
  });
  return Object.entries(pl).sort((a, b) => b[0].localeCompare(a[0]));
}

export default function Home() {
  const { accounts, transactions, mutualFunds, loading } = useLedgerData();
  const { inPreview } = usePreview();
  const txs = transactions as unknown as TransactionWithRelations[];
  const balances = getAccountBalances(accounts, txs);
  const totalBalance = Object.values(balances).reduce((a, b) => (a as number) + (b as number), 0);
  const monthwisePL = getMonthwisePL(txs);
  const [navs, setNavs] = React.useState<Record<string, { nav: string; date: string } | null>>({});

  React.useEffect(() => {
    async function fetchNAVs() {
      const navResults: Record<string, { nav: string; date: string } | null> = {};
      for (const mf of mutualFunds) {
        if (mf.isin) {
          navResults[mf.id] = await getNAVFromISIN(mf.isin);
        }
      }
      setNavs(navResults);
    }
    if (!loading && mutualFunds.length > 0) fetchNAVs();
    // eslint-disable-next-line
  }, [loading, mutualFunds.length]);

  // Mutual Fund Holdings Calculation
  function getUnitsHeld(mf: MutualFundWithUnits) {
    let bought = 0;
    let redeemed = 0;
    mf.units.forEach((lot: any) => {
      bought += lot.investment_transaction.units_bought;
      redeemed += lot.redemption_buckets.reduce((sum: number, b: any) => sum + b.units_redeemed, 0);
    });
    return bought - redeemed;
  }

  function getAmountInvested(mf: MutualFundWithUnits) {
    const invested = mf.units.reduce((total: number, lot: any) => total + lot.investment_transaction.transaction.amount, 0);
    const redeemed = mf.units.reduce((total: number, lot: any) => {
      return total + lot.redemption_buckets.reduce((sum: number, b: any) => sum + b.redemption_transaction.transaction.amount, 0);
    }, 0);
    return invested - redeemed;
  }

  function formatMonth(month: string) {
    // month is in 'YYYY-MM' format
    const [year, m] = month.split('-');
    const date = new Date(Number(year), Number(m) - 1);
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  }

  // State to track which mutual funds have details open
  const [openDetails, setOpenDetails] = React.useState<Set<string>>(new Set());
  const toggleDetails = (id: string) => {
    setOpenDetails(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  // Disable all editing in preview mode
  return (
    <div className="max-w-5xl mx-auto p-4">
      {inPreview && (
        <div className="mb-4 p-2 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded">
          <b>Preview mode:</b> You are viewing a snapshot. Editing is disabled.
        </div>
      )}
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Welcome to LedgerHead</h1>
      {/* Balance Sheet Section */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Balance Sheet</h2>
        {loading ? (
          <div className="text-gray-500">Loading...</div>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2 pr-4">Account</th>
                <th className="py-2 pr-4">Group</th>
                <th className="py-2 pr-4 text-right">Balance</th>
              </tr>
            </thead>
            <tbody>
              {accounts.filter(acc => balances[acc.id] !== 0)
              .map(acc => (
                <tr key={acc.id} className="border-b last:border-0">
                  <td className="py-2 pr-4">{acc.name}</td>
                  <td className="py-2 pr-4">{acc.group}</td>
                  <td className="py-2 pr-4 text-right">₹{(balances[acc.id]).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                </tr>
              ))}
              <tr className="font-bold">
                <td className="py-2 pr-4">Total</td>
                <td className="py-2 pr-4"></td>
                <td className="py-2 pr-4 text-right">₹{(totalBalance).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {/* Mutual Fund Holdings Section */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Mutual Fund Holdings</h2>
        {loading ? (
          <div className="text-gray-500">Loading...</div>
        ) : mutualFunds.length === 0 ? (
          <div className="text-gray-500">No mutual funds yet.</div>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2 pr-4">Mutual Fund</th>
                <th className="py-2 pr-4 text-right">Amount Invested</th>
                <th className="py-2 pr-4 text-right">Current Value</th>
              </tr>
            </thead>
            <tbody>
              {mutualFunds
                .filter(mf => getUnitsHeld(mf) > 0)
                .map(mf => {
                  const navInfo = navs[mf.id];
                  const units = getUnitsHeld(mf);
                  const nav = navInfo && navInfo.nav ? parseFloat(navInfo.nav) : null;
                  const currentValue = nav !== null ? units * nav : null;
                  const showDetails = openDetails.has(mf.id);
                  return (
                    <React.Fragment key={mf.id}>
                      <tr className="border-b last:border-0 cursor-pointer hover:bg-blue-50 transition"
                          onClick={() => toggleDetails(mf.id)}>
                        <td className="py-2 pr-4">{mf.name}</td>
                        <td className="py-2 pr-4 text-right">₹{getAmountInvested(mf).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                        <td className="py-2 pr-4 text-right font-bold">{currentValue !== null ? `₹${currentValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}` : '—'}</td>
                      </tr>
                      {showDetails && (
                        <tr>
                          <td colSpan={3} className="bg-gray-50 px-4 py-3">
                            <div className="flex flex-col gap-2">
                              <div><span className="font-semibold">Units Held:</span> {units}</div>
                              <div><span className="font-semibold">Current NAV:</span> {navInfo ? navInfo.nav : '—'}</div>
                              <div><span className="font-semibold">NAV Date:</span> {navInfo ? navInfo.date : '—'}</div>
                              {mf.isin && <div><span className="font-semibold">ISIN:</span> {mf.isin}</div>}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>

      {/* Monthwise P&L Section */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Monthwise P&amp;L</h2>
        {loading ? (
          <div className="text-gray-500">Loading...</div>
        ) : monthwisePL.length === 0 ? (
          <div className="text-gray-500">No income or expenses yet.</div>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2 pr-4">Month</th>
                <th className="py-2 pr-4 text-right">Income</th>
                <th className="py-2 pr-4 text-right">Expenses</th>
                <th className="py-2 pr-4 text-right">Net</th>
              </tr>
            </thead>
            <tbody>
              {monthwisePL.map(([month, { income, expenses }]) => (
                <tr key={month} className="border-b last:border-0">
                  <td className="py-2 pr-4">{formatMonth(month)}</td>
                  <td className="py-2 pr-4 text-right">₹{income.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                  <td className="py-2 pr-4 text-right">₹{expenses.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                  <td className="py-2 pr-4 text-right font-bold {net >= 0 ? 'text-green-600' : 'text-red-600'}">₹{(income - expenses).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
