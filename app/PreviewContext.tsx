'use client';

import { Snapshot } from '@/server actions/db';
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface PreviewContextType {
  preview: Snapshot | null;
  setPreview: (snapshot: Snapshot | null) => void;
  inPreview: boolean;
}

const PreviewContext = createContext<PreviewContextType | undefined>(undefined);

export function usePreview() {
  const ctx = useContext(PreviewContext);
  if (!ctx) throw new Error('usePreview must be used within a PreviewProvider');
  return ctx;
}

export function PreviewProvider({ children }: { children: ReactNode }) {
  const [preview, setPreview] = useState<Snapshot | null>(null);
  const inPreview = preview !== null;
  return <PreviewContext.Provider value={{ preview, setPreview, inPreview }}>{children}</PreviewContext.Provider>;
}
