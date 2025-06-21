import { useState } from 'react';
// import { ExpenseFormInitial } from '../forms/ExpenseForm';
// import { IncomeFormInitial } from '../forms/IncomeForm';
// import { InvestmentFormInitial } from '../forms/InvestmentForm';
// import { RedemptionFormInitial } from '../forms/RedemptionForm';
// import { TransferFormInitial } from '../forms/TransferForm';

/**
 * Shared hook for managing form state, error, and success messages.
 * @param initialForm The initial form state object
 */
export function useFormState<T extends Record<string, any>>(initialForm: T) {
  const [form, setForm] = useState<T>(initialForm);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const resetForm = () => {
    setForm(initialForm);
    setError('');
    setSuccess('');
  };

  return {
    form,
    setForm,
    error,
    setError,
    success,
    setSuccess,
    resetForm,
  };
}

// type FormType = ExpenseFormInitial | IncomeFormInitial | InvestmentFormInitial | RedemptionFormInitial | TransferFormInitial;
