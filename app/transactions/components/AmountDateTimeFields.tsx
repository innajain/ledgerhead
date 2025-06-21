import React from 'react';
import { CustomDatePicker } from './CustomDatePicker';

interface AmountDateTimeFieldsProps {
  amount: string;
  date: string;
  time: string;
  onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDateChange: (val: string) => void;
  onTimeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  amountLabel?: string;
  dateLabel?: string;
  timeLabel?: string;
  minAmount?: string;
  stepAmount?: string;
}

export function AmountDateTimeFields({
  amount,
  date,
  time,
  onAmountChange,
  onDateChange,
  onTimeChange,
  amountLabel = 'Amount',
  dateLabel = 'Date (dd/mm/yyyy)',
  timeLabel = 'Time (optional)',
  minAmount = '0.01',
  stepAmount = '0.01',
}: AmountDateTimeFieldsProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <label className="block mb-1">{amountLabel}</label>
        <input
          type="number"
          className="border rounded px-2 py-1 w-full"
          name="amount"
          value={amount}
          onChange={onAmountChange}
          min={minAmount}
          step={stepAmount}
        />
      </div>
      <div className="flex-1">
        <label className="block mb-1">{dateLabel}</label>
        <CustomDatePicker value={date} onChange={onDateChange} />
      </div>
      <div className="flex-1">
        <label className="block mb-1">{timeLabel}</label>
        <input
          type="time"
          className="border rounded px-2 py-1 w-full"
          name="time"
          value={time}
          onChange={onTimeChange}
        />
      </div>
    </div>
  );
}

export function FormRow({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-4">{children}</div>;
}
