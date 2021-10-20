import { useTheme } from 'next-themes';
import About from '../components/About';
import { timeToRead } from '../lib/helpers';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return <About />;
}
