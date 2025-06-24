'use server';

import axios from 'axios';

const cache: [
  { isin: string; startDate: Date },
  (
    | {
        date: Date;
        nav: number;
      }[]
    | null
  )
][] = [];
export async function getHistoricalNav({ isin, startDate }: { isin: string; startDate: Date }) {
  const found = cache.find(item => item[0].isin === isin && item[0].startDate.getTime() <= startDate.getTime());
  if (found !== undefined) {
    return found[1];
  }

  const url = 'https://www.amfiindia.com/spages/NAVAll.txt';

  const response = await axios.get(url);
  const data = response.data as string;

  const lines = data.split('\n');
  for (const line of lines) {
    if (line.includes(isin)) {
      const parts = line.split(';');
      const schemeCode = parts[0];
      const mf_data = await axios.get(`https://api.mfapi.in/mf/${schemeCode}`);
      const historical_data: { date: string; nav: string }[] = mf_data.data.data;
      const parsed_data = historical_data.map(item => ({
        date: new Date(`${item.date.split('-')[2]}-${item.date.split('-')[1]}-${item.date.split('-')[0]}`),
        nav: parseFloat(item.nav),
      }));
      const filtered_data = parsed_data.filter(item => item.date >= startDate);
      cache.push([{ isin, startDate }, filtered_data]);
      return filtered_data;
    }
  }
  cache.push([{ isin, startDate }, null]);
  return null;
}
