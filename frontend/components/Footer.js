import Link from 'next/link';
import { Github, Rss, Twitter } from '../icons';

function Footer() {
  return (
    <footer className="my-10">
      <div className="flex justify-between items-center mb-2">
        <div className="leading-6 font-bold flex items-center space-x-2 text-gray-800 hover:text-gray-500 transition-colors duration-200 py-2">
          <div className="text-sm font-bold bg-gray-800 text-white border-gray-800 rounded px-2 py-1">
            <Link href="/">Eposta</Link>
          </div>
          <a
            href="https://github.com/BurakGur/personal-website"
            target="_blank"
            rel="noreferrer"
          >
            <Github
              className="transition-colors duration-200"
              width="32"
              height="32"
            />
          </a>
          <a href="https://twitter.com/BrkGur" target="_blank" rel="noreferrer">
            <Twitter
              className="transition-colors duration-200"
              width="32"
              height="32"
            />
          </a>
        </div>
        <a href="/rss.xml" target="_blank">
          <div className="flex items-center bg-gray-700 hover:bg-gray-800 space-x-2 text-white transition-colors duration-200 border-gray-800 rounded px-2 py-1">
            <Rss
              width="14"
              height="14"
              className="transition-colors duration-200"
            />
            <span className="text-sm font-bold">RSS</span>
          </div>
        </a>
      </div>
      <a
        href="https://github.com/BurakGur/personal-website"
        target="_blank"
        rel="noreferrer"
        className="text-gray-500 text-sm hover:text-gray-800 duration-200 dark:text-gray-300"
      >
        Bu web sitesi açık kaynak kodlanmıştır ve kodlarına GitHub üzerinden
        ulaşabilirsiniz.
      </a>
    </footer>
  );
}

export default Footer;
