'use server';

import { prisma } from '../prisma';
import type { expense_item } from '@/generated/prisma';
import { create_db_history } from '../history/db_history';

export async function createExpenseItem(data: { name: string; group: string; note?: string }): Promise<expense_item> {
  const item = await prisma.expense_item.create({ data });
  await create_db_history('CREATE', 'EXPENSE_ITEM', item.id);
  return item;
}

export async function getExpenseItems(): Promise<expense_item[]> {
  return prisma.expense_item.findMany();
}

export async function updateExpenseItem(id: string, data: { name?: string; group?: string; note?: string }): Promise<expense_item> {
  const item = await prisma.expense_item.update({ where: { id }, data });
  await create_db_history('MODIFY', 'EXPENSE_ITEM', item.id);
  return item;
}

export async function deleteExpenseItem(id: string): Promise<expense_item> {
  const item = await prisma.expense_item.delete({ where: { id } });
  await create_db_history('DELETE', 'EXPENSE_ITEM', item.id);
  return item;
}
