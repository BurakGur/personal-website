import Link from 'next/link';
import { title } from '../config';
import { Bars } from '../icons';
import { useKBar } from 'kbar';

function Header() {
  const { query } = useKBar();

  return (
    <header className="flex justify-between items-center my-10">
      <div className="text-3xl font-bold text-pink-600">
        <Link href="/">{title}</Link>
      </div>
      <button
        onClick={query.toggle}
        type="button"
        className="text-gray-500 dark:text-gray-300 dark:hover:text-gray-200 hover:text-gray-900 transition"
      >
        <Bars width="22" height="22" />
      </button>
    </header>
  );
}

export default Header;
