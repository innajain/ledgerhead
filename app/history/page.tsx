'use client';

import React, { useEffect, useState } from 'react';
import { usePreview } from '../PreviewContext';
import { getDbHistory, deleteLatestDbHistory } from '@/server actions/db';
import { db_history } from '@/generated/prisma';
import { restoreDbFromSnapshot } from '@/server actions/db/history/db_history';
import { convert_json_to_snapshot } from '@/utils';

function renderTable(name: string, rows: any[], key?: string) {
  if (!Array.isArray(rows) || rows.length === 0) return null;
  const columns = Object.keys(rows[0] ?? {});
  
  return (
    <div className="mb-6 border rounded bg-white shadow-sm" key={key || name}>
      <h3 className="font-semibold bg-gray-100 px-3 py-2 border-b text-sm md:text-base">{name}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs md:text-sm border-collapse">
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col} className="px-2 py-2 md:px-3 md:py-2 border bg-gray-50 text-left font-medium">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.id || i} className="hover:bg-gray-50">
                {columns.map(col => (
                  <td key={col} className="px-2 py-2 md:px-3 md:py-2 border font-mono break-all max-w-xs">
                    {typeof row[col] === 'object' && row[col] !== null ? JSON.stringify(row[col]) : String(row[col])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function HistoryPage() {
  const [history, setHistory] = useState<db_history[]>([]);
  const [openRow, setOpenRow] = useState<string | null>(null);
  const { setPreview, inPreview } = usePreview();
  
  useEffect(() => {
    getDbHistory().then(data => setHistory(data));
  }, []);

  const handleRestore = async (id: string) => {
    if (!window.confirm('Are you sure you want to restore the database to this snapshot? This will overwrite all current data.')) return;
    await restoreDbFromSnapshot(id);
    window.location.reload();
  };

  const handleDeleteLatest = async () => {
    if (!window.confirm('Are you sure you want to delete the latest history entry? This action cannot be undone.')) return;
    try {
      await deleteLatestDbHistory();
      // Refresh the history list
      const updatedHistory = await getDbHistory();
      setHistory(updatedHistory);
    } catch (error) {
      alert('Failed to delete latest history entry: ' + (error as Error).message);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-3 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6">
        <h1 className="text-xl md:text-2xl font-bold mb-2 sm:mb-0">Database History</h1>
        {history.length > 0 && (
          <button
            onClick={handleDeleteLatest}
            disabled={inPreview}
            className="bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Delete Latest Entry
          </button>
        )}
      </div>
      
      {inPreview && (
        <div className="mb-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded text-sm md:text-base">
          <b>Preview mode:</b> You are viewing a snapshot. Editing is disabled.
        </div>
      )}

      {/* Mobile Card Layout */}
      <div className="block md:hidden space-y-4">
        {history.map((h) => (
          <div key={h.id} className="bg-white border rounded-lg shadow-sm">
            <div className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    {new Date(h.timestamp).toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-600">
                    {h.event_type} • {h.entity_type}
                  </div>
                </div>
                <button 
                  className="text-blue-600 text-sm font-medium ml-2"
                  onClick={() => setOpenRow(openRow === h.id ? null : h.id)}
                >
                  {openRow === h.id ? 'Hide' : 'View'}
                </button>
              </div>
              
              <div className="text-xs text-gray-500 mb-3 font-mono break-all">
                ID: {h.entity_id}
              </div>
              
              <div className="flex gap-2">
                <button 
                  className="flex-1 bg-green-50 text-green-700 px-3 py-2 rounded text-sm font-medium border border-green-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => setPreview(convert_json_to_snapshot(h.snapshot))} 
                  disabled={inPreview}
                >
                  Preview
                </button>
                <button 
                  className="flex-1 bg-red-50 text-red-700 px-3 py-2 rounded text-sm font-medium border border-red-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => handleRestore(h.id)} 
                  disabled={inPreview}
                >
                  Restore
                </button>
              </div>
            </div>
            
            {openRow === h.id && (
              <div className="border-t bg-gray-50 p-4">
                <div className="text-sm font-medium text-gray-700 mb-3">Snapshot Data:</div>
                {Object.entries(h.snapshot ?? {}).map(([table, rows]) =>
                  renderTable(table, Array.isArray(rows) ? rows : [], h.id + '-' + table)
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Table Layout */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border text-sm bg-white rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 border text-left font-medium">Timestamp</th>
              <th className="px-4 py-3 border text-left font-medium">Event</th>
              <th className="px-4 py-3 border text-left font-medium">Entity</th>
              <th className="px-4 py-3 border text-left font-medium">Entity ID</th>
              <th className="px-4 py-3 border text-left font-medium">Snapshot</th>
              <th className="px-4 py-3 border text-left font-medium">Preview</th>
              <th className="px-4 py-3 border text-left font-medium">Restore</th>
            </tr>
          </thead>
          <tbody>
            {history.map((h) => (
              <React.Fragment key={h.id}>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border whitespace-nowrap">
                    {new Date(h.timestamp).toLocaleString()}
                  </td>
                  <td className="px-4 py-3 border">{h.event_type}</td>
                  <td className="px-4 py-3 border">{h.entity_type}</td>
                  <td className="px-4 py-3 border font-mono text-xs max-w-xs truncate" title={h.entity_id}>
                    {h.entity_id}
                  </td>
                  <td className="px-4 py-3 border">
                    <button 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                      onClick={() => setOpenRow(openRow === h.id ? null : h.id)}
                    >
                      {openRow === h.id ? 'Hide' : 'View'}
                    </button>
                  </td>
                  <td className="px-4 py-3 border">
                    <button 
                      className="text-green-600 hover:text-green-800 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => setPreview(convert_json_to_snapshot(h.snapshot))} 
                      disabled={inPreview}
                    >
                      Preview
                    </button>
                  </td>
                  <td className="px-4 py-3 border">
                    <button 
                      className="text-red-600 hover:text-red-800 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => handleRestore(h.id)} 
                      disabled={inPreview}
                    >
                      Restore
                    </button>
                  </td>
                </tr>
                {openRow === h.id && (
                  <tr>
                    <td colSpan={7} className="bg-gray-50 border-t p-0">
                      <div className="p-4">
                        <div className="text-sm font-medium text-gray-700 mb-3">Snapshot Data:</div>
                        {Object.entries(h.snapshot ?? {}).map(([table, rows]) =>
                          renderTable(table, Array.isArray(rows) ? rows : [], h.id + '-' + table)
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {history.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <div className="text-lg mb-2">No history records found</div>
          <div className="text-sm">Database history will appear here once actions are performed.</div>
        </div>
      )}
    </div>
  );
}