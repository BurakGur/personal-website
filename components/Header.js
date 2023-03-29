'use client';

import Link from 'next/link';
import { title } from '../config';
import { Sun, Moon } from 'icons';
import { LayoutGroup, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useMounted } from 'utils/hooks';
import { navItems } from 'utils/constants';

function Header() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  const ThemeIcon = theme === 'dark' ? Sun : Moon;

  return (
    <header className="my-10">
      <div className="flex flex-row justify-between items-center">
        <motion.div
          className="text-3xl font-bold text-pink-600"
          animate={{
            opacity: [0, 1],
            x: [-20, 0]
          }}
        >
          <Link href="/">{title}</Link>
        </motion.div>

        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            type="button"
            className="text-gray-500 dark:text-gray-200 dark:hover:text-gray-100 hover:text-gray-900 transition"
          >
            <ThemeIcon width="22px" height="22px" />
          </button>
        )}
      </div>
      <LayoutGroup>
        <nav className="flex flex-row fade overflow-auto scroll-pr-3" id="nav">
          <div className="flex space-x-3 my-4">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;
              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    'transition-all hover:text-gray-900 dark:hover:text-gray-100 ',
                    isActive
                      ? 'text-gray-900 dark:text-gray-0'
                      : 'text-gray-500 dark:text-gray-200'
                  )}
                >
                  <span className="relative">
                    {name}
                    {path === pathname ? (
                      <motion.div
                        className="absolute border-b-2 inset-0 z-[-1]"
                        layoutId="menu"
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 30
                        }}
                      />
                    ) : null}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </LayoutGroup>
    </header>
  );
}

export default Header;
