import { getMutualFunds } from '@/server actions/db/entities/mutual_fund';
import { getHistoricalNav } from '@/server actions/getHistoricalNav';

export type PortfolioChartPoint = { date: string; portfolioValue: number; investedValue: number };

export async function getPortfolioChartData() {
  const mutualFunds = await getMutualFunds();
  // For each MF, get first investment date and ISIN
  const mfInfos = mutualFunds
    .filter(mf => mf.units_lots.length > 0)
    .map(mf => {
      const firstLot = mf.units_lots.reduce((min, lot) =>
        lot.investment_transaction && lot.investment_transaction.allotment_date < min.investment_transaction!.allotment_date ? lot : min
      );
      return {
        id: mf.id,
        isin: mf.isin,
        firstDate: firstLot.investment_transaction!.allotment_date,
        lots: mf.units_lots,
      };
    });
  // Fetch historical NAVs for each MF
  const navsByMf: Record<string, { date: Date; nav: number }[]> = {};
  for (const mf of mfInfos) {
    const navs = await getHistoricalNav({ isin: mf.isin, startDate: mf.firstDate });
    navsByMf[mf.id] = navs || [];
  }
  // Build all dates up to today
  const allDatesSet = new Set<string>();
  Object.values(navsByMf).forEach(navs => navs.forEach(n => allDatesSet.add(n.date.toISOString().slice(0, 10))));
  const today = new Date();
  const lastDate = new Date(Math.max(...Object.values(navsByMf).flat().map(n => n.date.getTime())));
  let d = new Date(lastDate);
  d.setHours(0, 0, 0, 0);
  while (d < today) {
    d.setDate(d.getDate() + 1);
    allDatesSet.add(d.toISOString().slice(0, 10));
  }
  allDatesSet.add(today.toISOString().slice(0, 10));
  const allDates = Array.from(allDatesSet).sort();
  // Calculate values for each date
  const chartData: PortfolioChartPoint[] = [];
  for (const dateStr of allDates) {
    const date = new Date(dateStr);
    let totalValue = 0;
    let totalInvested = 0;
    for (const mf of mfInfos) {
      const mfNavs = navsByMf[mf.id];
      let navObj = mfNavs.find(n => n.date.toISOString().slice(0, 10) === dateStr);
      if (!navObj) {
        navObj = [...mfNavs].find(n => n.date <= date);
        if (!navObj && mfNavs.length > 0) navObj = mfNavs[mfNavs.length - 1];
      }
      if (!navObj) continue;
      let units = 0;
      let invested = 0;
      for (const lot of mf.lots) {
        if (lot.investment_transaction && lot.investment_transaction.allotment_date <= date) {
          const unitsBought = lot.investment_transaction.units_bought;
          const unitsRedeemed = lot.redemption_buckets.reduce((sum, b) =>
            b.redemption_transaction.transaction.date <= date ? sum + b.units_redeemed : sum, 0);
          const unitsHeld = unitsBought - unitsRedeemed;
          units += unitsHeld;
          invested += unitsHeld * lot.investment_transaction.buy_nav;
        }
      }
      totalValue += units * navObj.nav;
      totalInvested += invested;
    }
    chartData.push({ date: dateStr, portfolioValue: totalValue, investedValue: totalInvested });
  }
  return chartData;
}
