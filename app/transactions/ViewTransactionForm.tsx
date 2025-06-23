import React from 'react';
import { LedgerTransaction } from '@/app/LedgerContext';

export function ViewTransactionForm({ tx }: { tx: LedgerTransaction }) {
  // Render fields based on type
  // For brevity, only common fields are shown. You can expand as needed.
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <div className="px-3 py-2 border rounded bg-gray-100">{tx.type}</div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <div className="px-3 py-2 border rounded bg-gray-100">{tx.amount}</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <div className="px-3 py-2 border rounded bg-gray-100">{tx.date ? (typeof tx.date === 'string' ? (tx.date as string).slice(0, 10) : new Date(tx.date as Date).toISOString().slice(0, 10)) : ''}</div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Time</label>
          <div className="px-3 py-2 border rounded bg-gray-100">{tx.time ? (typeof tx.time === 'string' ? (tx.time as string).slice(0, 5) : new Date(tx.time as Date).toISOString().slice(11, 16)) : ''}</div>
        </div>
      </div>
      {tx.note && (
        <div>
          <label className="block text-sm font-medium mb-1">Note</label>
          <div className="px-3 py-2 border rounded bg-gray-100 whitespace-pre-line">{tx.note}</div>
        </div>
      )}
      {/* Add more fields as needed for each transaction type */}
    </div>
  );
}
