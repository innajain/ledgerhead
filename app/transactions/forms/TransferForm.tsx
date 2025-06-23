import React from 'react';
import { AccountSelector } from '../components/AccountSelector';
import { CustomDatePicker } from '../components/CustomDatePicker';
import { updateTransferTransaction, createTransferTransaction } from '@/server actions/db';
import { FormButtonStack } from '../components/FormButtonStack';
import { LedgerTransferTransaction, useLedgerData } from '../../LedgerContext';
import { getTodayDDMMYYYY, toDDMMYYYY, toHHMM } from '../components/dateUtils';
import { useFormState } from '../components/useFormState';

export function TransferForm({ onSuccess, initial, viewOnly }: { onSuccess: () => void; initial?: LedgerTransferTransaction; viewOnly?: boolean }) {
  const { accounts, loading } = useLedgerData();
  const initialForm = {
    fromAccount: '',
    toAccount: '',
    amount: '',
    date: '',
    time: '',
    note: '',
  };
  const { form, setForm, setError, setSuccess, resetForm } = useFormState(initialForm);

  // Track if editing
  const isEdit = !!(initial && initial.id);

  React.useEffect(() => {
    if (initial) {
      setForm({
        fromAccount: initial.transfer_transaction.from_account_id || '',
        toAccount: initial.transfer_transaction.to_account_id || '',
        date: toDDMMYYYY(initial.date),
        time: toHHMM(initial.time),
        note: initial.note || '',
        amount: initial.amount?.toString() || '',
      });
    } else {
      setForm({
        fromAccount: '',
        toAccount: '',
        date: getTodayDDMMYYYY(),
        time: '',
        note: '',
        amount: '',
      });
    }
  }, [initial, setForm]);

  // Ensure all values are always strings for controlled inputs
  const safeForm = {
    fromAccount: form.fromAccount ?? '',
    toAccount: form.toAccount ?? '',
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
    if (!safeForm.fromAccount || !safeForm.toAccount || !safeForm.date || !safeForm.amount) {
      setError('All fields are required.');
      return;
    }
    try {
      const [day, month, year] = safeForm.date.split('/');
      const dateISO = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      if (initial && initial.id) {
        await updateTransferTransaction(initial.id, {
          date: dateISO,
          time: safeForm.time || undefined,
          amount: parseFloat(safeForm.amount),
          note: safeForm.note || undefined,
          from_account_id: safeForm.fromAccount,
          to_account_id: safeForm.toAccount,
        });
        setSuccess('Transfer updated!');
      } else {
        await createTransferTransaction({
          date: dateISO,
          time: safeForm.time || undefined,
          amount: parseFloat(safeForm.amount),
          note: safeForm.note || undefined,
          from_account_id: safeForm.fromAccount,
          to_account_id: safeForm.toAccount,
        });
        setSuccess('Transfer created!');
      }
      setTimeout(() => {
        setSuccess('');
        onSuccess();
      }, 1000);
    } catch {
      setError('Failed to save transfer transaction.');
    }
  };

  // Auto-select if only one account is available for fromAccount or toAccount
  React.useEffect(() => {
    if (accounts.length === 1 && !safeForm.fromAccount) {
      setForm(f => ({ ...f, fromAccount: accounts[0].id }));
    }
    if (accounts.length === 1 && !safeForm.toAccount) {
      setForm(f => ({ ...f, toAccount: accounts[0].id }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accounts]);

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
          disabled={!!viewOnly}
        />
        <AccountSelector
          label="To Account"
          value={safeForm.toAccount}
          onChange={(val: string) => setForm({ ...form, toAccount: val })}
          accounts={accounts}
          disabled={!!viewOnly}
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
              disabled={!!viewOnly}
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
              disabled={!!viewOnly}
            />
          </div>
        </div>
        {/* Date on its own row */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-1">
            Date
          </label>
          <CustomDatePicker value={safeForm.date} onChange={handleCustomDateChange} disabled={!!viewOnly} />
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
              disabled={!!viewOnly}
            />
          </div>
        </div>
        {!viewOnly && (
          <div className="flex-shrink-0">
            <FormButtonStack
              onSubmitLabel={isEdit ? 'Update Transfer' : 'Create Transfer'}
              onResetLabel="Reset"
              submitType="submit"
              onReset={handleReset}
            />
          </div>
        )}
      </div>
    </form>
  );
}
