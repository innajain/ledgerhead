'use server'

import fs from 'fs';
import JSZip from 'jszip';
import csv from 'csv-parser';
import { prisma } from './prisma';
import { emptyDb, populateDbFromSnapshot } from './history/db_history';

function decodeSnapshot(base64: string) {
  if (!base64) return null;
  const json = decodeURIComponent(
    Buffer.from(base64, 'base64')
      .toString('binary')
      .split('')
      .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  );
  return JSON.parse(json);
}

async function parseCsvFromZip(zip: JSZip, filename: string) {
  const file = zip.file(filename);
  if (!file) return [];
  const content = await file.async('nodebuffer');
  return new Promise<any[]>((resolve, reject) => {
    const results: any[] = [];
    const stream = require('stream');
    const bufferStream = new stream.PassThrough();
    bufferStream.end(content);
    bufferStream
      .pipe(csv())
      .on('data', (data: any) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
}

export async function importFromCsvZip(zipPath: string) {
  const data = fs.readFileSync(zipPath);
  const zip = await JSZip.loadAsync(data);
  // Parse all tables for snapshot
  const snapshotTables = [
    'account',
    'income_source',
    'expense_item',
    'mutual_fund',
    'units_lot',
    'transaction',
    'transfer_transaction',
    'expense_transaction',
    'income_transaction',
    'investment_transaction',
    'redemption_transaction',
    'redemption_bucket',
  ];
  const snapshot: any = {};
  for (const table of snapshotTables) {
    snapshot[table] = await parseCsvFromZip(zip, `${table}.csv`);
  }
  // Empty all tables except db_history
  await emptyDb();
  // Repopulate all tables except db_history
  await populateDbFromSnapshot(snapshot);
  // Handle db_history separately
  const dbHistoryRows = await parseCsvFromZip(zip, 'db_history.csv');
  dbHistoryRows.forEach(row => {
    if (row.snapshot) {
      try {
        row.snapshot = decodeSnapshot(row.snapshot);
      } catch {
        row.snapshot = null;
      }
    }
  });
  await prisma.db_history.deleteMany({});
  for (const row of dbHistoryRows) {
    await prisma.db_history.create({ data: row });
  }
  console.log('Database repopulated from CSV ZIP.');
  return { ...snapshot, db_history: dbHistoryRows };
}

// Usage example (uncomment to use as a script)
// if (require.main === module) {
//   const zipPath = "../../dev.db";
//   if (!zipPath) {
//     console.error('Usage: ts-node server actions/db/importFromCsvZip.ts <path-to-zip>');
//     process.exit(1);
//   }
//   importFromCsvZip(zipPath).then(() => {
//     console.log('Import complete.');
//   });
// }
