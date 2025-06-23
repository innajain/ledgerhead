import type { Snapshot } from '@/server actions/db/history/db_history';

export function convert_json_to_snapshot(jsonData: any): Snapshot {
  return {
    account: jsonData.account || [],
    income_source: jsonData.income_source || [],
    expense_item: jsonData.expense_item || [],
    mutual_fund: jsonData.mutual_fund || [],
    units_lot: jsonData.units_lot || [],
    investment_transaction: (jsonData.investment_transaction || []).map((item: any) => ({
      ...item,
      allotment_date: new Date(item.allotment_date)
    })),
    redemption_transaction: (jsonData.redemption_transaction || []).map((item: any) => ({
      ...item,
      redemption_date: new Date(item.redemption_date)
    })),
    redemption_bucket: jsonData.redemption_bucket || [],
    transaction: (jsonData.transaction || []).map((item: any) => ({
      ...item,
      created_at: new Date(item.created_at),
      date: new Date(item.date),
      time: item.time ? new Date(item.time) : null,
    })),
    transfer_transaction: jsonData.transfer_transaction || [],
    expense_transaction: jsonData.expense_transaction || [],
    income_transaction: jsonData.income_transaction || [],
  };
}
