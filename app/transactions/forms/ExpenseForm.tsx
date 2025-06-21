import React from 'react';
import { AccountSelector } from '../components/AccountSelector';
import { CustomDatePicker } from '../components/CustomDatePicker';
import { updateExpenseTransaction, createExpenseTransaction } from '@/server actions/db';
import { NoteField } from '../components/NoteField';
import { FormButtonStack } from '../components/FormButtonStack';
import { useLedgerData } from '@/app/LedgerContext';
import { getTodayDDMMYYYY, toDDMMYYYY, toHHMM } from '../components/dateUtils';
import { useFormState } from '../components/useFormState';
import { FormStatusMessages } from '../components/FormStatusMessages';

function formatDateForDisplay(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export interface ExpenseFormInitial {
  id?: string;
  account_id?: string;
  expense_item_id?: string;
  date?: string | Date;
  time?: string | Date;
  note?: string;
  amount?: number;
}

export function ExpenseForm({ onSuccess, initial }: { onSuccess: () => void; initial?: ExpenseFormInitial }) {
  const { accounts, expenseItems, loading, refreshEntities } = useLedgerData();
  const initialForm = {
    fromAccount: '',
    toSink: '',
    amount: '',
    date: '',
    time: '',
    note: '',
  };
  const { form, setForm, error, setError, success, setSuccess, resetForm } = useFormState(initialForm);
  const safeForm = {
    fromAccount: form.fromAccount ?? '',
    toSink: form.toSink ?? '',
    amount: form.amount ?? '',
    date: form.date ?? '',
    time: form.time ?? '',
    note: form.note ?? '',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCustomDateChange = (val: string) => {
    setForm({ ...form, date: val });
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, time: e.target.value });
  };

  const handleReset = () => {
    resetForm();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!safeForm.fromAccount || !safeForm.toSink || !safeForm.date || !safeForm.amount) {
      setError('All fields are required.');
      return;
    }
    try {
      const [day, month, year] = safeForm.date.split('/');
      const dateISO = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      if (initial && initial.id) {
        await updateExpenseTransaction(initial.id, {
          date: dateISO,
          time: safeForm.time || undefined,
          amount: parseFloat(safeForm.amount),
          note: safeForm.note || undefined,
          account_id: safeForm.fromAccount,
          expense_item_id: safeForm.toSink,
        });
        setSuccess('Expense updated!');
      } else {
        await createExpenseTransaction({
          date: dateISO,
          time: safeForm.time || undefined,
          amount: parseFloat(safeForm.amount),
          note: safeForm.note || undefined,
          account_id: safeForm.fromAccount,
          expense_item_id: safeForm.toSink,
        });
        setSuccess('Expense created!');
      }
      setTimeout(() => {
        setSuccess('');
        onSuccess();
      }, 1000);
    } catch (err: unknown) {
      setError('Failed to save expense transaction.');
    }
  };

  // Track if editing
  const isEdit = !!(initial && initial.id);

  React.useEffect(() => {
    if (initial) {
      setForm({
        fromAccount: initial.account_id || '',
        toSink: initial.expense_item_id || '',
        date: toDDMMYYYY(initial.date),
        time: toHHMM(initial.time),
        note: initial.note || '',
        amount: initial.amount?.toString() || '',
      });
    } else {
      setForm({
        fromAccount: '',
        toSink: '',
        date: getTodayDDMMYYYY(),
        time: '',
        note: '',
        amount: '',
      });
    }
  }, [initial, setForm]);

  // Auto-select if only one expense item or account is available
  React.useEffect(() => {
    if (expenseItems.length === 1 && !safeForm.toSink) {
      setForm(f => ({ ...f, toSink: expenseItems[0].id }));
    }
    if (accounts.length === 1 && !safeForm.fromAccount) {
      setForm(f => ({ ...f, fromAccount: accounts[0].id }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expenseItems, accounts]);

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, note: e.target.value });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">      
      {/* Account Selection - Stack on mobile, side-by-side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <AccountSelector
          label="From Account"
          value={safeForm.fromAccount}
          onChange={(val: string) => setForm({ ...form, fromAccount: val })}
          accounts={accounts}
        />
        <AccountSelector
          label="To Expense Item"
          value={safeForm.toSink}
          onChange={(val: string) => setForm({ ...form, toSink: val })}
          accounts={expenseItems}
        />
      </div>

      {/* Amount, Date, Time Fields - Custom responsive layout */}
      <div className="flex flex-col gap-3">
        {/* Amount and Time on same row for mobile */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium mb-1">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={safeForm.amount}
              onChange={handleChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0.00"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium mb-1">
              Time (Optional)
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={safeForm.time}
              onChange={handleTimeChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        {/* Date on its own row */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-1">
            Date
          </label>
          <CustomDatePicker
            value={safeForm.date}
            onChange={handleCustomDateChange}
          />
        </div>
      </div>

      {/* Note and Buttons - Stack on mobile, side-by-side on desktop */}
      <div className="flex flex-col lg:flex-row lg:items-end gap-3 sm:gap-4">
        <div className="flex-1">
          <NoteField value={safeForm.note} onChange={handleNoteChange} />
        </div>
        <div className="flex-shrink-0">
          <FormButtonStack
            onSubmitLabel={isEdit ? 'Update Expense' : 'Create Expense'}
            onResetLabel="Reset"
            submitType="submit"
            onReset={handleReset}
          />
        </div>
      </div>

      {/* Status Messages */}
      <FormStatusMessages error={error} success={success} />
    </form>
  );
}