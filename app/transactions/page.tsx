'use client';

import React, { useState } from 'react';
import { TransferForm } from './forms/TransferForm';
import { ExpenseForm } from './forms/ExpenseForm';
import { IncomeForm } from './forms/IncomeForm';
import { InvestmentForm } from './forms/InvestmentForm';
import { RedemptionForm } from './forms/RedemptionForm';
import {
  LedgerExpenseTransaction,
  LedgerIncomeTransaction,
  LedgerInvestmentTransaction,
  LedgerRedemptionTransaction,
  LedgerTransaction,
  LedgerTransferTransaction,
  useLedgerData,
} from '@/app/LedgerContext';
import { usePreview } from '@/app/PreviewContext';
import { TransactionsList } from './TransactionsList';
import { Modal } from '../components/Modal';

const TRANSACTION_TYPES = [
  { label: 'Transfer', value: 'TRANSFER' },
  { label: 'Income', value: 'INCOME' },
  { label: 'Expense', value: 'EXPENSE' },
  { label: 'Mutual Fund Investment', value: 'MF_INVESTMENT' },
  { label: 'Mutual Fund Redemption', value: 'MF_REDEMPTION' },
];

export default function TransactionsPage() {
  const { transactions, loading, refreshEntities } = useLedgerData();
  const { inPreview } = usePreview();
  const [type, setType] = useState<string>('EXPENSE');
  const [modalOpen, setModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editTx, setEditTx] = useState<LedgerTransaction | null>(null);
  const [viewTx, setViewTx] = useState<LedgerTransaction | null>(null);

  const handleEdit = (tx: LedgerTransaction) => {
    setType(tx.type);
    setEditTx(tx);
    setModalOpen(true);
  };

  const handleView = (tx: LedgerTransaction) => {
    setViewTx(tx);
    setViewModalOpen(true);
  };

  // Add a viewOnly prop to all form components and pass it in view mode
  let FormComponent: React.ReactNode = null;
  if (type === 'TRANSFER') {
    const formProps = editTx
      ? {
          initial: editTx as LedgerTransferTransaction,
          onSuccess: () => {
            setModalOpen(false);
            setEditTx(null);
            refreshEntities();
          },
        }
      : {
          onSuccess: () => {
            setModalOpen(false);
            refreshEntities();
          },
        };
    FormComponent = <TransferForm {...formProps} />;
  } else if (type === 'EXPENSE') {
    const formProps = editTx
      ? {
          initial: editTx as LedgerExpenseTransaction,
          onSuccess: () => {
            setModalOpen(false);
            setEditTx(null);
            refreshEntities();
          },
        }
      : {
          onSuccess: () => {
            setModalOpen(false);
            refreshEntities();
          },
        };
    FormComponent = <ExpenseForm {...formProps} />;
  } else if (type === 'INCOME') {
    const formProps = editTx
      ? {
          initial: editTx as LedgerIncomeTransaction,
          onSuccess: () => {
            setModalOpen(false);
            setEditTx(null);
            refreshEntities();
          },
        }
      : {
          onSuccess: () => {
            setModalOpen(false);
            refreshEntities();
          },
        };
    FormComponent = <IncomeForm {...formProps} />;
  } else if (type === 'MF_INVESTMENT') {
    const formProps = editTx
      ? {
          initial: editTx as LedgerInvestmentTransaction,
          onSuccess: () => {
            setModalOpen(false);
            setEditTx(null);
            refreshEntities();
          },
        }
      : {
          onSuccess: () => {
            setModalOpen(false);
            refreshEntities();
          },
        };
    FormComponent = <InvestmentForm {...formProps} />;
  } else if (type === 'MF_REDEMPTION') {
    const formProps = editTx
      ? {
          initial: editTx as LedgerRedemptionTransaction,
          onSuccess: () => {
            setModalOpen(false);
            setEditTx(null);
            refreshEntities();
          },
        }
      : {
          onSuccess: () => {
            setModalOpen(false);
            refreshEntities();
          },
        };
    FormComponent = <RedemptionForm {...formProps} />;
  }

  // Add delete handler
  function handleDelete(id: string) {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      import('@/server actions/db').then(({ deleteTransaction }) => {
        deleteTransaction(id).then(() => refreshEntities());
      });
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      {inPreview && (
        <div className="mb-4 p-2 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded">
          <b>Preview mode:</b> You are viewing a snapshot. Editing is disabled.
        </div>
      )}
      <h1 className="text-xl sm:text-2xl font-bold mb-6">Transactions</h1>
      <div className="mb-8">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full sm:w-auto"
          onClick={() => {
            setEditTx(null); // Ensure editTx is cleared
            setType('EXPENSE'); // Always default to Expense
            setModalOpen(true);
          }}
          disabled={inPreview}
        >
          Create Transaction
        </button>
        <Modal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setEditTx(null); // Ensure editTx is cleared when closing modal
          }}
        >
          <div className="w-full max-w-xs sm:max-w-md md:max-w-lg">
            {/* Only show transaction type selector in create mode */}
            {!editTx && (
              <>
                <label className="block mb-2 font-medium">Select Transaction Type:</label>
                <select className="border rounded px-3 py-2 mb-4 w-full" value={type} onChange={e => setType(e.target.value)}>
                  {TRANSACTION_TYPES.map(t => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </>
            )}
            {FormComponent}
          </div>
        </Modal>
      </div>
      <TransactionsList
        transactions={transactions}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        inPreview={inPreview}
      />
      <Modal
        open={viewModalOpen}
        onClose={() => {
          setViewModalOpen(false);
          setViewTx(null);
        }}
      >
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg">
          {viewTx &&
            (() => {
              switch (viewTx.type) {
                case 'TRANSFER':
                  return <TransferForm initial={viewTx as LedgerTransferTransaction} onSuccess={() => {}} viewOnly />;
                case 'EXPENSE':
                  return <ExpenseForm initial={viewTx as LedgerExpenseTransaction} onSuccess={() => {}} viewOnly />;
                case 'INCOME':
                  return <IncomeForm initial={viewTx as LedgerIncomeTransaction} onSuccess={() => {}} viewOnly />;
                case 'MF_INVESTMENT':
                  return <InvestmentForm initial={viewTx as LedgerInvestmentTransaction} onSuccess={() => {}} viewOnly />;
                case 'MF_REDEMPTION':
                  return <RedemptionForm initial={viewTx as LedgerRedemptionTransaction} onSuccess={() => {}} viewOnly />;
                default:
                  return null;
              }
            })()}
        </div>
      </Modal>
    </div>
  );
}
