'use client';
import { Github, Rss, Superpeer, Twitter } from '../icons';

function Footer() {
  return (
    <footer className="mb-10 mt-4">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div
            aria-hidden="true"
            onClick={() => window.open('mailto:gurbrk@gmail.com', '_blank')}
            className="cursor-pointer rounded bg-gray-500 px-2 py-1 text-sm font-bold text-white transition hover:bg-gray-900 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Eposta
          </div>
          <a
            href="https://github.com/BurakGur/personal-website"
            target="_blank"
            rel="noreferrer"
          >
            <Github
              className="text-gray-500 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200"
              width="32"
              height="32"
            />
          </a>
          <a href="https://twitter.com/gurbrk" target="_blank" rel="noreferrer">
            <Twitter
              className="text-gray-500 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200"
              width="32"
              height="32"
            />
          </a>
          <a href="https://superpeer.com/bg" target="_blank" rel="noreferrer">
            <div className="flex items-center rounded bg-gray-500 px-1 py-1 text-white transition hover:bg-gray-900 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-200">
              <Superpeer width="20" height="20" />
            </div>
          </a>
        </div>
        <a href="/rss.xml" target="_blank">
          <div className="flex items-center space-x-2 rounded bg-gray-500 px-2 py-1 text-white transition hover:bg-gray-900 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-200">
            <Rss width="14" height="14" />
            <span className="text-sm font-bold">RSS</span>
          </div>
        </a>
      </div>
      <a
        href="https://github.com/BurakGur/personal-website"
        target="_blank"
        rel="noreferrer"
        className="text-sm text-gray-500 duration-200 hover:text-gray-800 dark:text-gray-300"
      >
        Bu web sitesi açık kaynak kodlanmıştır ve kodlarına GitHub üzerinden
        ulaşabilirsiniz.
      </a>
    </footer>
  );
}

export default Footer;
