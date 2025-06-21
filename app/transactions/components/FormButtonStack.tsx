import React from 'react';

export function FormButtonStack({
  onSubmitLabel,
  onResetLabel,
  onReset,
  submitType = 'submit',
}: {
  onSubmitLabel: string;
  onResetLabel: string;
  onReset?: React.MouseEventHandler;
  submitType?: 'submit' | 'button';
}) {
  return (
    <div className="flex flex-col gap-2 mb-1">
      <button
        type={submitType}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        {onSubmitLabel}
      </button>
      <button
        type="button"
        onClick={onReset}
        className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
      >
        {onResetLabel}
      </button>
    </div>
  );
}
