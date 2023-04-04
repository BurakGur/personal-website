'use client';

import useSWR from 'swr';
import { motion } from 'framer-motion';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const ViewsBox = ({ views }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      {views.toLocaleString()} görüntülenme
    </motion.span>
  );
};

export default function ViewCounter({ slug }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  return views > 0 ? <ViewsBox views={views} /> : null;
}
