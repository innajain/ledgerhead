'use server';

import { prisma } from '../prisma';
import type { db_history_event_type, db_history_entity_type } from '@/generated/prisma';

export async function ensureDbHistoryInit() {
  const count = await prisma.db_history.count();
  if (count === 0) {
    await prisma.db_history.create({
      data: {
        event_type: 'INIT' as db_history_event_type,
        entity_type: 'DB_HISTORY' as db_history_entity_type,
        entity_id: 'init',
        snapshot: {},
      },
    });
  }
}