import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const dbPath = path.join(process.cwd(), 'prisma', 'prod.db');
  if (!fs.existsSync(dbPath)) {
    res.status(404).send('DB file not found');
    return;
  }
  const stat = fs.statSync(dbPath);
  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Disposition', 'attachment; filename="prod.db"');
  const fileStream = fs.createReadStream(dbPath);
  fileStream.pipe(res);
}
