'use client';

import React from 'react';
import { useLedgerData } from '@/app/LedgerContext';
import { usePreview } from '../PreviewContext';
import { LedgerMutualFund } from '@/server actions/db';
import { Modal } from '../components/Modal';
import { FundCard } from './components/FundCard';
import { createRedemptionVisualization } from './components/createRedemptionVisualization';
import { calculateTotalUnits, calculateTotalInvested, calculateTotalRedeemed } from './components/fundCalculations';

export default function MutualFundsPage() {
  const { mutualFunds, loading } = useLedgerData();
  const { inPreview } = usePreview();
  const [expandedFunds, setExpandedFunds] = React.useState<Set<string>>(new Set());
  const [modalLot, setModalLot] = React.useState<{
    lot: LedgerMutualFund['units_lots'][0];
    lotIndex: number;
  } | null>(null);

  const toggleExpanded = (fundId: string) => {
    setExpandedFunds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(fundId)) {
        newSet.delete(fundId);
      } else {
        newSet.add(fundId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        {inPreview && (
          <div className="mb-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <strong>Preview mode:</strong> You are viewing a snapshot.
              </div>
            </div>
          </div>
        )}

        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Mutual Funds</h1>
          <p className="text-gray-600 mt-1">Track your mutual fund investments and redemptions</p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-500">Loading mutual funds...</p>
          </div>
        ) : mutualFunds.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No mutual funds found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Mutual funds will appear here when you make investment transactions. Start investing to see your portfolio.
            </p>
          </div>
        ) : (
          <>
            {/* Ensure Tailwind includes all dynamic segment colors */}
            <div className="hidden">
              <span className="bg-red-400"></span>
              <span className="bg-blue-400"></span>
              <span className="bg-green-400"></span>
              <span className="bg-yellow-400"></span>
              <span className="bg-purple-400"></span>
              <span className="bg-pink-400"></span>
              <span className="bg-indigo-400"></span>
              <span className="bg-orange-400"></span>
              <span className="bg-gray-200"></span>
            </div>

            {/* Mobile view - Show cards */}
            <div className="block sm:hidden">
              {mutualFunds.map(mf => (
                <FundCard key={mf.id} mf={mf} expanded={expandedFunds.has(mf.id)} onToggle={toggleExpanded} setModalLot={setModalLot} />
              ))}
            </div>

            {/* Desktop/Tablet view - Show table */}
            <div className="hidden sm:block">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left py-4 px-6 font-medium text-gray-900">Fund Details</th>
                        <th className="text-left py-4 px-4 font-medium text-gray-900">Units</th>
                        <th className="text-left py-4 px-4 font-medium text-gray-900">Invested</th>
                        <th className="text-left py-4 px-4 font-medium text-gray-900">Redeemed</th>
                        <th className="text-left py-4 px-6 font-medium text-gray-900">Net Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {mutualFunds.map(mf => {
                        const totalUnits = calculateTotalUnits(mf);
                        const totalInvested = calculateTotalInvested(mf);
                        const totalRedeemed = calculateTotalRedeemed(mf);
                        const currentValue = totalInvested - totalRedeemed;
                        const isExpanded = expandedFunds.has(mf.id);
                        const visualization = createRedemptionVisualization(mf);

                        return (
                          <React.Fragment key={mf.id}>
                            <tr
                              className={`hover:bg-gray-50 cursor-pointer transition-colors ${isExpanded ? 'bg-blue-50' : ''}`}
                              onClick={() => toggleExpanded(mf.id)}
                            >
                              <td className="py-4 px-6">
                                <div>
                                  <div className="font-medium text-gray-900" title={mf.name}>
                                    {mf.name}
                                  </div>
                                  <div className="text-sm text-gray-500 mt-1">{mf.isin}</div>
                                </div>
                              </td>
                              <td className="py-4 px-4 font-medium text-gray-900">{totalUnits}</td>
                              <td className="py-4 px-4 font-medium text-green-600">₹{totalInvested.toLocaleString('en-IN')}</td>
                              <td className="py-4 px-4 font-medium text-red-600">₹{totalRedeemed.toLocaleString('en-IN')}</td>
                              <td className="py-4 px-6 font-medium text-blue-600">₹{currentValue.toLocaleString('en-IN')}</td>
                            </tr>
                            {isExpanded && mf.units_lots && mf.units_lots.length > 0 && (
                              <tr>
                                <td colSpan={5} className="bg-gray-50 p-0">
                                  <div className="p-6">
                                    <div className="font-medium mb-4 text-gray-800">Units Lots Redemption Visualization</div>

                                    {/* Visual representation of lots and redemptions */}
                                    <div className="mb-6 space-y-4">
                                      {visualization.lots.map(lot => (
                                        <div
                                          key={lot.id}
                                          className="border rounded-lg p-4 bg-white cursor-pointer hover:bg-blue-50 transition-colors"
                                          onClick={() => {
                                            const lotIdx = mf.units_lots.findIndex(l => l.id === lot.id);
                                            setModalLot({ lot: mf.units_lots[lotIdx], lotIndex: lotIdx });
                                          }}
                                          title="Click for detailed breakdown"
                                        >
                                          <div className="flex justify-between items-center mb-3">
                                            <div className="font-medium text-gray-900">
                                              Lot #{lot.index + 1}
                                              {mf.units_lots[lot.index]?.investment_transaction?.allotment_date && (
                                                <span className="text-xs text-gray-500 ml-2">
                                                  (
                                                  {mf.units_lots[lot.index]?.investment_transaction?.allotment_date
                                                    ? new Date(
                                                        String(mf.units_lots[lot.index]?.investment_transaction?.allotment_date)
                                                      ).toLocaleDateString('en-IN')
                                                    : ''}
                                                  )
                                                </span>
                                              )}
                                            </div>
                                            <div className="text-sm text-gray-600">{lot.totalUnits} total units</div>
                                          </div>

                                          {/* Visual bar representation */}
                                          <div className="mb-3">
                                            <div className="flex h-8 rounded-lg overflow-hidden border border-gray-300 bg-gray-100">
                                              {lot.segments.map((segment, segIndex) => (
                                                <div
                                                  key={segIndex}
                                                  className={`flex items-center justify-center text-xs font-medium relative ${
                                                    segment.type === 'remaining' ? 'text-gray-800' : 'text-white'
                                                  }`}
                                                  style={{ width: `${segment.percentage}%`, backgroundColor: segment.color }}
                                                  title={`${segment.type === 'redeemed' ? 'Redeemed' : 'Remaining'}: ${
                                                    segment.units
                                                  } units (${segment.percentage.toFixed(1)}%)`}
                                                >
                                                  {segment.percentage > 15 && <span className="text-xs font-semibold">{segment.units}</span>}
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>

                                    {/* Legend for redemption transactions */}
                                    {visualization.redemptionTransactions.length > 0 && (
                                      <div>
                                        <div className="font-medium mb-3 text-gray-800">Redemption Transactions Legend</div>
                                        <div className="flex flex-wrap gap-4 text-sm">
                                          {visualization.redemptionTransactions.map((txn, index) => (
                                            <div key={txn.id} className="flex items-center gap-2">
                                              <div className="w-4 h-4 rounded" style={{ backgroundColor: txn.color }}></div>
                                              <span className="text-gray-600">
                                                Redemption #{index + 1} ({new Date(txn.date).toLocaleDateString('en-IN')})
                                              </span>
                                            </div>
                                          ))}
                                          <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded bg-gray-300"></div>
                                            <span className="text-gray-600">Remaining Units</span>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Modal for lot breakdown */}
        <Modal open={!!modalLot} onClose={() => setModalLot(null)}>
          {modalLot && (
            <div className="max-h-[80vh] overflow-y-auto w-[90vw] sm:w-[600px] md:w-[700px]">
              <div className="font-medium text-lg mb-3">Lot #{modalLot.lotIndex + 1} Detailed Breakdown</div>
              <div className="mb-4">
                <div className="text-sm text-gray-600">
                  Remaining Units:{' '}
                  <span className="font-semibold text-gray-900">
                    {modalLot.lot.investment_transaction
                      ? modalLot.lot.investment_transaction.units_bought -
                        (modalLot.lot.redemption_buckets?.reduce((sum, bucket) => sum + (bucket.units_redeemed || 0), 0) || 0)
                      : 'N/A'}
                  </span>
                </div>
              </div>
              {modalLot.lot.investment_transaction && (
                <div className="mb-4 p-4 bg-green-50 rounded-lg">
                  <div className="font-medium text-green-700 mb-3">Investment Details</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2 text-sm">
                    <div>
                      <div className="text-gray-500 mb-1">Date</div>
                      <div className="font-medium">{new Date(modalLot.lot.investment_transaction.allotment_date).toLocaleDateString('en-IN')}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Units</div>
                      <div className="font-medium">{modalLot.lot.investment_transaction.units_bought}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">NAV</div>
                      <div className="font-medium">₹{modalLot.lot.investment_transaction.buy_nav}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Amount</div>
                      <div className="font-medium">₹{modalLot.lot.investment_transaction.transaction.amount.toLocaleString('en-IN')}</div>
                    </div>
                  </div>
                </div>
              )}
              {modalLot.lot.redemption_buckets && modalLot.lot.redemption_buckets.length > 0 && (
                <div className="p-4 bg-red-50 rounded-lg">
                  <div className="font-medium text-red-700 mb-3">Redemption Details</div>
                  <div className="grid">
                    {modalLot.lot.redemption_buckets.map((bucket, idx) => (
                      <div key={bucket.id} className={`p-3` + (idx !== 0 ? ' border-t-2 border-red-200 mt-2' : '')}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2 text-sm">
                          <div>
                            <div className="text-gray-500 mb-1">Date</div>
                            <div className="font-medium">
                              {bucket.redemption_transaction
                                ? new Date(bucket.redemption_transaction.redemption_date).toLocaleDateString('en-IN')
                                : 'N/A'}
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-500 mb-1">Units</div>
                            <div className="font-medium">{bucket.units_redeemed}</div>
                          </div>
                          <div>
                            <div className="text-gray-500 mb-1">NAV</div>
                            <div className="font-medium">{bucket.redemption_transaction ? `₹${bucket.redemption_transaction.sell_nav}` : 'N/A'}</div>
                          </div>
                          <div>
                            <div className="text-gray-500 mb-1">Amount</div>
                            <div className="font-medium">
                              {bucket.redemption_transaction ? `₹${bucket.redemption_transaction.transaction.amount.toLocaleString('en-IN')}` : 'N/A'}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}
