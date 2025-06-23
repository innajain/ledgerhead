"use client";

import React from "react";
import { useLedgerData } from "@/app/LedgerContext";
import { usePreview } from "../PreviewContext";
import { MutualFundWithUnits } from "@/server actions/db";

export default function MutualFundsPage() {
  const { mutualFunds, loading } = useLedgerData();
  const { inPreview } = usePreview();
  const [expandedFunds, setExpandedFunds] = React.useState<Set<string>>(new Set());

  // Remove any, use MutualFundWithUnits
  const calculateTotalUnits = (mf: MutualFundWithUnits) => {
    let totalUnits = 0;
    mf.units_lots?.forEach((lot) => {
      totalUnits += lot.investment_transaction?.units_bought || 0;
      lot.redemption_buckets?.forEach((bucket) => {
        totalUnits -= bucket.units_redeemed || 0;
      });
    });
    return totalUnits;
  };

  const calculateTotalInvested = (mf: MutualFundWithUnits) => {
    let totalInvested = 0;
    mf.units_lots?.forEach((lot) => {
      if (lot.investment_transaction) {
        totalInvested += lot.investment_transaction.transaction.amount;
      }
    });
    return totalInvested;
  };

  const calculateTotalRedeemed = (mf: MutualFundWithUnits) => {
    let totalRedeemed = 0;
    mf.units_lots?.forEach((lot) => {
      lot.redemption_buckets?.forEach((bucket) => {
        if (bucket.redemption_transaction) {
          totalRedeemed += bucket.redemption_transaction.transaction.amount;
        }
      });
    });
    return totalRedeemed;
  };

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

  // New function to create redemption visualization data
  type RedemptionSegment = {
    type: "redeemed" | "remaining";
    units: number;
    percentage: number;
    color: string;
    txnId: string | null;
    date: Date | null;
  };
  type LotVisualization = {
    id: string;
    index: number;
    totalUnits: number;
    segments: RedemptionSegment[];
  };
  type RedemptionTxnVis = {
    id: string;
    date: Date;
    buckets: { lotId: string; unitsRedeemed: number }[];
    color?: string;
  };

  const createRedemptionVisualization = (mf: MutualFundWithUnits) => {
    if (!mf.units_lots || mf.units_lots.length === 0)
      return { lots: [] as LotVisualization[], redemptionTransactions: [] as RedemptionTxnVis[] };

    // Create lot data with original units
    const lots: LotVisualization[] = mf.units_lots.map((lot, index) => ({
      id: lot.id,
      index: index,
      totalUnits: lot.investment_transaction?.units_bought || 0,
      segments: [],
    }));

    // Collect all unique redemption transactions
    const redemptionTransactionsMap = new Map<string, RedemptionTxnVis>();
    mf.units_lots.forEach((lot) => {
      lot.redemption_buckets?.forEach((bucket) => {
        if (bucket.redemption_transaction) {
          const txnId = bucket.redemption_transaction.id;
          if (!redemptionTransactionsMap.has(txnId)) {
            redemptionTransactionsMap.set(txnId, {
              id: txnId,
              date: bucket.redemption_transaction.redemption_date,
              buckets: [],
            });
          }
          redemptionTransactionsMap.get(txnId)!.buckets.push({
            lotId: lot.id,
            unitsRedeemed: bucket.units_redeemed || 0,
          });
        }
      });
    });

    // Sort redemption transactions by date
    const redemptionTransactions = Array.from(redemptionTransactionsMap.values())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // Color palette for different redemption transactions
    const colors = [
      '#f87171', '#60a5fa', '#4ade80', '#facc15', 
      '#c084fc', '#f472b6', '#818cf8', '#fb923c'
    ];

    // Assign colors to redemption transactions
    redemptionTransactions.forEach((txn, index) => {
      txn.color = colors[index % colors.length];
    });

    // Create segments for each lot
    lots.forEach(lot => {
      let processedUnits = 0;
      
      // Process redemptions in chronological order
      redemptionTransactions.forEach(txn => {
        const bucket = txn.buckets.find(b => b.lotId === lot.id);
        if (bucket && bucket.unitsRedeemed > 0) {
          const percentage = lot.totalUnits > 0 ? (bucket.unitsRedeemed / lot.totalUnits) * 100 : 0;
          lot.segments.push({
            type: 'redeemed',
            units: bucket.unitsRedeemed,
            percentage: percentage,
            color: txn.color,
            txnId: txn.id,
            date: txn.date
          });
          processedUnits += bucket.unitsRedeemed;
        }
      });

      // Add remaining units segment
      const remainingUnits = lot.totalUnits - processedUnits;
      if (remainingUnits > 0) {
        const percentage = lot.totalUnits > 0 ? (remainingUnits / lot.totalUnits) * 100 : 0;
        lot.segments.push({
          type: 'remaining',
          units: remainingUnits,
          percentage: percentage,
          color: '#e5e7eb',
          txnId: null,
          date: null
        });
      }
    });

    return { lots, redemptionTransactions };
  };

  return (
    <div className="max-w-5xl mx-auto p-2 sm:p-4">
      {inPreview && (
        <div className="mb-4 p-2 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded">
          <b>Preview mode:</b> You are viewing a snapshot.
        </div>
      )}
      <h1 className="text-xl sm:text-2xl font-bold mb-6">Mutual Funds</h1>
      {loading ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Loading mutual funds...</p>
        </div>
      ) : mutualFunds.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No mutual funds found.</p>
          <p className="text-sm text-gray-400">
            Mutual funds will appear here when you make investment transactions.
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
          <div className="overflow-x-auto border rounded bg-gray-50 text-gray-700">
            <table className="w-full text-xs sm:text-sm min-w-[800px] lg:min-w-[900px]">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-1 sm:px-2">Name</th>
                  <th className="text-left py-2 px-1 sm:px-2 hidden sm:table-cell">ISIN</th>
                  <th className="text-left py-2 px-1 sm:px-2">Units</th>
                  <th className="text-left py-2 px-1 sm:px-2">Invested</th>
                  <th className="text-left py-2 px-1 sm:px-2">Redeemed</th>
                  <th className="text-left py-2 px-1 sm:px-2">Current</th>
                </tr>
              </thead>
              <tbody>
                {mutualFunds.map((mf) => {
                  const totalUnits = calculateTotalUnits(mf);
                  const totalInvested = calculateTotalInvested(mf);
                  const totalRedeemed = calculateTotalRedeemed(mf);
                  const currentValue = totalInvested - totalRedeemed;
                  const isExpanded = expandedFunds.has(mf.id);
                  const visualization = createRedemptionVisualization(mf);
                  
                  return (
                    <React.Fragment key={mf.id}>
                      <tr
                        className={"border-b hover:bg-gray-100 cursor-pointer" + (isExpanded ? " bg-gray-50" : "")}
                        onClick={() => toggleExpanded(mf.id)}
                      >
                        <td className="py-2 px-1 sm:px-2 font-medium">
                          <div className="truncate max-w-[120px] sm:max-w-[200px] lg:max-w-none" title={mf.name}>
                            {mf.name}
                          </div>
                          <div className="text-xs text-gray-500 sm:hidden mt-1">
                            {mf.isin}
                          </div>
                        </td>
                        <td className="py-2 px-1 sm:px-2 hidden sm:table-cell">{mf.isin}</td>
                        <td className="py-2 px-1 sm:px-2">{totalUnits.toFixed(3)}</td>
                        <td className="py-2 px-1 sm:px-2 text-green-700">
                          <div className="truncate">
                            ₹{totalInvested.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                          </div>
                        </td>
                        <td className="py-2 px-1 sm:px-2 text-red-700">
                          <div className="truncate">
                            ₹{totalRedeemed.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                          </div>
                        </td>
                        <td className="py-2 px-1 sm:px-2 text-blue-700">
                          <div className="truncate">
                            ₹{currentValue.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                          </div>
                        </td>
                      </tr>
                      {isExpanded && mf.units_lots && mf.units_lots.length > 0 && (
                        <tr>
                          <td colSpan={6} className="bg-gray-50 border-t p-0">
                            <div className="p-2 sm:p-4">
                              <div className="font-medium mb-4 text-gray-800">Units Lots Redemption Visualization</div>
                              
                              {/* Visual representation of lots and redemptions */}
                              <div className="mb-6 space-y-3">
                                {visualization.lots.map((lot) => (
                                  <div key={lot.id} className="border rounded p-3 bg-white">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                                      <div className="font-medium text-gray-900">
                                        Lot #{lot.index + 1} ({lot.totalUnits.toFixed(3)} units)
                                      </div>
                                      <div className="text-xs text-gray-500 mt-1 sm:mt-0">
                                        Remaining: <span className="font-semibold text-gray-800">
                                          {lot.segments.find(s => s.type === 'remaining')?.units.toFixed(3) || '0.000'} units
                                        </span>
                                      </div>
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
                                            style={{ 
                                              width: `${segment.percentage}%`,
                                              backgroundColor: segment.color
                                            }}
                                            title={`${segment.type === 'redeemed' ? 'Redeemed' : 'Remaining'}: ${segment.units.toFixed(3)} units (${segment.percentage.toFixed(1)}%)`}
                                          >
                                            {segment.percentage > 15 && (
                                              <span className="text-xs font-semibold">
                                                {segment.units.toFixed(1)}
                                              </span>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Legend for redemption transactions */}
                              {visualization.redemptionTransactions.length > 0 && (
                                <div className="mb-6">
                                  <div className="font-medium mb-2 text-gray-800">Redemption Transactions Legend</div>
                                  <div className="flex flex-wrap gap-3 text-xs">
                                    {visualization.redemptionTransactions.map((txn, index) => (
                                      <div key={txn.id} className="flex items-center gap-2">
                                        <div 
                                          className="w-4 h-4 rounded" 
                                          style={{ backgroundColor: txn.color }}
                                        ></div>
                                        <span className="text-gray-600">
                                          Redemption #{index + 1} ({new Date(txn.date).toLocaleDateString('en-IN')})
                                        </span>
                                      </div>
                                    ))}
                                    <div className="flex items-center gap-2">
                                      <div 
                                        className="w-4 h-4 rounded" 
                                        style={{ backgroundColor: '#e5e7eb' }}
                                      ></div>
                                      <span className="text-gray-600">Remaining Units</span>
                                    </div>
                                  </div>
                                </div>
                              )}
                              
                              {/* Detailed Breakdown */}
                              <div className="font-medium mb-2 text-gray-800">Detailed Breakdown</div>
                              <div className="space-y-3">
                                {mf.units_lots.map((lot, lotIndex) => {
                                  const lotUnits = lot.investment_transaction?.units_bought || 0;
                                  const redeemedUnits = lot.redemption_buckets?.reduce((sum, bucket) => sum + (bucket.units_redeemed || 0), 0) || 0;
                                  const remainingUnits = lotUnits - redeemedUnits;
                                  return (
                                    <div key={lot.id} className="border rounded p-2 sm:p-3 bg-white mb-2">
                                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                                        <div className="font-medium text-gray-900">Lot #{lotIndex + 1}</div>
                                        <div className="text-xs text-gray-500 mt-1 sm:mt-0">
                                          Remaining Units: <span className="font-semibold text-gray-800">{remainingUnits.toFixed(3)}</span>
                                        </div>
                                      </div>
                                      {lot.investment_transaction && (
                                        <div className="mb-2">
                                          <div className="font-medium text-green-700 mb-1">Investment</div>
                                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2 text-xs">
                                            <div>
                                              <div className="text-gray-500">Date</div>
                                              <div className="font-medium truncate">{new Date(lot.investment_transaction.allotment_date).toLocaleDateString('en-IN')}</div>
                                            </div>
                                            <div>
                                              <div className="text-gray-500">Units</div>
                                              <div className="font-medium">{lot.investment_transaction.units_bought.toFixed(3)}</div>
                                            </div>
                                            <div>
                                              <div className="text-gray-500">NAV</div>
                                              <div className="font-medium">₹{lot.investment_transaction.buy_nav.toFixed(4)}</div>
                                            </div>
                                            <div>
                                              <div className="text-gray-500">Amount</div>
                                              <div className="font-medium truncate">₹{(lot.investment_transaction.units_bought * lot.investment_transaction.buy_nav).toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                      {lot.redemption_buckets && lot.redemption_buckets.length > 0 && (
                                        <div className="mt-2">
                                          <div className="font-medium text-red-700 mb-1">Redemptions</div>
                                          <div className="space-y-2">
                                            {lot.redemption_buckets.map((bucket) => (
                                              <div key={bucket.id} className="border rounded p-2 bg-gray-50">
                                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2 text-xs">
                                                  <div>
                                                    <div className="text-gray-500">Date</div>
                                                    <div className="font-medium truncate">{bucket.redemption_transaction ? new Date(bucket.redemption_transaction.redemption_date).toLocaleDateString('en-IN') : 'N/A'}</div>
                                                  </div>
                                                  <div>
                                                    <div className="text-gray-500">Units</div>
                                                    <div className="font-medium">{bucket.units_redeemed.toFixed(3)}</div>
                                                  </div>
                                                  <div>
                                                    <div className="text-gray-500">NAV</div>
                                                    <div className="font-medium">{bucket.redemption_transaction ? `₹${bucket.redemption_transaction.sell_nav.toFixed(4)}` : 'N/A'}</div>
                                                  </div>
                                                  <div>
                                                    <div className="text-gray-500">Amount</div>
                                                    <div className="font-medium truncate">{bucket.redemption_transaction ? `₹${(bucket.units_redeemed * bucket.redemption_transaction.sell_nav).toLocaleString('en-IN', { maximumFractionDigits: 2 })}` : 'N/A'}</div>
                                                  </div>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
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
        </>
      )}
    </div>
  );
}