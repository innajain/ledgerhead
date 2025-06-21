import React from 'react';
import { AccountSelector } from '../components/AccountSelector';
import { CustomDatePicker } from '../components/CustomDatePicker';
import { createRedemptionTransaction, updateRedemptionTransaction } from '@/server actions/db';
import { NoteField } from '../components/NoteField';
import { FormButtonStack } from '../components/FormButtonStack';
import type { account, mutual_fund } from '@/generated/prisma';
import { useLedgerData } from '../../LedgerContext';
import { getTodayDDMMYYYY, toDDMMYYYY, toHHMM } from '../components/dateUtils';
import { useFormState } from '../components/useFormState';
import { FormStatusMessages } from '../components/FormStatusMessages';
import { AmountDateTimeFields, FormRow } from '../components/AmountDateTimeFields';

function formatDateForDisplay(dateString: string) {
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
}

export interface RedemptionFormInitial {
  id?: string;
  mutual_fund_id?: string;
  to_account_id?: string;
  units_redeemed?: number;
  sell_nav?: number;
  date?: string | Date;
  time?: string | Date;
  note?: string;
  amount?: number;
}

export function RedemptionForm({ onSuccess, initial }: { onSuccess: () => void; initial?: RedemptionFormInitial }) {
  const { accounts, mutualFunds, loading, refreshEntities } = useLedgerData();
  const initialForm = {
    fromMutualFund: '',
    toAccount: '',
    units: '',
    sellNav: '',
    date: '',
    time: '',
    note: '',
    amount: '',
  };
  const { form, setForm, error, setError, success, setSuccess, resetForm } = useFormState(initialForm);
  const safeForm = {
    fromMutualFund: form.fromMutualFund ?? '',
    toAccount: form.toAccount ?? '',
    units: form.units ?? '',
    sellNav: form.sellNav ?? '',
    date: form.date ?? '',
    time: form.time ?? '',
    note: form.note ?? '',
    amount: form.amount ?? '',
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
    if (!safeForm.fromMutualFund || !safeForm.toAccount || !safeForm.units || !safeForm.sellNav || !safeForm.date || !safeForm.amount) {
      setError('All fields are required.');
      return;
    }
    if (parseFloat(safeForm.units) > selectedRemainingUnitsNum) {
      setError('Cannot redeem more units than available.');
      return;
    }
    try {
      const [day, month, year] = safeForm.date.split('/');
      const dateISO = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      if (initial && initial.id) {
        await updateRedemptionTransaction(initial.id, {
          date: dateISO,
          time: safeForm.time || undefined,
          amount: parseFloat(safeForm.amount),
          note: safeForm.note || undefined,
          to_account_id: safeForm.toAccount,
          units_sold: parseFloat(safeForm.units),
          sell_nav: parseFloat(safeForm.sellNav),
        });
        setSuccess('Redemption updated!');
      } else {
        await createRedemptionTransaction({
          date: dateISO,
          time: safeForm.time || undefined,
          amount: parseFloat(safeForm.amount),
          note: safeForm.note || undefined,
          mutual_fund_id: safeForm.fromMutualFund,
          to_account_id: safeForm.toAccount,
          units_sold: parseFloat(safeForm.units),
          sell_nav: parseFloat(safeForm.sellNav),
        });
        setSuccess('Redemption transaction saved!');
      }
      setTimeout(() => {
        setSuccess('');
        onSuccess();
      }, 1000);
    } catch (err: unknown) {
      setError('Failed to save redemption transaction.');
    }
  };

  // Track if editing
  const isEdit = !!(initial && initial.id);

  React.useEffect(() => {
    if (initial) {
      setForm({
        fromMutualFund: initial.mutual_fund_id || '',
        toAccount: initial.to_account_id || '',
        units: initial.units_redeemed?.toString() || '',
        sellNav: initial.sell_nav?.toString() || '',
        date: toDDMMYYYY(initial.date),
        time: toHHMM(initial.time),
        note: initial.note || '',
        amount: initial.amount?.toString() || '',
      });
    } else {
      setForm({
        fromMutualFund: '',
        toAccount: '',
        units: '',
        sellNav: '',
        date: getTodayDDMMYYYY(),
        time: '',
        note: '',
        amount: '',
      });
    }
  }, [initial, setForm]);

  // Auto-select mutual fund if only one is available
  React.useEffect(() => {
    if (mutualFunds.length === 1 && !safeForm.fromMutualFund) {
      setForm(f => ({ ...f, fromMutualFund: mutualFunds[0].id }));
    }
    if (accounts.length === 1 && !safeForm.toAccount) {
      setForm(f => ({ ...f, toAccount: accounts[0].id }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutualFunds, accounts]);

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, note: e.target.value });
  };

  if (loading) return <div>Loading...</div>;

  // Find remaining units for selected mutual fund
  const selectedMF = mutualFunds.find(mf => mf.id === safeForm.fromMutualFund);
  let selectedRemainingUnits = '';
  let selectedRemainingUnitsNum = 0;
  if (selectedMF) {
    const units_bought = selectedMF.units.reduce((total, unit) => total + (unit.investment_transaction.units_bought || 0), 0);
    const units_sold = selectedMF.units.reduce((total, unit) => total + (unit.redemption_buckets.reduce((sum, bucket) => sum + bucket.units_redeemed, 0)), 0);
    selectedRemainingUnitsNum = units_bought - units_sold;
    selectedRemainingUnits = selectedRemainingUnitsNum.toLocaleString(undefined, { maximumFractionDigits: 4 });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
      {/* Mutual Fund and Account Selection - Stack on mobile, side-by-side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor="fromMutualFund" className="block text-sm font-medium mb-1">
            From Mutual Fund
          </label>
          <select
            id="fromMutualFund"
            name="fromMutualFund"
            value={safeForm.fromMutualFund}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Mutual Fund</option>
            {mutualFunds.map(mf => (
              <option key={mf.id} value={mf.id}>
                {mf.name}
              </option>
            ))}
          </select>
        </div>
        <AccountSelector
          label="To Account"
          value={safeForm.toAccount}
          onChange={(val: string) => setForm({ ...form, toAccount: val })}
          accounts={accounts}
        />
      </div>

      {/* Amount, Units, and Sell NAV - Side by side on all screen sizes */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
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
          <label htmlFor="units" className="block text-sm font-medium mb-1">
            Units Sold
          </label>
          <input
            type="number"
            id="units"
            name="units"
            value={safeForm.units}
            onChange={handleChange}
            min="0.0001"
            step="0.0001"
            max={selectedRemainingUnitsNum || undefined}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="0.0000"
          />
          {selectedRemainingUnits && (
            <div className="text-xs text-gray-500 mt-1">
              Available: {selectedRemainingUnits}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="sellNav" className="block text-sm font-medium mb-1">
            Sell NAV
          </label>
          <input
            type="number"
            id="sellNav"
            name="sellNav"
            value={safeForm.sellNav}
            onChange={handleChange}
            min="0.0001"
            step="0.0001"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="0.0000"
          />
        </div>
      </div>

      {/* Date and Time Fields - Flex layout with proportional widths */}
      <div className="flex gap-3 sm:gap-4">
        <div className="flex-[2] min-w-0">
          <label htmlFor="date" className="block text-sm font-medium mb-1">
            Date
          </label>
          <CustomDatePicker value={safeForm.date} onChange={handleCustomDateChange} />
        </div>
        <div className="flex-1 min-w-0">
          <label htmlFor="time" className="block text-sm font-medium mb-1">
            Time (Optional)
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={safeForm.time}
            onChange={handleTimeChange}
            className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
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
            onSubmitLabel={isEdit ? 'Update Redemption' : 'Create Redemption'}
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