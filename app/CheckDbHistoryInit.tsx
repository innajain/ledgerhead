import { ensureDbHistoryInit } from '@/server actions/db/ensureDbHistoryInit';

export default async function CheckDbHistoryInit({ children }: { children: React.ReactNode }) {
  await ensureDbHistoryInit();
  return <>{children}</>;
}
