import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';
import KBar from '../components/KBar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <KBar>
        <Component {...pageProps} />
      </KBar>
    </ThemeProvider>
  );
}

export default MyApp;
