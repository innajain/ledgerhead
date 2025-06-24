"use client";

import React, { useEffect, useState } from 'react';

let Line: any = null;

export type PortfolioChartPoint = { date: string; portfolioValue: number; investedValue: number };

export function PortfolioValueChart({ chartData }: { chartData: PortfolioChartPoint[] }) {
  const [chartReady, setChartReady] = useState(false);

  useEffect(() => {
    (async () => {
      if (!Line) {
        const ChartJS = await import('chart.js/auto');
        const { Filler } = await import('chart.js');
        const zoomPlugin = (await import('chartjs-plugin-zoom')).default;
        ChartJS.Chart.register(Filler, zoomPlugin);
        Line = (await import('react-chartjs-2')).Line;
      }
      setChartReady(true);
    })();
  }, []);

  if (!chartReady) return <div>Loading chart…</div>;
  if (!chartData || chartData.length === 0) return <div>No portfolio data to display.</div>;

  return (
    <div className="w-full max-w-3xl bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Portfolio Value Over Time</h2>
      <Line
        data={{
          labels: chartData.map(d => new Date(d.date).toLocaleDateString('en-GB')),
          datasets: [
            {
              label: 'Portfolio Value',
              data: chartData.map(d => d.portfolioValue),
              borderColor: 'rgba(54, 162, 235, 1)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              fill: {
                target: '1',
                above: 'rgba(54, 162, 235, 0.2)',
                below: 'rgba(255, 99, 132, 0.2)',
              },
              pointRadius: 0,
            },
            {
              label: 'Amount Invested',
              data: chartData.map(d => d.investedValue),
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              fill: {
                target: 'origin',
                above: 'rgba(255, 99, 132, 0.2)',
              },
              borderDash: [5, 5],
              pointRadius: 0,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: { display: false },
            zoom: {
              pan: {
                enabled: true,
                mode: 'x',
              },
              zoom: {
                wheel: { enabled: true },
                pinch: { enabled: true },
                mode: 'x',
                drag: { enabled: true },
              },
              limits: {
                x: { minRange: 3 },
              },
            },
            tooltip: {
              enabled: true,
              mode: 'index',
              intersect: false,
            },
          },
          hover: {
            mode: 'index',
            intersect: false,
          },
          scales: {
            x: { display: false },
            y: { display: false },
          },
        }}
      />
    </div>
  );
}
