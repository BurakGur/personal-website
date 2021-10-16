import Link from 'next/link';
import { Bars } from '../icons';

function Header() {
  return (
    <header className="flex justify-between items-center my-10">
      <div className="text-3xl font-bold text-indigo-500">
        <Link href="/">burak gür.</Link>
      </div>
      <button
        type="button"
        className="group leading-6 font-bold flex items-center space-x-3 text-gray-400 hover:text-gray-500 transition-colors duration-200 py-2"
      >
        <Bars
          className="transition-colors duration-200"
          width="22"
          height="22"
        />
        <span className="duration-200 text-xs leading-5 py-0.5 px-1.5 border border-gray-400 rounded">
          <kbd className="font-sans">CMD + K</kbd>
        </span>
      </button>
    </header>
  );
}

export default Header;
