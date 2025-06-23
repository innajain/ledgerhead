'use client';

import type { LedgerMutualFund } from '@/server actions/db';
import { getNAVFromISIN } from '@/server actions/getNAVFromISIN';
import { useLedgerData } from './LedgerContext';
import { usePreview } from './PreviewContext';
import React from 'react';
import { calc_xirr, CashFlow, get_cash_flows } from '@/utils/xirr';
import { getUnitsHeld } from '@/utils/getUnitsHeld';
import JSZip from 'jszip';
import { getDbHistory } from '@/server actions/db/history/db_history';
import { getDbFilePath } from '@/server actions/getDbFilePath';
import fs from 'fs';

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

function getMonthwisePL(transactions: TransactionWithRelations[]): [string, { income: number; expenses: number }][] {
  const pl: Record<string, { income: number; expenses: number }> = {};
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
  const totalBalance = Math.round(Object.values(balances).reduce((a, b) => (a as number) + (b as number), 0) * 100) / 100;
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


  function getAmountInvested(mf: LedgerMutualFund) {
    const invested = mf.units_lots.reduce((total, lot) => total + lot.investment_transaction.transaction.amount, 0);
    const redeemed = mf.units_lots.reduce((total, lot) => {
      return total + lot.redemption_buckets.reduce((sum, b) => sum + b.redemption_transaction.transaction.amount, 0);
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
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // State to track which account groups are open
  const [openGroups, setOpenGroups] = React.useState<Set<string>>(new Set());
  const toggleGroup = (group: string) => {
    setOpenGroups(prev => {
      const next = new Set(prev);
      if (next.has(group)) next.delete(group);
      else next.add(group);
      return next;
    });
  };

  // State to store cash flows for each mutual fund
  const [mfCashFlows, setMfCashFlows] = React.useState<Record<string, CashFlow[]>>({});
  const [allCashFlows, setAllCashFlows] = React.useState<CashFlow[] | null>(null);

  React.useEffect(() => {
    let isMounted = true;
    async function fetchCashFlows() {
      const flows: Record<string, CashFlow[]> = {};
      const all: CashFlow[] = [];
      await Promise.all(
        mutualFunds.map(async (mf) => {
          if (getUnitsHeld(mf) > 0) {
            const mfFlows = await get_cash_flows(mf);
            flows[mf.id] = mfFlows;
            all.push(...mfFlows);
          }
        })
      );
      if (isMounted) {
        setMfCashFlows(flows);
        setAllCashFlows(all.sort((a, b) => a.date.getTime() - b.date.getTime()));
      }
    }
    if (!loading && mutualFunds.length > 0) fetchCashFlows();
    return () => { isMounted = false; };
  }, [loading, mutualFunds, getUnitsHeld]);

  // Disable all editing in preview mode
  return (
    <div className="max-w-5xl mx-auto p-4">
      {inPreview && (
        <div className="mb-4 p-2 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded">
          <b>Preview mode:</b> You are viewing a snapshot. Editing is disabled.
        </div>
      )}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to LedgerHead</h1>
        <button
          className="mt-4 sm:mt-0 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold shadow"
          onClick={async () => {
            function toCSV(rows: any[], columns: string[]): string {
              const header = columns.join(',');
              const csvRows = rows.map(row => columns.map(col => JSON.stringify(row[col] ?? '')).join(','));
              return [header, ...csvRows].join('\n');
            }
            // Prepare CSVs
            const accountCols = accounts.length > 0 ? Object.keys(accounts[0]) : [];
            const accountsCSV = toCSV(accounts, accountCols);
            const txCols = transactions.length > 0 ? Object.keys(transactions[0]) : [];
            const transactionsCSV = toCSV(transactions, txCols);
            const mfCols = mutualFunds.length > 0 ? Object.keys(mutualFunds[0]) : [];
            const mutualFundsCSV = toCSV(mutualFunds, mfCols);
            // Fetch db_history and base64 encode snapshot
            let dbHistoryCSV = '';
            try {
              const dbHistory = await getDbHistory();
              function base64EncodeUnicode(str: string) {
                return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_match, p1) =>
                  String.fromCharCode(parseInt(p1, 16))
                ));
              }
              const dbHistoryEncoded = dbHistory.map(row => {
                let snap = row.snapshot;
                if (typeof snap !== 'string') snap = JSON.stringify(snap);
                return {
                  ...row,
                  snapshot: snap ? base64EncodeUnicode(snap) : ''
                };
              });
              const dbHistoryCols = dbHistoryEncoded.length > 0 ? Object.keys(dbHistoryEncoded[0]) : [];
              dbHistoryCSV = toCSV(dbHistoryEncoded, dbHistoryCols);
            } catch (e) {
              dbHistoryCSV = 'Error fetching db_history';
            }
            // Create ZIP
            const zip = new JSZip();
            zip.file('accounts.csv', accountsCSV);
            zip.file('transactions.csv', transactionsCSV);
            zip.file('mutual_funds.csv', mutualFundsCSV);
            zip.file('db_history.csv', dbHistoryCSV);
            // Add DB file to ZIP (server-side fetch)
            let dbFileBuffer: ArrayBuffer | null = null;
            try {
              // Only works server-side; for client, use an API route or server action
              dbFileBuffer = await fetch('/api/get-db-file').then(r => r.arrayBuffer());
            } catch (e) {
              dbFileBuffer = null;
            }
            if (dbFileBuffer) {
              zip.file('prod.db', dbFileBuffer);
            }
            const blob = await zip.generateAsync({ type: 'blob' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'ledgerhead_export.zip';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          }}
        >
          Export All Data to ZIP
        </button>
      </div>
      {/* Remove duplicate heading and button below */}
      {/* <h1 className="text-4xl font-bold mb-8 text-gray-900">Welcome to LedgerHead</h1> */}
      {/* <button ...>Export All Data to CSV</button> */}

      {/* Balance Sheet Section */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Balance Sheet</h2>
        {loading ? (
          <div className="text-gray-500">Loading...</div>
        ) : (
          (() => {
            // Group accounts by their group and calculate group totals
            const groupedAccounts: Record<string, any[]> = {};
            const groupBalances: Record<string, number> = {};
            const EPSILON = 0.01; // Threshold for floating point comparison

            accounts
              .filter(acc => Math.abs(balances[acc.id]) > EPSILON)
              .forEach(acc => {
                if (!groupedAccounts[acc.group]) {
                  groupedAccounts[acc.group] = [];
                  groupBalances[acc.group] = 0;
                }
                groupedAccounts[acc.group].push(acc);
                groupBalances[acc.group] = Math.round((groupBalances[acc.group] + balances[acc.id]) * 100) / 100;
              });

            const groups = Object.keys(groupedAccounts)
              .filter(group => Math.abs(groupBalances[group]) > EPSILON)
              .sort();

            return (
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-4">Account Group</th>
                    <th className="py-2 pr-4 text-right">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {groups.map(group => (
                    <React.Fragment key={group}>
                      <tr className="border-b cursor-pointer hover:bg-blue-50 transition" onClick={() => toggleGroup(group)}>
                        <td className="py-2 pr-4">{group}</td>
                        <td className="py-2 pr-4 text-right">₹{groupBalances[group].toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                      </tr>
                      {openGroups.has(group) &&
                        groupedAccounts[group].map(acc => (
                          <tr key={acc.id} className="border-b bg-gray-50">
                            <td className="py-2 pr-4 pl-8 text-gray-700">{acc.name}</td>
                            <td className="py-2 pr-4 text-right text-gray-700">
                              ₹{balances[acc.id].toLocaleString(undefined, { maximumFractionDigits: 2 })}
                            </td>
                          </tr>
                        ))}
                    </React.Fragment>
                  ))}
                  <tr className="font-bold border-t-2 border-gray-400 bg-gray-50">
                    <td className="py-3 pr-4">Total</td>
                    <td className="py-3 pr-4 text-right">₹{totalBalance.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                  </tr>
                </tbody>
              </table>
            );
          })()
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
          (() => {
            const mfWithHoldings = mutualFunds.filter(mf => getUnitsHeld(mf) > 0);
            const totalInvested = mfWithHoldings.reduce((sum, mf) => sum + getAmountInvested(mf), 0);
            const totalCurrentValue = mfWithHoldings.reduce((sum, mf) => {
              const navInfo = navs[mf.id];
              const units = getUnitsHeld(mf);
              const nav = navInfo && navInfo.nav ? parseFloat(navInfo.nav) : null;
              const currentValue = nav !== null ? units * nav : 0;
              return sum + currentValue;
            }, 0);
            const hasAnyCurrentValue = mfWithHoldings.some(mf => {
              const navInfo = navs[mf.id];
              return navInfo && navInfo.nav;
            });

            return (
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-4">Mutual Fund</th>
                    <th className="py-2 pr-4 text-right">Amount Invested</th>
                    <th className="py-2 pr-4 text-right">Current Value</th>
                    <th className="py-2 pr-4 text-right">XIRR</th>
                  </tr>
                </thead>
                <tbody>
                  {mfWithHoldings.map(mf => {
                    const navInfo = navs[mf.id];
                    const units = getUnitsHeld(mf);
                    const nav = navInfo && navInfo.nav ? parseFloat(navInfo.nav) : null;
                    const currentValue = nav !== null ? units * nav : null;
                    const showDetails = openDetails.has(mf.id);
                    const cashFlows = mfCashFlows[mf.id];
                    return (
                      <React.Fragment key={mf.id}>
                        <tr className="border-b cursor-pointer hover:bg-blue-50 transition" onClick={() => toggleDetails(mf.id)}>
                          <td className="py-2 pr-4">{mf.name}</td>
                          <td className="py-2 pr-4 text-right">₹{getAmountInvested(mf).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                          <td className="py-2 pr-4 text-right font-bold">
                            {currentValue !== null ? `₹${currentValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}` : '—'}
                          </td>
                          <td className="py-2 pr-4 text-right">
                            {cashFlows ? calc_xirr(cashFlows)?.toFixed(2) + '%' : <span className="text-gray-400">Loading…</span>}
                          </td>
                        </tr>
                        {showDetails && (
                          <tr>
                            <td colSpan={4} className="bg-gray-50 px-4 py-3">
                              <div className="flex flex-col gap-2">
                                <div>
                                  <span className="font-semibold">Units Held:</span> {units}
                                </div>
                                <div>
                                  <span className="font-semibold">Current NAV:</span> {navInfo ? navInfo.nav : '—'}
                                </div>
                                <div>
                                  <span className="font-semibold">NAV Date:</span> {navInfo ? navInfo.date : '—'}
                                </div>
                                {mf.isin && (
                                  <div>
                                    <span className="font-semibold">ISIN:</span> {mf.isin}
                                  </div>
                                )}
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                  {/* Totals Row */}
                  <tr className="border-t-2 border-gray-400 font-bold bg-gray-50">
                    <td className="py-3 pr-4">Total</td>
                    <td className="py-3 pr-4 text-right">₹{totalInvested.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                    <td className="py-3 pr-4 text-right">
                      {hasAnyCurrentValue ? `₹${totalCurrentValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}` : '—'}
                    </td>
                    <td className="py-3 pr-4 text-right">
                      {allCashFlows ? calc_xirr(allCashFlows)?.toFixed(2) + '%' : <span className="text-gray-400">Loading…</span>}
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })()
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
                  <td className="py-2 pr-4 text-right font-bold {net >= 0 ? 'text-green-600' : 'text-red-600'}">
                    ₹{(income - expenses).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
