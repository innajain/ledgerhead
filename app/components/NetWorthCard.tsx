import React from 'react';

interface NetWorthCardProps {
  netWorth: number;
  navs: Record<string, { nav: string; date: string } | null>;
  mfWithHoldingsCount: number;
  mutualFundsCount: number;
}

export function NetWorthCard({ netWorth, navs, mfWithHoldingsCount, mutualFundsCount }: NetWorthCardProps) {
  return (
    <div className="w-full max-w-3xl mb-8">
      {Object.keys(navs).length === mfWithHoldingsCount || mutualFundsCount === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border border-blue-200">
          <div className="text-blue-700 text-lg font-semibold mb-1">Net Worth</div>
          <div className="text-4xl font-bold text-gray-900">₹{netWorth.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border border-blue-200">
          <div className="text-blue-700 text-lg font-semibold mb-1">Net Worth</div>
          <div className="text-lg text-gray-500">Loading...</div>
        </div>
      )}
    </div>
  );
}
