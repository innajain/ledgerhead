'use client';

import { snapshot } from '@/server actions/db';
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface PreviewContextType {
  preview: snapshot | null;
  setPreview: (snapshot: snapshot | null) => void;
  inPreview: boolean;
}

const PreviewContext = createContext<PreviewContextType | undefined>(undefined);

export function usePreview() {
  const ctx = useContext(PreviewContext);
  if (!ctx) throw new Error('usePreview must be used within a PreviewProvider');
  return ctx;
}

export function PreviewProvider({ children }: { children: ReactNode }) {
  const [preview, setPreview] = useState<snapshot | null>(null);
  const inPreview = preview !== null;
  return <PreviewContext.Provider value={{ preview, setPreview, inPreview }}>{children}</PreviewContext.Provider>;
}
