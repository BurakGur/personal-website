import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';
import KBar from '../components/KBar';
import NextNProgress from 'nextjs-progressbar';
import { primaryColor } from '../config';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <KBar>
        <NextNProgress color={primaryColor} height={2} />
        <Component {...pageProps} />
      </KBar>
    </ThemeProvider>
  );
}

export default MyApp;