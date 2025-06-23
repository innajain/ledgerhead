'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePreview } from './PreviewContext';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { inPreview, setPreview } = usePreview();

  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow relative">
      <Link href="/" className="text-2xl font-bold tracking-tight hover:text-blue-400 transition-colors">
        LedgerHead
      </Link>
      {/* Hamburger button for mobile */}
      <button
        className="md:hidden flex justify-center items-center w-8 h-8 focus:outline-none"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(m => !m)}
      >
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>
      {/* Desktop menu */}
      <div className="hidden md:flex gap-8 text-lg">
        {inPreview && (
          <button
            className="mr-4 px-2 py-0.5 text-sm bg-yellow-400 text-gray-900 rounded font-semibold hover:bg-yellow-300 transition-colors h-7 min-h-0"
            style={{ lineHeight: '1.1', height: '28px' }}
            onClick={() => setPreview(null)}
          >
            Exit Preview
          </button>
        )}
        <Link
          href="/transactions"
          className={`${pathname?.startsWith('/transactions') ? 'text-blue-400 font-bold' : 'hover:text-blue-400'} transition-colors`}
        >
          Transactions
        </Link>
        <Link
          href="/entities"
          className={`${pathname?.startsWith('/entities') ? 'text-blue-400 font-bold' : 'hover:text-blue-400'} transition-colors`}
        >
          Entities
        </Link>
        <Link
          href="/mutual_funds"
          className={`${pathname?.startsWith('/mutual_funds') ? 'text-blue-400 font-bold' : 'hover:text-blue-400'} transition-colors`}
        >
          Mutual Funds
        </Link>
        <Link href="/history" className={`${pathname?.startsWith('/history') ? 'text-blue-400 font-bold' : 'hover:text-blue-400'} transition-colors`}>
          History
        </Link>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col gap-4 text-lg px-6 py-4 md:hidden z-50 shadow-lg">
          {inPreview && (
            <button
              className="mb-2 px-2 py-1 text-sm bg-yellow-400 text-gray-900 rounded font-semibold hover:bg-yellow-300 transition-colors h-7 min-h-0"
              style={{ lineHeight: '1.1', height: '28px' }}
              onClick={() => { setPreview(null); setMenuOpen(false); }}
            >
              Exit Preview
            </button>
          )}
          <Link
            href="/"
            className={`${pathname === '/' ? 'text-blue-400 font-bold' : 'hover:text-blue-400'} transition-colors`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/transactions"
            className={`${pathname?.startsWith('/transactions') ? 'text-blue-400 font-bold' : 'hover:text-blue-400'} transition-colors`}
            onClick={() => setMenuOpen(false)}
          >
            Transactions
          </Link>
          <Link
            href="/entities"
            className={`${pathname?.startsWith('/entities') ? 'text-blue-400 font-bold' : 'hover:text-blue-400'} transition-colors`}
            onClick={() => setMenuOpen(false)}
          >
            Entities
          </Link>
          <Link
            href="/mutual_funds"
            className={`${pathname?.startsWith('/mutual_funds') ? 'text-blue-400 font-bold' : 'hover:text-blue-400'} transition-colors`}
            onClick={() => setMenuOpen(false)}
          >
            Mutual Funds
          </Link>
          <Link
            href="/history"
            className={`${pathname?.startsWith('/history') ? 'text-blue-400 font-bold' : 'hover:text-blue-400'} transition-colors`}
            onClick={() => setMenuOpen(false)}
          >
            History
          </Link>
        </div>
      )}
    </nav>
  );
}
