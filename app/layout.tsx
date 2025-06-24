import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import { LedgerDataProvider } from "./LedgerContext";
import { PreviewProvider } from "./PreviewContext";
import CheckDbHistoryInit from "./CheckDbHistoryInit";
import { getAccounts, getExpenseItems, getIncomeSources, getMutualFunds, getTransactions } from "@/server actions/db";
import { getNAVFromISIN } from "@/server actions/getNAVFromISIN";
import { getPortfolioChartData } from '@/server actions/getPortfolioChartData';
import React from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "LedgerHead",
  description: "Personal accounting and investment dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch all data on the server
  const [accounts, expenseItems, incomeSources, mutualFunds, transactions] = await Promise.all([
    getAccounts(),
    getExpenseItems(), 
    getIncomeSources(),
    getMutualFunds(),
    getTransactions()
  ]);

  // Fetch NAVs for all mutual funds (by ISIN)
  const navs: Record<string, { nav: string; date: string } | null> = {};
  await Promise.all(
    mutualFunds.map(async (mf) => {
      if (mf.isin) {
        navs[mf.id] = await getNAVFromISIN(mf.isin);
      }
    })
  );

  const chartData = await getPortfolioChartData();

  const initialData = {
    accounts,
    expenseItems,
    incomeSources,
    mutualFunds,
    transactions,
    navs, // pass navs as part of initialData
    chartData
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <CheckDbHistoryInit>
          <PreviewProvider>
            <LedgerDataProvider initialData={initialData}>
              <Navbar />
              <main>{children}</main>
            </LedgerDataProvider>
          </PreviewProvider>
        </CheckDbHistoryInit>
      </body>
    </html>
  );
}
