import React from 'react';

interface ExportButtonProps {
  accounts: any[];
  transactions: any[];
  mutualFunds: any[];
  getDbHistory: () => Promise<any[]>;
}

export function ExportButton({ accounts, transactions, mutualFunds, getDbHistory }: ExportButtonProps) {
  return (
    <div className="w-full max-w-3xl mt-8 flex justify-center">
      <button
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold shadow"
        onClick={async () => {
          function toCSV(rows: any[], columns: string[]): string {
            const header = columns.join(',');
            const csvRows = rows.map(row => columns.map(col => JSON.stringify(row[col] ?? '')).join(','));
            return [header, ...csvRows].join('\n');
          }
          // Prepare CSVs
          const accountCols = accounts.length > 0 ? Object.keys(accounts[0]) : [];
          const accountsCSV = toCSV(accounts, accountCols);
          const txCols = transactions.length > 0 ? Object.keys(transactions[0]) : [];
          const transactionsCSV = toCSV(transactions, txCols);
          const mfCols = mutualFunds.length > 0 ? Object.keys(mutualFunds[0]) : [];
          const mutualFundsCSV = toCSV(mutualFunds, mfCols);
          // Fetch db_history and base64 encode snapshot
          let dbHistoryCSV = '';
          try {
            const dbHistory = await getDbHistory();
            function base64EncodeUnicode(str: string) {
              return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_match, p1) => String.fromCharCode(parseInt(p1, 16))));
            }
            const dbHistoryEncoded = dbHistory.map(row => {
              let snap = row.snapshot;
              if (typeof snap !== 'string') snap = JSON.stringify(snap);
              return {
                ...row,
                snapshot: snap ? base64EncodeUnicode(snap) : '',
              };
            });
            const dbHistoryCols = dbHistoryEncoded.length > 0 ? Object.keys(dbHistoryEncoded[0]) : [];
            dbHistoryCSV = toCSV(dbHistoryEncoded, dbHistoryCols);
          } catch {
            dbHistoryCSV = 'Error fetching db_history';
          }
          // Create ZIP
          const JSZip = (await import('jszip')).default;
          const zip = new JSZip();
          zip.file('accounts.csv', accountsCSV);
          zip.file('transactions.csv', transactionsCSV);
          zip.file('mutual_funds.csv', mutualFundsCSV);
          zip.file('db_history.csv', dbHistoryCSV);
          // Add DB file to ZIP (server-side fetch)
          let dbFileBuffer: ArrayBuffer | null = null;
          try {
            dbFileBuffer = await fetch('/api/get-db-file').then(r => r.arrayBuffer());
          } catch {
            dbFileBuffer = null;
          }
          if (dbFileBuffer) {
            zip.file('prod.db', dbFileBuffer);
          }
          const blob = await zip.generateAsync({ type: 'blob' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'ledgerhead_export.zip';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }}
      >
        Export All Data to ZIP
      </button>
    </div>
  );
}
