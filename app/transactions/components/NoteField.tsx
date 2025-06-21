import React from 'react';

export function NoteField({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }) {
  return (
    <div className="flex-1">
      <label className="block mb-1">Note (optional)</label>
      <textarea
        className="border rounded px-2 py-1 w-full resize-y min-h-[2.5rem]"
        name="note"
        value={value}
        onChange={onChange}
        rows={2}
      />
    </div>
  );
}
