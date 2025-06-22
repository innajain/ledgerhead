import React from 'react';
import { AccountSelector } from '../components/AccountSelector';
import { CustomDatePicker } from '../components/CustomDatePicker';
import { createInvestmentTransaction, updateInvestmentTransaction } from '@/server actions/db';
import { FormButtonStack } from '../components/FormButtonStack';
import { LedgerInvestmentTransaction, useLedgerData } from '../../LedgerContext';
import { getTodayDDMMYYYY, toDDMMYYYY, toHHMM } from '../components/dateUtils';
import { useFormState } from '../components/useFormState';
import { FormStatusMessages } from '../components/FormStatusMessages';

export function InvestmentForm({ onSuccess, initial }: { onSuccess: () => void; initial?: LedgerInvestmentTransaction }) {
  const { accounts, mutualFunds, loading } = useLedgerData();
  const initialForm = {
    fromAccount: '',
    toMutualFund: '',
    units: '',
    buyNav: '',
    date: '',
    time: '',
    allotmentDate: '',
    note: '',
    amount: '',
  };
  const { form, setForm, error, setError, success, setSuccess, resetForm } = useFormState(initialForm);
  const safeForm = {
    fromAccount: form.fromAccount ?? '',
    toMutualFund: form.toMutualFund ?? '',
    units: form.units ?? '',
    buyNav: form.buyNav ?? '',
    date: form.date ?? '',
    time: form.time ?? '',
    allotmentDate: form.allotmentDate ?? '',
    note: form.note ?? '',
    amount: form.amount ?? '',
  };

  React.useEffect(() => {
    if (initial) {
      setForm({
        fromAccount: initial.investment_transaction.from_account_id || '',
        toMutualFund: initial.investment_transaction.units_lot.mutual_fund_id || '',
        units: initial.investment_transaction.units_bought.toString() || '',
        buyNav: initial.investment_transaction.buy_nav.toString() || '',
        date: toDDMMYYYY(initial.date),
        time: toHHMM(initial.time),
        allotmentDate: toDDMMYYYY(initial.investment_transaction.allotment_date),
        note: initial.note || '',
        amount: initial.amount?.toString() || '',
      });
    } else {
      setForm({
        fromAccount: '',
        toMutualFund: '',
        units: '',
        buyNav: '',
        date: getTodayDDMMYYYY(),
        time: '',
        allotmentDate: getTodayDDMMYYYY(),
        note: '',
        amount: '',
      });
    }
  }, [initial, setForm]);

  // Auto-select mutual fund if only one is available
  React.useEffect(() => {
    if (mutualFunds.length === 1 && !safeForm.toMutualFund) {
      setForm(f => ({ ...f, toMutualFund: mutualFunds[0].id }));
    }
    if (accounts.length === 1 && !safeForm.fromAccount) {
      setForm(f => ({ ...f, fromAccount: accounts[0].id }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutualFunds, accounts]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCustomDateChange = (val: string) => {
    setForm({ ...form, date: val });
  };

  const handleAllotmentDateChange = (val: string) => {
    setForm({ ...form, allotmentDate: val });
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
    if (
      !safeForm.fromAccount ||
      !safeForm.toMutualFund ||
      !safeForm.units ||
      !safeForm.buyNav ||
      !safeForm.date ||
      !safeForm.allotmentDate ||
      !safeForm.amount
    ) {
      setError('All fields are required.');
      return;
    }
    try {
      const [day, month, year] = safeForm.date.split('/');
      const dateISO = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      const [allotDay, allotMonth, allotYear] = safeForm.allotmentDate.split('/');
      const allotmentDateISO = `${allotYear}-${allotMonth.padStart(2, '0')}-${allotDay.padStart(2, '0')}`;
      if (initial && initial.id) {
        await updateInvestmentTransaction(initial.id, {
          date: dateISO,
          time: safeForm.time || undefined,
          amount: parseFloat(safeForm.amount),
          note: safeForm.note || undefined,
          from_account_id: safeForm.fromAccount,
          units_bought: parseFloat(safeForm.units),
          buy_nav: parseFloat(safeForm.buyNav),
        });
        setSuccess('Investment updated!');
      } else {
        await createInvestmentTransaction({
          date: dateISO,
          time: safeForm.time || undefined,
          amount: parseFloat(safeForm.amount),
          note: safeForm.note || undefined,
          mutual_fund_id: safeForm.toMutualFund,
          from_account_id: safeForm.fromAccount,
          units_bought: parseFloat(safeForm.units),
          buy_nav: parseFloat(safeForm.buyNav),
          allotment_date: new Date(allotmentDateISO),
        });
        setSuccess('Investment transaction saved!');
      }
      setTimeout(() => {
        setSuccess('');
        onSuccess();
      }, 1000);
    } catch {
      setError('Failed to save investment transaction.');
    }
  };

  // Track if editing
  const isEdit = !!(initial && initial.id);

  if (loading) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
      {/* Account and Mutual Fund Selection - Stack on mobile, side-by-side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <AccountSelector
          label="From Account"
          value={safeForm.fromAccount}
          onChange={(val: string) => setForm({ ...form, fromAccount: val })}
          accounts={accounts}
        />
        <div>
          <label htmlFor="toMutualFund" className="block text-sm font-medium mb-1">
            To Mutual Fund
          </label>
          <select
            id="toMutualFund"
            name="toMutualFund"
            value={safeForm.toMutualFund}
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
      </div>

      {/* Amount, Units, and Buy NAV - Side by side on all screen sizes */}
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
            Units
          </label>
          <input
            type="number"
            id="units"
            name="units"
            value={safeForm.units}
            onChange={handleChange}
            min="0.0001"
            step="0.0001"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="0.0000"
          />
        </div>
        <div>
          <label htmlFor="buyNav" className="block text-sm font-medium mb-1">
            NAV
          </label>
          <input
            type="number"
            id="buyNav"
            name="buyNav"
            value={safeForm.buyNav}
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
            Transaction Date
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

      {/* Allotment Date */}
      <div>
        <label htmlFor="allotmentDate" className="block text-sm font-medium mb-1">
          Allotment Date
        </label>
        <CustomDatePicker value={safeForm.allotmentDate} onChange={handleAllotmentDateChange} />
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
            onSubmitLabel={isEdit ? 'Update Investment' : 'Create Investment'}
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
