import { useTheme } from 'next-themes';
import { timeToRead } from '../lib/helpers';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="font-black">
      {' '}
      <div>
        {timeToRead('Bu bir testtir.')}
        The current theme is: {theme}
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
    </div>
  );
}
