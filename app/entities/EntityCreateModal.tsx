import React, { useState } from 'react';
import { createAccount, createIncomeSource, createExpenseItem, createMutualFund, updateAccount, updateMutualFund } from '@/server actions/db';

const ENTITY_TYPES = [
  { label: 'Account', value: 'ACCOUNT' },
  { label: 'Income Source', value: 'INCOME_SOURCE' },
  { label: 'Expense Item', value: 'EXPENSE_ITEM' },
  { label: 'Mutual Fund', value: 'MUTUAL_FUND' },
];

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

function SimpleForm<T extends Record<string, string>>({
  label,
  fields,
  form,
  setForm,
  onSubmit,
  onSuccess,
  submitLabel,
}: {
  label: string;
  fields: { name: string; label: string; type?: string; readonly?: boolean }[];
  form: T;
  setForm: (f: T) => void;
  onSubmit: (data: T) => Promise<any>;
  onSuccess?: () => void;
  submitLabel?: string;
  editMode?: boolean;
}) {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value } as T);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (fields.some(f => !f.readonly && !form[f.name])) {
      setError('All required fields must be filled.');
      return;
    }
    try {
      await onSubmit(form);
      setSuccess(label + ' created!');
      setForm(Object.fromEntries(fields.map(f => [f.name, ''])) as T);
      if (onSuccess) onSuccess();
    } catch {
      setError('Failed to create ' + label.toLowerCase() + '.');
    }
  };

  const handleReset = () => {
    setForm(Object.fromEntries(fields.map(f => [f.name, ''])) as T);
    setError('');
    setSuccess('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <p className="font-semibold mb-2">Create {label}</p>
      {fields.map(f => (
        <div key={f.name}>
          <label className="block mb-1">{f.label}</label>
          <input
            className={`border rounded px-2 py-1 w-full ${f.readonly ? 'bg-gray-100' : ''}`}
            name={f.name}
            value={form[f.name]}
            onChange={handleChange}
            type={f.type || 'text'}
            required={!f.readonly}
            readOnly={f.readonly}
          />
        </div>
      ))}
      {error && <div className="text-red-600 text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">{success}</div>}
      <div className="flex gap-2 mt-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          {submitLabel || `Create ${label}`}
        </button>
        <button type="button" onClick={handleReset} className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors">
          Reset
        </button>
      </div>
    </form>
  );
}

export function EntityCreateModal({
  open,
  onClose,
  entityType,
  setEntityType,
  forms,
  setForms,
  editId,
  onAnyCreate,
}: {
  open: boolean;
  onClose: () => void;
  entityType: 'ACCOUNT' | 'INCOME_SOURCE' | 'EXPENSE_ITEM' | 'MUTUAL_FUND';
  setEntityType: (t: 'ACCOUNT' | 'INCOME_SOURCE' | 'EXPENSE_ITEM' | 'MUTUAL_FUND') => void;
  forms: {
    ACCOUNT: { name: string; group: string };
    INCOME_SOURCE: { name: string; group: string };
    EXPENSE_ITEM: { name: string; group: string };
    MUTUAL_FUND: { name: string; isin: string };
  };
  setForms: React.Dispatch<
    React.SetStateAction<{
      ACCOUNT: { name: string; group: string };
      INCOME_SOURCE: { name: string; group: string };
      EXPENSE_ITEM: { name: string; group: string };
      MUTUAL_FUND: { name: string; isin: string };
    }>
  >;
  editId?: string | null;
  onAnyCreate?: () => void;
}) {
  let formComponent = null;
  if (entityType === 'ACCOUNT') {
    formComponent = (
      <SimpleForm
        label="Account"
        fields={[
          { name: 'name', label: 'Name' },
          { name: 'group', label: 'Group' },
        ]}
        form={forms.ACCOUNT}
        setForm={f => setForms({ ...forms, ACCOUNT: f })}
        onSubmit={async data => {
          if (editId) {
            await updateAccount(editId, { name: data.name, group: data.group });
          } else {
            await createAccount({ name: data.name, group: data.group });
          }
        }}
        onSuccess={onAnyCreate}
        submitLabel={editId ? 'Update' : 'Create'}
      />
    );
  } else if (entityType === 'INCOME_SOURCE') {
    formComponent = (
      <SimpleForm
        label="Income Source"
        fields={[
          { name: 'name', label: 'Name' },
          { name: 'group', label: 'Group' },
        ]}
        form={forms.INCOME_SOURCE}
        setForm={f => setForms({ ...forms, INCOME_SOURCE: f })}
        onSubmit={async data => createIncomeSource({ name: data.name, group: data.group })}
        onSuccess={onAnyCreate}
      />
    );
  } else if (entityType === 'EXPENSE_ITEM') {
    formComponent = (
      <SimpleForm
        label="Expense Item"
        fields={[
          { name: 'name', label: 'Name' },
          { name: 'group', label: 'Group' },
        ]}
        form={forms.EXPENSE_ITEM}
        setForm={f => setForms({ ...forms, EXPENSE_ITEM: f })}
        onSubmit={async data => createExpenseItem({ name: data.name, group: data.group })}
        onSuccess={onAnyCreate}
      />
    );
  } else if (entityType === 'MUTUAL_FUND') {
    formComponent = (
      <SimpleForm
        label="Mutual Fund"
        fields={[
          { name: 'name', label: 'Name' },
          { name: 'isin', label: 'ISIN', readonly: !!editId },
        ]}
        form={forms.MUTUAL_FUND}
        setForm={f => setForms({ ...forms, MUTUAL_FUND: f })}
        onSubmit={async data => {
          if (editId) {
            await updateMutualFund(editId, { name: data.name });
          } else {
            await createMutualFund({ name: data.name, isin: data.isin });
          }
        }}
        onSuccess={onAnyCreate}
        submitLabel={editId ? 'Update' : 'Create'}
        editMode={!!editId}
      />
    );
  }
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col gap-4 min-w-[350px]">
        {!editId && (
          <>
            <label className="block font-medium">Select Entity Type:</label>
            <select className="border rounded px-3 py-2 mb-2 w-full" value={entityType} onChange={e => setEntityType(e.target.value as any)}>
              {ENTITY_TYPES.map(t => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </>
        )}
        {formComponent}
      </div>
    </Modal>
  );
}
