"use client";

import React from "react";
import { useLedgerData } from "@/app/LedgerContext";
import { usePreview } from "../PreviewContext";

export default function MutualFundsPage() {
  const { mutualFunds, loading } = useLedgerData();
  const { inPreview } = usePreview();
  const [expandedFunds, setExpandedFunds] = React.useState<Set<string>>(new Set());

  const calculateTotalUnits = (mf: any) => {
    let totalUnits = 0;
    mf.units_lots?.forEach((lot: any) => {
      totalUnits += lot.investment_transaction?.units_bought || 0;
      lot.redemption_buckets?.forEach((bucket: any) => {
        totalUnits -= bucket.units_redeemed || 0;
      });
    });
    return totalUnits;
  };

  const calculateTotalInvested = (mf: any) => {
    let totalInvested = 0;
    mf.units_lots?.forEach((lot: any) => {
      if (lot.investment_transaction) {
        totalInvested += lot.investment_transaction.units_bought * lot.investment_transaction.buy_nav;
      }
    });
    return totalInvested;
  };

  const calculateTotalRedeemed = (mf: any) => {
    let totalRedeemed = 0;
    mf.units_lots?.forEach((lot: any) => {
      lot.redemption_buckets?.forEach((bucket: any) => {
        if (bucket.redemption_transaction) {
          totalRedeemed += bucket.units_redeemed * bucket.redemption_transaction.sell_nav;
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

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      {inPreview && (
        <div className="mb-4 p-2 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded">
          <b>Preview mode:</b> You are viewing a snapshot.
        </div>
      )}
      
      <h1 className="text-2xl font-bold mb-6">Mutual Funds</h1>
      
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
        <div className="space-y-6">
          {mutualFunds.map((mf) => {
            const totalUnits = calculateTotalUnits(mf);
            const totalInvested = calculateTotalInvested(mf);
            const totalRedeemed = calculateTotalRedeemed(mf);
            const currentValue = totalInvested - totalRedeemed; // This is a simplified calculation
            const isExpanded = expandedFunds.has(mf.id);
            
            return (
              <div key={mf.id} className="bg-white border rounded-lg shadow-sm">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleExpanded(mf.id)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-semibold text-gray-900">{mf.name}</h2>
                        <span className="text-sm text-gray-500">
                          {isExpanded ? '▼' : '▶'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">ISIN: {mf.isin}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">
                        {totalUnits.toFixed(3)} units
                      </p>
                      <p className="text-sm text-gray-600">Current Holdings</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-600 font-medium">Total Invested</p>
                      <p className="text-lg font-semibold text-green-800">
                        ₹{totalInvested.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                      </p>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-sm text-red-600 font-medium">Total Redeemed</p>
                      <p className="text-lg font-semibold text-red-800">
                        ₹{totalRedeemed.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-600 font-medium">Current Investment</p>
                      <p className="text-lg font-semibold text-blue-800">
                        ₹{currentValue.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                      </p>
                    </div>
                  </div>
                </div>
                
                {isExpanded && mf.units_lots && mf.units_lots.length > 0 && (
                  <div className="border-t px-6 pb-6">
                    <div className="mt-4">
                      <h3 className="text-lg font-medium mb-3">Units Lots Details</h3>
                      <div className="space-y-4">
                        {mf.units_lots.map((lot, lotIndex) => {
                          const lotUnits = lot.investment_transaction?.units_bought || 0;
                          const redeemedUnits = lot.redemption_buckets?.reduce((sum: number, bucket: any) => 
                            sum + (bucket.units_redeemed || 0), 0) || 0;
                          const remainingUnits = lotUnits - redeemedUnits;
                          
                          return (
                            <div key={lot.id} className="bg-gray-50 p-4 rounded-lg">
                              <div className="flex justify-between items-start mb-3">
                                <h4 className="font-medium text-gray-900">Lot #{lotIndex + 1}</h4>
                                <div className="text-right">
                                  <p className="text-sm text-gray-600">Remaining Units</p>
                                  <p className="font-semibold">{remainingUnits.toFixed(3)}</p>
                                </div>
                              </div>
                              
                              {lot.investment_transaction && (
                                <div className="mb-3 p-3 bg-green-100 rounded">
                                  <h5 className="font-medium text-green-800 mb-2">Investment</h5>
                                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                                    <div>
                                      <p className="text-green-600">Date</p>
                                      <p className="font-medium">
                                        {new Date(lot.investment_transaction.allotment_date).toLocaleDateString('en-IN')}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-green-600">Units</p>
                                      <p className="font-medium">{lot.investment_transaction.units_bought.toFixed(3)}</p>
                                    </div>
                                    <div>
                                      <p className="text-green-600">NAV</p>
                                      <p className="font-medium">₹{lot.investment_transaction.buy_nav.toFixed(4)}</p>
                                    </div>
                                    <div>
                                      <p className="text-green-600">Amount</p>
                                      <p className="font-medium">
                                        ₹{(lot.investment_transaction.units_bought * lot.investment_transaction.buy_nav).toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              )}
                              
                              {lot.redemption_buckets && lot.redemption_buckets.length > 0 && (
                                <div className="space-y-2">
                                  <h5 className="font-medium text-red-800">Redemptions</h5>
                                  {lot.redemption_buckets.map((bucket) => (
                                    <div key={bucket.id} className="p-3 bg-red-100 rounded">
                                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                                        <div>
                                          <p className="text-red-600">Date</p>
                                          <p className="font-medium">
                                            {bucket.redemption_transaction ? 
                                              new Date(bucket.redemption_transaction.redemption_date).toLocaleDateString('en-IN') 
                                              : 'N/A'}
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-red-600">Units</p>
                                          <p className="font-medium">{bucket.units_redeemed.toFixed(3)}</p>
                                        </div>
                                        <div>
                                          <p className="text-red-600">NAV</p>
                                          <p className="font-medium">
                                            {bucket.redemption_transaction ? 
                                              `₹${bucket.redemption_transaction.sell_nav.toFixed(4)}` 
                                              : 'N/A'}
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-red-600">Amount</p>
                                          <p className="font-medium">
                                            {bucket.redemption_transaction ? 
                                              `₹${(bucket.units_redeemed * bucket.redemption_transaction.sell_nav).toLocaleString('en-IN', { maximumFractionDigits: 2 })}` 
                                              : 'N/A'}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
