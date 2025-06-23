import React from 'react';
import type { transaction } from '@/generated/prisma';

function formatDateForDisplay(iso: string) {
  if (!iso) return '';
  const [year, month, day] = iso.split('-');
  if (!year || !month || !day) return iso;
  return `${day}/${month}/${year}`;
}

export function TransactionsList({ transactions, loading, onEdit, onDelete, inPreview }: {
  transactions: transaction[];
  loading: boolean;
  onEdit: (tx: transaction) => void;
  onDelete: (id: string) => void;
  inPreview: boolean;
}) {
  return (
    <div className="overflow-x-auto border rounded bg-gray-50 text-gray-700">
      <div className="p-2 sm:p-4 w-full">
        {loading ? (
          <p className="italic text-sm text-gray-500">Loading transactions...</p>
        ) : transactions.length === 0 ? (
          <p className="italic text-sm text-gray-500">No transactions found.</p>
        ) : (
          <table className="w-full text-xs sm:text-sm min-w-[400px]">
            <thead>
              <tr className="border-b">
                <th className="text-left py-1 pr-2">Date</th>
                <th className="text-left py-1 pr-2">Type</th>
                <th className="text-left py-1 pr-2">Amount</th>
                <th className="text-left py-1 pr-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...transactions]
                .sort((a, b) => {                  
                  const dateA = a.date.getTime();
                  const dateB = b.date.getTime();
                  if (dateA !== dateB) {
                    if (dateA === null) return 1;
                    if (dateB === null) return -1;
                    return dateB - dateA;
                  }
                  if (a.time !== null && b.time !== null) {
                    const timeA = a.time.getTime();
                    const timeB = b.time.getTime();
                    if (timeA !== timeB) {
                      if (timeA === null) return 1;
                      if (timeB === null) return -1;
                      return timeB - timeA;
                    }
                  }
                  const createdA = a.created_at.getTime();
                  const createdB = b.created_at.getTime();
                  return createdB - createdA;
                })
                .map(tx => (
                  <tr key={tx.id} className="border-b last:border-0">
                    <td className="py-1 pr-2">{
                      tx.date
                        ? (typeof tx.date === 'string'
                            ? formatDateForDisplay((tx.date as string).slice(0, 10))
                            : formatDateForDisplay(new Date(tx.date as Date).toISOString().slice(0, 10)))
                        : ''
                    }</td>
                    <td className="py-1 pr-2">{tx.type}</td>
                    <td className="py-1 pr-2">{tx.amount}</td>
                    <td className="py-1 pr-2 flex gap-2 flex-wrap">
                      <button className="text-blue-600 underline" onClick={() => onEdit(tx)} disabled={inPreview}>Edit</button>
                      <button className="text-red-600 underline" onClick={() => onDelete(tx.id)} disabled={inPreview}>Delete</button>
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
