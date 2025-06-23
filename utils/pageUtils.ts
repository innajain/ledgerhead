// Utility functions extracted from app/page.tsx
import type { LedgerTransaction } from '@/app/LedgerContext';

export function getAccountBalances(accounts: any[], transactions: LedgerTransaction[]): Record<string, number> {
  const balances: Record<string, number> = {};
  accounts.forEach((acc: any) => {
    balances[acc.id] = 0;
  });
  transactions.forEach((tx: LedgerTransaction) => {
    switch (tx.type) {
      case 'INCOME':
        if (tx.income_transaction) {
          balances[tx.income_transaction.account_id] += tx.amount;
        }
        break;
      case 'EXPENSE':
        if (tx.expense_transaction) {
          balances[tx.expense_transaction.account_id] -= tx.amount;
        }
        break;
      case 'TRANSFER':
        if (tx.transfer_transaction) {
          balances[tx.transfer_transaction.from_account_id] -= tx.amount;
          balances[tx.transfer_transaction.to_account_id] += tx.amount;
        }
        break;
      case 'MF_INVESTMENT':
        if (tx.investment_transaction) {
          balances[tx.investment_transaction.from_account_id] -= tx.amount;
        }
        break;
      case 'MF_REDEMPTION':
        if (tx.redemption_transaction) {
          balances[tx.redemption_transaction.to_account_id] += tx.amount;
        }
        break;
      default:
        break;
    }
  });
  return balances;
}

export function getMonthwisePL(transactions: LedgerTransaction[]): [string, { income: number; expenses: number }][] {
  const pl: Record<string, { income: number; expenses: number }> = {};
  transactions.forEach((tx: LedgerTransaction) => {
    const date = new Date(tx.date);
    const month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    if (!pl[month]) pl[month] = { income: 0, expenses: 0 };
    if (tx.type === 'INCOME') {
      pl[month].income += tx.amount;
    } else if (tx.type === 'EXPENSE') {
      pl[month].expenses += tx.amount;
    }
  });
  return Object.entries(pl).sort((a, b) => b[0].localeCompare(a[0]));
}

export function formatMonth(month: string) {
  // month is in 'YYYY-MM' format
  const [year, m] = month.split('-');
  const date = new Date(Number(year), Number(m) - 1);
  return date.toLocaleString('default', { month: 'long', year: 'numeric' });
}
