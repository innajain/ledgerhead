import React from 'react';
import { AccountSelector } from '../components/AccountSelector';
import { CustomDatePicker } from '../components/CustomDatePicker';
import { updateIncomeTransaction, createIncomeTransaction } from '@/server actions/db';
import { FormButtonStack } from '../components/FormButtonStack';
import { LedgerIncomeTransaction, useLedgerData } from '../../LedgerContext';
import { getTodayDDMMYYYY, toDDMMYYYY, toHHMM } from '../components/dateUtils';
import { useFormState } from '../components/useFormState';
import { FormStatusMessages } from '../components/FormStatusMessages';

export function IncomeForm({ onSuccess, initial }: { onSuccess: () => void; initial?: LedgerIncomeTransaction }) {
  const { accounts, incomeSources, loading } = useLedgerData();
  const initialForm = {
    fromSource: '',
    toAccount: '',
    amount: '',
    date: '',
    time: '',
    note: '',
  };
  const { form, setForm, error, setError, success, setSuccess, resetForm } = useFormState(initialForm);
  const safeForm = {
    fromSource: form.fromSource ?? '',
    toAccount: form.toAccount ?? '',
    amount: form.amount ?? '',
    date: form.date ?? '',
    time: form.time ?? '',
    note: form.note ?? '',
  };

  React.useEffect(() => {
    if (initial) {
      setForm({
        fromSource: initial.income_transaction.income_source_id || '',
        toAccount: initial.income_transaction.account_id || '',
        date: toDDMMYYYY(initial.date),
        time: toHHMM(initial.time),
        note: initial.note || '',
        amount: initial.amount?.toString() || '',
      });
    } else {
      setForm({
        fromSource: '',
        toAccount: '',
        date: getTodayDDMMYYYY(),
        time: '',
        note: '',
        amount: '',
      });
    }
  }, [initial, setForm]);

  // Auto-select if only one income source or account is available
  React.useEffect(() => {
    if (incomeSources.length === 1 && !safeForm.fromSource) {
      setForm(f => ({ ...f, fromSource: incomeSources[0].id }));
    }
    if (accounts.length === 1 && !safeForm.toAccount) {
      setForm(f => ({ ...f, toAccount: accounts[0].id }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [incomeSources, accounts]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCustomDateChange = (val: string) => {
    setForm({ ...form, date: val });
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, time: e.target.value });
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, note: e.target.value });
  };

  const handleReset = () => {
    resetForm();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!safeForm.fromSource || !safeForm.toAccount || !safeForm.date || !safeForm.amount) {
      setError('All fields are required.');
      return;
    }
    try {
      const [day, month, year] = safeForm.date.split('/');
      const dateISO = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      if (initial && initial.id) {
        await updateIncomeTransaction(initial.id, {
          date: dateISO,
          time: safeForm.time || undefined,
          amount: parseFloat(safeForm.amount),
          note: safeForm.note || undefined,
          income_source_id: safeForm.fromSource,
          account_id: safeForm.toAccount,
        });
        setSuccess('Income updated!');
      } else {
        await createIncomeTransaction({
          date: dateISO,
          time: safeForm.time || undefined,
          amount: parseFloat(safeForm.amount),
          note: safeForm.note || undefined,
          income_source_id: safeForm.fromSource,
          account_id: safeForm.toAccount,
        });
        setSuccess('Income created!');
      }
      setTimeout(() => {
        setSuccess('');
        onSuccess();
      }, 1000);
    } catch {
      setError('Failed to save income transaction.');
    }
  };

  // Track if editing
  const isEdit = !!(initial && initial.id);

  if (loading) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
      {/* Income Source and Account Selection - Stack on mobile, side-by-side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <AccountSelector
          label="From Income Source"
          value={safeForm.fromSource}
          onChange={(val: string) => setForm({ ...form, fromSource: val })}
          accounts={incomeSources}
        />
        <AccountSelector
          label="To Account"
          value={safeForm.toAccount}
          onChange={(val: string) => setForm({ ...form, toAccount: val })}
          accounts={accounts}
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
          <CustomDatePicker value={safeForm.date} onChange={handleCustomDateChange} />
        </div>
      </div>

      {/* Note and Buttons - Stack on mobile, side-by-side on desktop */}
      <div className="flex flex-col lg:flex-row lg:items-end gap-3 sm:gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <label htmlFor="note" className="block text-sm font-medium flex-shrink-0 w-12 sm:w-16">
              Note
            </label>
            <textarea
              id="note"
              name="note"
              value={safeForm.note}
              onChange={handleNoteChange}
              rows={2}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
              placeholder="Optional note..."
            />
          </div>
        </div>
        <div className="flex-shrink-0">
          <FormButtonStack
            onSubmitLabel={isEdit ? 'Update Income' : 'Create Income'}
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
