'use server';

import type { account } from '@/generated/prisma';
import { create_db_history } from '../history/db_history';
import { prisma } from '../prisma';


export async function createAccount(data: { name: string; group: string; balance?: number; note?: string }): Promise<account> {
  const account = await prisma.account.create({ data });
  await create_db_history('CREATE', 'ACCOUNT', account.id);
  return account;
}

export async function getAccounts(): Promise<account[]> {
  return prisma.account.findMany();
}

export async function updateAccount(id: string, data: { name?: string; group?: string; note?: string }): Promise<account> {
  const account = await prisma.account.update({ where: { id }, data });
  await create_db_history('MODIFY', 'ACCOUNT', account.id);
  return account;
}

export async function deleteAccount(id: string): Promise<account> {
  const account = await prisma.account.delete({ where: { id } });
  await create_db_history('DELETE', 'ACCOUNT', account.id);
  return account;
}
