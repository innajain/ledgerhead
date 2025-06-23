'use server'

// Returns the absolute path to the SQLite DB file
export function getDbFilePath() {
  return process.cwd() + '/prisma/prod.db';
}
