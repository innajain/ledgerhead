import React from 'react';
import { LedgerMutualFund } from '@/server actions/db';
import { createRedemptionVisualization } from './createRedemptionVisualization';

interface MobileFundCardProps {
  mf: LedgerMutualFund;
  expanded: boolean;
  onToggle: (id: string) => void;
  setModalLot: (val: { lot: LedgerMutualFund['units_lots'][0]; lotIndex: number } | null) => void;
}

export function FundCard({ mf, expanded, onToggle, setModalLot }: MobileFundCardProps) {
  const calculateTotalUnits = (mf: LedgerMutualFund) => {
    let totalUnits = 0;
    mf.units_lots?.forEach(lot => {
      totalUnits += lot.investment_transaction?.units_bought || 0;
      lot.redemption_buckets?.forEach(bucket => {
        totalUnits -= bucket.units_redeemed || 0;
      });
    });
    return totalUnits;
  };
  const calculateTotalInvested = (mf: LedgerMutualFund) => {
    let totalInvested = 0;
    mf.units_lots?.forEach(lot => {
      if (lot.investment_transaction) {
        totalInvested += lot.investment_transaction.transaction.amount;
      }
    });
    return totalInvested;
  };
  const calculateTotalRedeemed = (mf: LedgerMutualFund) => {
    let totalRedeemed = 0;
    mf.units_lots?.forEach(lot => {
      lot.redemption_buckets?.forEach(bucket => {
        if (bucket.redemption_transaction) {
          totalRedeemed += bucket.redemption_transaction.transaction.amount;
        }
      });
    });
    return totalRedeemed;
  };
  const totalUnits = calculateTotalUnits(mf);
  const totalInvested = calculateTotalInvested(mf);
  const totalRedeemed = calculateTotalRedeemed(mf);
  const currentValue = totalInvested - totalRedeemed;
  const visualization = createRedemptionVisualization(mf);

  return (
    <div className="bg-white border rounded-lg shadow-sm mb-4">
      <div className="p-4 cursor-pointer hover:bg-gray-50 active:bg-gray-100" onClick={() => onToggle(mf.id)}>
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate pr-2" title={mf.name}>
              {mf.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{mf.isin}</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-900">{totalUnits} units</div>
            <div className="text-xs text-gray-500">Current</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <div className="text-green-600 font-medium">₹{totalInvested.toLocaleString('en-IN')}</div>
            <div className="text-xs text-gray-500">Invested</div>
          </div>
          <div>
            <div className="text-red-600 font-medium">₹{totalRedeemed.toLocaleString('en-IN')}</div>
            <div className="text-xs text-gray-500">Redeemed</div>
          </div>
          <div>
            <div className="text-blue-600 font-medium">₹{currentValue.toLocaleString('en-IN')}</div>
            <div className="text-xs text-gray-500">Net Value</div>
          </div>
        </div>
        <div className="mt-3 flex justify-center">
          <div className={`transform transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      {expanded && mf.units_lots && mf.units_lots.length > 0 && (
        <div className="border-t bg-gray-50 p-4">
          <div className="font-medium mb-4 text-gray-800">Units Lots Visualization</div>
          <div className="space-y-4">
            {visualization.lots.map(lot => (
              <div
                key={lot.id}
                className="border rounded-lg p-3 bg-white cursor-pointer hover:bg-blue-50 active:bg-blue-100"
                onClick={() => {
                  const lotIdx = mf.units_lots.findIndex(l => l.id === lot.id);
                  setModalLot({ lot: mf.units_lots[lotIdx], lotIndex: lotIdx });
                }}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="font-medium text-gray-900">
                    Lot #{lot.index + 1}
                    {mf.units_lots[lot.index]?.investment_transaction?.allotment_date && (
                      <span className="text-xs text-gray-500 ml-2">
                        (
                        {mf.units_lots[lot.index]?.investment_transaction?.allotment_date
                          ? new Date(String(mf.units_lots[lot.index]?.investment_transaction?.allotment_date)).toLocaleDateString('en-IN')
                          : ''}
                        )
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">{lot.totalUnits} units</div>
                </div>
                <div className="mb-2">
                  <div className="flex h-6 rounded-md overflow-hidden border border-gray-300 bg-gray-100">
                    {lot.segments.map((segment, segIndex) => (
                      <div
                        key={segIndex}
                        className={`flex items-center justify-center text-xs font-medium relative ${
                          segment.type === 'remaining' ? 'text-gray-800' : 'text-white'
                        }`}
                        style={{ width: `${segment.percentage}%`, backgroundColor: segment.color }}
                      >
                        {segment.percentage > 20 && <span className="text-xs font-semibold">{segment.units}</span>}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-xs text-gray-500 text-center">Tap for detailed breakdown</div>
              </div>
            ))}
          </div>
          {visualization.redemptionTransactions.length > 0 && (
            <div className="mt-4">
              <div className="font-medium mb-2 text-gray-800 text-sm">Redemption Legend</div>
              <div className="space-y-2">
                {visualization.redemptionTransactions.map((txn, index) => (
                  <div key={txn.id} className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: txn.color }}></div>
                    <span className="text-gray-600">
                      Redemption #{index + 1} ({new Date(txn.date).toLocaleDateString('en-IN')})
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: '#e5e7eb' }}></div>
                  <span className="text-gray-600">Remaining Units</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
