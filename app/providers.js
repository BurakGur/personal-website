'use client';

import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';
import { primaryColor } from 'config';

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class">
      <NextNProgress color={primaryColor} height={2} />
      {children}
    </ThemeProvider>
  );
}
