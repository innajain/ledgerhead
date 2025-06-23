import React from 'react';
import { calc_xirr, CashFlow } from '@/utils/xirr';
import { getUnitsHeld } from '@/utils/getUnitsHeld';
import type { LedgerMutualFund } from '@/server actions/db';

interface MutualFundHoldingsProps {
  mutualFunds: LedgerMutualFund[];
  navs: Record<string, { nav: string; date: string } | null>;
  loading: boolean;
  openDetails: Set<string>;
  toggleDetails: (id: string) => void;
  mfCashFlows: Record<string, CashFlow[]>;
  allCashFlows: CashFlow[];
}

export function MutualFundHoldings({ mutualFunds, navs, loading, openDetails, toggleDetails, mfCashFlows, allCashFlows }: MutualFundHoldingsProps) {
  return (
    <div className="w-full max-w-3xl bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Mutual Fund Holdings</h2>
      {loading ? (
        <div className="text-gray-500">Loading...</div>
      ) : mutualFunds.length === 0 ? (
        <div className="text-gray-500">No mutual funds yet.</div>
      ) : (
        <div className="w-full overflow-x-auto">
          {(() => {
            const mfWithHoldings = mutualFunds.filter(mf => getUnitsHeld(mf) > 0);
            const totalCurrentValue = mfWithHoldings.reduce((sum, mf) => {
              const navInfo = navs[mf.id];
              const mfUnits = getUnitsHeld(mf);
              const mfNav = navInfo && navInfo.nav ? parseFloat(navInfo.nav) : null;
              const mfCurrentValue = mfNav !== null ? mfUnits * mfNav : 0;
              return sum + mfCurrentValue;
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
                    <th className="py-2 pr-4 text-right">Current Value</th>
                    <th className="py-2 pr-4 text-right">XIRR</th>
                  </tr>
                </thead>
                <tbody>
                  {mfWithHoldings.map(mf => {
                    const navInfo = navs[mf.id];
                    const mfUnits = getUnitsHeld(mf);
                    const mfNav = navInfo && navInfo.nav ? parseFloat(navInfo.nav) : null;
                    const mfCurrentValue = mfNav !== null ? mfUnits * mfNav : null;
                    const showDetails = openDetails.has(mf.id);
                    const cashFlows = mfCashFlows[mf.id];
                    return (
                      <React.Fragment key={mf.id}>
                        <tr className="border-b cursor-pointer hover:bg-blue-50 transition" onClick={() => toggleDetails(mf.id)}>
                          <td className="py-2 pr-4">{mf.name}</td>
                          <td className="py-2 pr-4 text-right font-bold">
                            {mfCurrentValue !== null ? `₹${mfCurrentValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}` : '—'}
                          </td>
                          <td className="py-2 pr-4 text-right">
                            {cashFlows ? calc_xirr(cashFlows)?.toFixed(2) + '%' : <span className="text-gray-400">Loading…</span>}
                          </td>
                        </tr>
                        {showDetails && (
                          <tr>
                            <td colSpan={3} className="bg-gray-50 px-4 py-3">
                              <div className="flex flex-col gap-2">
                                <div>
                                  <span className="font-semibold">Units Held:</span> {mfUnits}
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
                    <td className="py-3 pr-4 text-right">
                      {hasAnyCurrentValue ? `₹${totalCurrentValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}` : '—'}
                    </td>
                    <td className="py-3 pr-4 text-right">
                      {allCashFlows ? (
                        allCashFlows.length !== 0 ? (
                          calc_xirr(allCashFlows)?.toFixed(2) + '%'
                        ) : (
                          '—'
                        )
                      ) : (
                        <span className="text-gray-400">Loading…</span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })()}
        </div>
      )}
    </div>
  );
}
