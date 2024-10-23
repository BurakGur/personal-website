import React from 'react';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Providers } from './providers';
import { Inter, Lora } from 'next/font/google';
import { description, title, locale, url, metaImage } from 'config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap'
});

export const metadata = {
  metadataBase: new URL('/', url).toString(),
  title: {
    default: title,
    template: '%s | ' + title
  },
  description: description,
  openGraph: {
    type: 'website',
    locale: locale,
    url: url,
    siteName: title,
    images: [
      {
        url: metaImage,
        width: 1820,
        height: 904
      }
    ],
    description,
    title
  },
  twitter: {
    card: 'summary_large_image',
    description,
    image: metaImage,
    title
  },
  icons: {
    shortcut: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      className={`${inter.variable} ${lora.variable}`}
      lang={locale}
    >
      <body className="container bg-white dark:bg-[#171717]">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
