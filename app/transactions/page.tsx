'use client';

import React, { useState } from 'react';
import { TransferForm } from './forms/TransferForm';
import { ExpenseForm } from './forms/ExpenseForm';
import { IncomeForm } from './forms/IncomeForm';
import { InvestmentForm } from './forms/InvestmentForm';
import { RedemptionForm } from './forms/RedemptionForm';
import type { TransferFormInitial } from './forms/TransferForm';
import type { ExpenseFormInitial } from './forms/ExpenseForm';
import type { IncomeFormInitial } from './forms/IncomeForm';
import type { InvestmentFormInitial } from './forms/InvestmentForm';
import type { RedemptionFormInitial } from './forms/RedemptionForm';
import type { transaction } from '@/generated/prisma';
import { useLedgerData } from '@/app/LedgerContext';
import { usePreview } from '@/app/PreviewContext';
import { TransactionsList } from './TransactionsList';

const TRANSACTION_TYPES = [
  { label: 'Transfer', value: 'TRANSFER' },
  { label: 'Income', value: 'INCOME' },
  { label: 'Expense', value: 'EXPENSE' },
  { label: 'Mutual Fund Investment', value: 'MF_INVESTMENT' },
  { label: 'Mutual Fund Redemption', value: 'MF_REDEMPTION' },
];

// TODO: Replace with real data from DB
// Example account type: { id: string; name: string; group: string }
const accounts: { id: string; name: string; group: string }[] = [];

function filterAccounts(accounts: { id: string; name: string; group: string }[], name: string, group: string) {
  return accounts.filter(
    acc =>
      (name === '' || acc.name.toLowerCase().includes(name.toLowerCase())) && (group === '' || acc.group.toLowerCase().includes(group.toLowerCase()))
  );
}

function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg p-6 min-w-[350px] max-w-full relative" onClick={e => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold" onClick={onClose} aria-label="Close">
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

function formatDateForDisplay(iso: string) {
  if (!iso) return '';
  const [year, month, day] = iso.split('-');
  if (!year || !month || !day) return iso;
  return `${day}/${month}/${year}`;
}

function getTodayParts() {
  const today = new Date();
  return {
    day: String(today.getDate()).padStart(2, '0'),
    month: String(today.getMonth() + 1).padStart(2, '0'),
    year: String(today.getFullYear()),
  };
}

function CustomDatePicker({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  const today = getTodayParts();
  const [day, month, year] = value && value.split('/').length === 3 ? value.split('/') : [today.day, today.month, today.year];

  React.useEffect(() => {
    if (!value || value.split('/').length !== 3) {
      onChange(`${today.day}/${today.month}/${today.year}`);
    }
    // Only run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
  const years = Array.from({ length: 101 }, (_, i) => String(1970 + i));

  const handleChange = (d: string, m: string, y: string) => {
    onChange(`${d}/${m}/${y}`);
  };

  return (
    <div className="flex gap-2">
      <select value={day} onChange={e => handleChange(e.target.value, month, year)} className="border rounded px-2 py-1">
        {days.map(d => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
      <span>/</span>
      <select value={month} onChange={e => handleChange(day, e.target.value, year)} className="border rounded px-2 py-1">
        {months.map(m => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      <span>/</span>
      <select value={year} onChange={e => handleChange(day, month, e.target.value)} className="border rounded px-2 py-1">
        {years.map(y => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  );
}

function getUnique(arr: string[]) {
  return Array.from(new Set(arr)).filter(Boolean);
}

function AccountSelector({
  label,
  value,
  onChange,
  accounts,
}: {
  label: string;
  value: string;
  onChange: (id: string) => void;
  accounts: { id: string; name: string; group: string }[];
}) {
  const allNames = getUnique(accounts.map(acc => acc.name));
  const allGroups = getUnique(accounts.map(acc => acc.group));
  const [name, setName] = React.useState('');
  const [group, setGroup] = React.useState('');
  const filtered = filterAccounts(accounts, name, group);

  React.useEffect(() => {
    if (filtered.length === 1) {
      onChange(filtered[0].id);
    }
  }, [filtered, onChange]);

  return (
    <div>
      <label className="block mb-1">{label}</label>
      <div className="flex gap-2 mb-1">
        <select className="border rounded px-2 py-1 w-full" value={name} onChange={e => setName(e.target.value)}>
          <option value="">Name</option>
          {allNames.map(n => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        <select className="border rounded px-2 py-1 w-full" value={group} onChange={e => setGroup(e.target.value)}>
          <option value="">Group</option>
          {allGroups.map(g => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function getTodayISO() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

type EditTxType =
  | TransferFormInitial
  | ExpenseFormInitial
  | IncomeFormInitial
  | InvestmentFormInitial
  | RedemptionFormInitial;

export default function TransactionsPage() {
  const { transactions, accounts, expenseItems, incomeSources, mutualFunds, loading, refreshEntities } = useLedgerData();
  const { inPreview } = usePreview();
  const [type, setType] = useState<string>('EXPENSE');
  const [modalOpen, setModalOpen] = useState(false);
  const [editTx, setEditTx] = useState<EditTxType | null>(null);

  // Helper to map transaction to form initial values
  function mapTxToFormInitial(tx: transaction): EditTxType {
    if (!tx) return tx as EditTxType;
    const safeTime = (t: string | Date | null | undefined) => (t === null ? undefined : t);
    const safeNote = (n: string | null | undefined) => (n === null ? undefined : n);
    if (tx.type === 'EXPENSE') {
      const expenseTx = tx as transaction & { expense_transaction?: { account_id?: string; expense_item_id?: string } };
      return {
        id: tx.id,
        account_id: expenseTx.expense_transaction?.account_id,
        expense_item_id: expenseTx.expense_transaction?.expense_item_id,
        date: tx.date,
        time: safeTime(tx.time),
        note: safeNote(tx.note),
        amount: tx.amount,
      } as ExpenseFormInitial;
    }
    if (tx.type === 'INCOME') {
      const incomeTx = tx as transaction & { income_transaction?: { income_source_id?: string; account_id?: string } };
      return {
        id: tx.id,
        income_source_id: incomeTx.income_transaction?.income_source_id,
        account_id: incomeTx.income_transaction?.account_id,
        date: tx.date,
        time: safeTime(tx.time),
        note: safeNote(tx.note),
        amount: tx.amount,
      } as IncomeFormInitial;
    }
    if (tx.type === 'TRANSFER') {
      const transferTx = tx as transaction & { transfer_transaction?: { from_account_id?: string; to_account_id?: string } };
      return {
        id: tx.id,
        from_account_id: transferTx.transfer_transaction?.from_account_id,
        to_account_id: transferTx.transfer_transaction?.to_account_id,
        date: tx.date,
        time: safeTime(tx.time),
        note: safeNote(tx.note),
        amount: tx.amount,
      } as TransferFormInitial;
    }
    // Add similar mapping for MF_INVESTMENT and MF_REDEMPTION if needed
    return tx as EditTxType;
  }

  const handleEdit = (tx: transaction) => {
    setType(tx.type);
    setEditTx(mapTxToFormInitial(tx));
    setModalOpen(true);
  };

  let FormComponent = null;
  if (type === 'TRANSFER') {
    const formProps = editTx
      ? { initial: editTx as TransferFormInitial, onSuccess: () => { setModalOpen(false); setEditTx(null); refreshEntities(); } }
      : { onSuccess: () => { setModalOpen(false); refreshEntities(); } };
    FormComponent = <TransferForm {...formProps} />;
  } else if (type === 'EXPENSE') {
    const formProps = editTx
      ? { initial: editTx as ExpenseFormInitial, onSuccess: () => { setModalOpen(false); setEditTx(null); refreshEntities(); } }
      : { onSuccess: () => { setModalOpen(false); refreshEntities(); } };
    FormComponent = <ExpenseForm {...formProps} />;
  } else if (type === 'INCOME') {
    const formProps = editTx
      ? { initial: editTx as IncomeFormInitial, onSuccess: () => { setModalOpen(false); setEditTx(null); refreshEntities(); } }
      : { onSuccess: () => { setModalOpen(false); refreshEntities(); } };
    FormComponent = <IncomeForm {...formProps} />;
  } else if (type === 'MF_INVESTMENT') {
    const formProps = editTx
      ? { initial: editTx as InvestmentFormInitial, onSuccess: () => { setModalOpen(false); setEditTx(null); refreshEntities(); } }
      : { onSuccess: () => { setModalOpen(false); refreshEntities(); } };
    FormComponent = <InvestmentForm {...formProps} />;
  } else if (type === 'MF_REDEMPTION') {
    const formProps = editTx
      ? { initial: editTx as RedemptionFormInitial, onSuccess: () => { setModalOpen(false); setEditTx(null); refreshEntities(); } }
      : { onSuccess: () => { setModalOpen(false); refreshEntities(); } };
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
        <Modal open={modalOpen} onClose={() => {
          setModalOpen(false);
          setEditTx(null); // Ensure editTx is cleared when closing modal
        }}>
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
        inPreview={inPreview}
      />
    </div>
  );
}
