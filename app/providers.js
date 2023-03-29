'use client';

import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';
import { primaryColor } from 'config';
import { Analytics } from '@vercel/analytics/react';

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class">
      <NextNProgress color={primaryColor} height={2} />
      <Analytics />
      {children}
    </ThemeProvider>
  );
}
