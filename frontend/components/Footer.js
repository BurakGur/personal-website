import Link from 'next/link';
import { Github, Rss, Twitter } from '../icons';

function Footer() {
  return (
    <footer className="my-10">
      <div className="flex justify-between items-center mb-2">
        <div className="group leading-6 font-bold flex items-center space-x-2 text-gray-800 hover:text-gray-500 transition-colors duration-200 py-2">
          <div className="text-sm font-bold bg-gray-800 text-white border-gray-800 rounded px-2 py-1">
            <Link href="/">Eposta</Link>
          </div>
          <Github
            className="transition-colors duration-200"
            width="32"
            height="32"
          />
          <Twitter
            className="transition-colors duration-200"
            width="32"
            height="32"
          />
        </div>
        <div className="text-sm flex items-center font-bold bg-gray-800 space-x-2 text-white border-gray-800 rounded px-2 py-1">
          <Rss width="14" height="14" />
          <span>RSS</span>
        </div>
      </div>
      <a
        href="https://github.com/BurakGur/personal-website"
        className="text-gray-500 text-sm hover:text-gray-800 duration-200"
      >
        Bu web sitesi açık kaynak kodlanmıştır ve kodlarına GitHub üzerinden
        ulaşabilirsiniz.
      </a>
    </footer>
  );
}

export default Footer;
