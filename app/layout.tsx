import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import { LedgerDataProvider } from "./LedgerContext";
import { PreviewProvider } from "./PreviewContext";
import CheckDbHistoryInit from "./CheckDbHistoryInit";
import { getAccounts, getExpenseItems, getIncomeSources, getMutualFunds, getTransactions } from "@/server actions/db";
import React from "react";

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

  const initialData = {
    accounts,
    expenseItems,
    incomeSources,
    mutualFunds,
    transactions
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
