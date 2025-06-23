import React from 'react';

interface MonthwisePLProps {
  monthwisePL: [string, { income: number; expenses: number }][];
  loading: boolean;
  formatMonth: (month: string) => string;
}

export function MonthwisePL({ monthwisePL, loading, formatMonth }: MonthwisePLProps) {
  return (
    <div className="w-full max-w-3xl bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Monthwise P&amp;L</h2>
      {loading ? (
        <div className="text-gray-500">Loading...</div>
      ) : monthwisePL.length === 0 ? (
        <div className="text-gray-500">No income or expenses yet.</div>
      ) : (
        <div className="w-full overflow-x-auto">
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
                  <td className={`py-2 pr-4 text-right font-bold ${income - expenses >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ₹{(income - expenses).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
