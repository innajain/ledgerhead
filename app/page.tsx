'use client';

import { LedgerTransaction, useLedgerData } from './LedgerContext';
import { usePreview } from './PreviewContext';
import React from 'react';
import { CashFlow, get_cash_flows } from '@/utils/xirr';
import { getUnitsHeld } from '@/utils/getUnitsHeld';
import { getDbHistory } from '@/server actions/db/history/db_history';
import { getAccountBalances, getMonthwisePL, formatMonth } from '@/utils/pageUtils';
import { NetWorthCard } from './components/NetWorthCard';
import { BalanceSheet } from './components/BalanceSheet';
import { MutualFundHoldings } from './components/MutualFundHoldings';
import { MonthwisePL } from './components/MonthwisePL';
import { ExportButton } from './components/ExportButton';

export default function Home() {
  const { accounts, transactions, mutualFunds, navs, loading } = useLedgerData();
  const { inPreview } = usePreview();
  const txs = transactions as unknown as LedgerTransaction[];
  const balances = getAccountBalances(accounts, txs);
  const totalBalance = Math.round(Object.values(balances).reduce((a, b) => (a as number) + (b as number), 0) * 100) / 100;
  const monthwisePL = getMonthwisePL(txs);

  

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
  const [mfCashFlows, setMfCashFlows] = React.useState<Record<string, CashFlow[]>>(
    Object.fromEntries(mutualFunds.map(mf => [mf.id, get_cash_flows(mf, navs[mf.id]!)]))
  );
  const [allCashFlows, setAllCashFlows] = React.useState<CashFlow[]>(
    Object.values(mfCashFlows)
      .flat()
      .sort((a, b) => a.date.getTime() - b.date.getTime())
  );

  React.useEffect(() => {
    let isMounted = true;
    async function fetchCashFlows() {
      const flows: Record<string, CashFlow[]> = {};
      const all: CashFlow[] = [];
      await Promise.all(
        mutualFunds.map(async mf => {
          if (getUnitsHeld(mf) > 0) {
            const mfFlows = await get_cash_flows(mf, navs[mf.id]!);
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
    return () => {
      isMounted = false;
    };
  }, [loading, mutualFunds, navs]);

  // Disable all editing in preview mode
  const mfWithHoldings = mutualFunds.filter(mf => getUnitsHeld(mf) > 0);
  const totalCurrentValue = mfWithHoldings.reduce((sum, mf) => {
    const navInfo = navs[mf.id];
    const units = getUnitsHeld(mf);
    const nav = navInfo && navInfo.nav ? parseFloat(navInfo.nav) : null;
    const currentValue = nav !== null ? units * nav : 0;
    return sum + currentValue;
  }, 0);
  const netWorth = totalBalance + totalCurrentValue;

  return (
    <div className="flex flex-col items-center p-4">
      <NetWorthCard
        netWorth={netWorth}
        navs={navs}
        mfWithHoldingsCount={mfWithHoldings.length}
        mutualFundsCount={mutualFunds.length}
      />
      {inPreview && (
        <div className="mb-4 p-2 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded">
          <b>Preview mode:</b> You are viewing a snapshot. Editing is disabled.
        </div>
      )}
      <BalanceSheet
        accounts={accounts}
        balances={balances}
        totalBalance={totalBalance}
        loading={loading}
        openGroups={openGroups}
        toggleGroup={toggleGroup}
      />
      <MutualFundHoldings
        mutualFunds={mutualFunds}
        navs={navs}
        loading={loading}
        openDetails={openDetails}
        toggleDetails={toggleDetails}
        mfCashFlows={mfCashFlows}
        allCashFlows={allCashFlows}
      />
      <MonthwisePL
        monthwisePL={monthwisePL}
        loading={loading}
        formatMonth={formatMonth}
      />
      <ExportButton
        accounts={accounts}
        transactions={transactions}
        mutualFunds={mutualFunds}
        getDbHistory={getDbHistory}
      />
    </div>
  );
}
