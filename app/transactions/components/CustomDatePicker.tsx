import React from 'react';

function getTodayParts() {
  const today = new Date();
  return {
    day: String(today.getDate()).padStart(2, '0'),
    month: String(today.getMonth() + 1).padStart(2, '0'),
    year: String(today.getFullYear()),
  };
}

export function CustomDatePicker({ value, onChange }: { value: string; onChange: (val: string) => void }) {
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
      <select value={month} onChange={e => handleChange(day, e.target.value, year)} className="border rounded px-2 py-1">
        {months.map(m => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
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
