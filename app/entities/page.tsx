"use client";

import React from "react";
import { useLedgerData } from "@/app/LedgerContext";
import { EntityCreateModal } from "./EntityCreateModal";
import type { account, income_source, expense_item, mutual_fund } from '@/generated/prisma';
import { usePreview } from "../PreviewContext";

export default function EntitiesPage() {
  const { accounts, incomeSources, expenseItems, mutualFunds, loading, refreshEntities } = useLedgerData();
  const { inPreview } = usePreview();
  const [forms, setForms] = React.useState({
    ACCOUNT: { name: "", group: "" },
    INCOME_SOURCE: { name: "", group: "" },
    EXPENSE_ITEM: { name: "", group: "" },
    MUTUAL_FUND: { name: "" },
  });
  const [entityModalOpen, setEntityModalOpen] = React.useState(false);
  const [entityType, setEntityType] = React.useState<
    "ACCOUNT" | "INCOME_SOURCE" | "EXPENSE_ITEM" | "MUTUAL_FUND"
  >("ACCOUNT");
  const [editId, setEditId] = React.useState<string | null>(null);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const handleEdit = (
    type: 'ACCOUNT' | 'INCOME_SOURCE' | 'EXPENSE_ITEM' | 'MUTUAL_FUND',
    entity: account | income_source | expense_item | mutual_fund
  ) => {
    setEntityType(type);
    setEditId(entity.id);
    setForms(f => ({
      ...f,
      [type]: type === 'MUTUAL_FUND'
        ? { name: entity.name }
        : { name: entity.name, group: (entity as account | income_source | expense_item).group },
    }));
    setEntityModalOpen(true);
  };

  const handleDelete = async (type: string, id: string) => {
    if (!window.confirm("Delete this entity?")) return;
    try {
      // Deletion is handled in the modal or via context refresh
      // Just call refreshEntities after deletion
      if (type === "ACCOUNT") await import("@/server actions/db").then(m => m.deleteAccount(id));
      else if (type === "INCOME_SOURCE") await import("@/server actions/db").then(m => m.deleteIncomeSource(id));
      else if (type === "EXPENSE_ITEM") await import("@/server actions/db").then(m => m.deleteExpenseItem(id));
      else if (type === "MUTUAL_FUND") await import("@/server actions/db").then(m => m.deleteMutualFund(id));
      refreshEntities();
    } catch {
      setError("Failed to delete entity.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      {inPreview && (
        <div className="mb-4 p-2 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded">
          <b>Preview mode:</b> You are viewing a snapshot. Editing is disabled.
        </div>
      )}
      <h1 className="text-2xl font-bold mb-6">Entities</h1>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors mb-6"
        onClick={() => {
          setEntityType("ACCOUNT");
          setEditId(null);
          setEntityModalOpen(true);
        }}
        disabled={inPreview}
      >
        Create Entity
      </button>
      <EntityCreateModal
        open={entityModalOpen}
        onClose={() => {
          setEntityModalOpen(false);
          setEditId(null);
        }}
        entityType={entityType}
        setEntityType={setEntityType}
        forms={forms}
        setForms={setForms}
        editId={editId}
        onAnyCreate={() => {
          setEntityModalOpen(false);
          setEditId(null);
          refreshEntities();
        }}
      />
      {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
      {success && <div className="text-green-600 text-sm mb-2">{success}</div>}
      <div className="border rounded bg-gray-50 p-4 overflow-x-auto">
        {loading ? (
          <p className="italic text-sm text-gray-500 p-4">Loading entities...</p>
        ) : (
          <table className="w-full text-sm mb-2">
            <thead>
              <tr className="border-b">
                <th className="text-left py-1 pr-2 w-1/3">Name</th>
                <th className="text-left py-1 pr-2 w-1/3">Group</th>
                <th className="text-left py-1 pr-2 w-1/6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Accounts */}
              {accounts.length > 0 && (
                <>
                  <tr><td colSpan={3} className="font-semibold pt-4 pb-1 border-t border-gray-300">Accounts</td></tr>
                  {accounts.map((entity) => (
                    <tr key={entity.id}>
                      <td className="pl-6">{entity.name}</td>
                      <td>{entity.group}</td>
                      <td>
                        <div className="flex gap-2">
                          <button className="text-blue-600 underline" onClick={() => handleEdit("ACCOUNT", entity)}>Edit</button>
                          <button className="text-red-600 underline" onClick={() => handleDelete("ACCOUNT", entity.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              )}
              {/* Income Sources */}
              {incomeSources.length > 0 && (
                <>
                  <tr><td colSpan={3} className="font-semibold pt-4 pb-1 border-t border-gray-300">Income Sources</td></tr>
                  {incomeSources.map((entity) => (
                    <tr key={entity.id}>
                      <td className="pl-6">{entity.name}</td>
                      <td>{entity.group}</td>
                      <td>
                        <div className="flex gap-2">
                          <button className="text-blue-600 underline" onClick={() => handleEdit("INCOME_SOURCE", entity)}>Edit</button>
                          <button className="text-red-600 underline" onClick={() => handleDelete("INCOME_SOURCE", entity.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              )}
              {/* Expense Items */}
              {expenseItems.length > 0 && (
                <>
                  <tr><td colSpan={3} className="font-semibold pt-4 pb-1 border-t border-gray-300">Expense Items</td></tr>
                  {expenseItems.map((entity) => (
                    <tr key={entity.id}>
                      <td className="pl-6">{entity.name}</td>
                      <td>{entity.group}</td>
                      <td>
                        <div className="flex gap-2">
                          <button className="text-blue-600 underline" onClick={() => handleEdit("EXPENSE_ITEM", entity)}>Edit</button>
                          <button className="text-red-600 underline" onClick={() => handleDelete("EXPENSE_ITEM", entity.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              )}
              {/* Mutual Funds */}
              {mutualFunds.length > 0 && (
                <>
                  <tr><td colSpan={3} className="font-semibold pt-4 pb-1 border-t border-gray-300">Mutual Funds</td></tr>
                  {mutualFunds.map((entity) => (
                    <tr key={entity.id}>
                      <td className="pl-6">{entity.name}</td>
                      <td></td>
                      <td>
                        <div className="flex gap-2">
                          <button className="text-blue-600 underline" onClick={() => handleEdit("MUTUAL_FUND", entity)}>Edit</button>
                          <button className="text-red-600 underline" onClick={() => handleDelete("MUTUAL_FUND", entity.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              )}
              {/* Empty state */}
              {accounts.length === 0 && incomeSources.length === 0 && expenseItems.length === 0 && mutualFunds.length === 0 && (
                <tr><td colSpan={3} className="italic text-sm text-gray-500">No entities found.</td></tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
