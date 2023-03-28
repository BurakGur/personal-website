import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';
import { primaryColor } from '../config';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <NextNProgress color={primaryColor} height={2} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
