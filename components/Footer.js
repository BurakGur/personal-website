'use client';
import { Github, Rss, Superpeer, Twitter } from '../icons';

function Footer() {
  return (
    <footer className="mb-10 mt-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <div
            aria-hidden="true"
            onClick={() => window.open('mailto:gurbrk@gmail.com', '_blank')}
            className="text-sm font-bold bg-gray-500 dark:bg-gray-300 text-white dark:text-gray-900 rounded px-2 py-1 hover:bg-gray-900 dark:hover:bg-gray-200 transition cursor-pointer"
          >
            Eposta
          </div>
          <a
            href="https://github.com/BurakGur/personal-website"
            target="_blank"
            rel="noreferrer"
          >
            <Github
              className="text-gray-500 dark:text-gray-300 dark:hover:text-gray-200 hover:text-gray-900 transition"
              width="32"
              height="32"
            />
          </a>
          <a href="https://twitter.com/BrkGur" target="_blank" rel="noreferrer">
            <Twitter
              className="text-gray-500 dark:text-gray-300 dark:hover:text-gray-200 hover:text-gray-900 transition"
              width="32"
              height="32"
            />
          </a>
          <a href="https://superpeer.com/bg" target="_blank" rel="noreferrer">
            <div className="flex items-center px-1 py-1 bg-gray-500 dark:bg-gray-300 text-white dark:text-gray-900 rounded hover:bg-gray-900 dark:hover:bg-gray-200 transition">
              <Superpeer width="20" height="20" />
            </div>
          </a>
        </div>
        <a href="/rss.xml" target="_blank">
          <div className="flex items-center space-x-2 bg-gray-500 dark:bg-gray-300 text-white dark:text-gray-900 rounded px-2 py-1 hover:bg-gray-900 dark:hover:bg-gray-200 transition">
            <Rss width="14" height="14" />
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
