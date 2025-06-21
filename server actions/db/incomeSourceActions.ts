'use server';

import { PrismaClient } from '@/generated/prisma';
import type { income_source } from '@/generated/prisma';
import { create_db_history } from './historyActions';

const prisma = new PrismaClient();

export async function createIncomeSource(data: { name: string; group: string }): Promise<income_source> {
  const source = await prisma.income_source.create({ data });
  await create_db_history('CREATE', 'INCOME_SOURCE', source.id);
  return source;
}

export async function getIncomeSources(): Promise<income_source[]> {
  return prisma.income_source.findMany();
}

export async function updateIncomeSource(id: string, data: { name?: string; group?: string }): Promise<income_source> {
  const source = await prisma.income_source.update({ where: { id }, data });
  await create_db_history('MODIFY', 'INCOME_SOURCE', source.id);
  return source;
}

export async function deleteIncomeSource(id: string): Promise<income_source> {
  const source = await prisma.income_source.delete({ where: { id } });
  await create_db_history('DELETE', 'INCOME_SOURCE', source.id);
  return source;
}
