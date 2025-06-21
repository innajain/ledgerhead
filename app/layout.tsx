import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import { LedgerDataProvider } from "./LedgerContext";
import { PreviewProvider } from "./PreviewContext";
import CheckDbHistoryInit from "./CheckDbHistoryInit";
import React from "react";

export const metadata: Metadata = {
  title: "LedgerHead",
  description: "Personal accounting and investment dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CheckDbHistoryInit>
          <PreviewProvider>
            <LedgerDataProvider>
              <Navbar />
              <main>{children}</main>
            </LedgerDataProvider>
          </PreviewProvider>
        </CheckDbHistoryInit>
      </body>
    </html>
  );
}
