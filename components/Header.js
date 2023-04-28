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
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  const ThemeIcon = resolvedTheme === 'dark' ? Sun : Moon;

  return (
    <header className="my-10">
      <div className="flex flex-row items-center justify-between">
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
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
            type="button"
            className="text-gray-400 transition hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
          >
            <ThemeIcon width="22px" height="22px" />
          </button>
        )}
      </div>
      <LayoutGroup>
        <nav className="fade flex scroll-pr-3 flex-row overflow-auto" id="nav">
          <div className="my-4 flex space-x-3">
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
                      : 'text-gray-400 dark:text-gray-200'
                  )}
                >
                  <span className="relative">
                    {name}
                    {path === pathname ? (
                      <motion.div
                        className="absolute inset-0 z-[-1] border-b-2"
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
