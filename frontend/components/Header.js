import Link from 'next/link';
import { title } from '../config';
import { Bars } from '../icons';

function Header() {
  return (
    <header className="flex justify-between items-center my-10">
      <div className="text-3xl font-bold text-indigo-500">
        <Link href="/">{title}</Link>
      </div>
      <button
        type="button"
        className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
      >
        <Bars
          className="transition-colors duration-200"
          width="22"
          height="22"
        />
      </button>
    </header>
  );
}

export default Header;
