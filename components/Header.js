'use client';

import Link from 'next/link';
import { title } from '../config';
import { Bars } from '../icons';
import { useKBar } from 'kbar';
import { motion } from 'framer-motion';

function Header() {
  const { query } = useKBar();

  return (
    <header className="flex justify-between items-center my-10">
      <motion.div
        className="text-3xl font-bold text-pink-600"
        animate={{
          opacity: [0, 1],
          x: [-20, 0]
        }}
      >
        <Link href="/">{title}</Link>
      </motion.div>
      <button
        onClick={() => query.toggle()}
        type="button"
        className="text-gray-500 dark:text-gray-300 dark:hover:text-gray-200 hover:text-gray-900 transition"
      >
        <Bars width="22" height="22" />
      </button>
    </header>
  );
}

export default Header;
