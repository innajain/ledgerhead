import React from 'react';

interface BalanceSheetProps {
  accounts: any[];
  balances: Record<string, number>;
  totalBalance: number;
  loading: boolean;
  openGroups: Set<string>;
  toggleGroup: (group: string) => void;
}

export function BalanceSheet({ accounts, balances, totalBalance, loading, openGroups, toggleGroup }: BalanceSheetProps) {
  return (
    <div className="w-full max-w-3xl bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Balance Sheet</h2>
      {loading ? (
        <div className="text-gray-500">Loading...</div>
      ) : (
        <div className="w-full overflow-x-auto">
          {(() => {
            const groupedAccounts: Record<string, any[]> = {};
            const groupBalances: Record<string, number> = {};
            const EPSILON = 0.01;
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
          })()}
        </div>
      )}
    </div>
  );
}
