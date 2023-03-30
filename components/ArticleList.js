'use client';

import { timeToRead } from '../lib/helpers';
import { locale } from '../config';
import 'moment/locale/tr';
import Link from 'next/link';
import Moment from 'react-moment';
import Balancer from 'react-wrap-balancer';

function ArticleList({ article }) {
  console.log('article: ', article);
  return (
    <Link href={`/blog/${article.slug}`}>
      <div className="cursor-pointer">
        <div className="text-2xl md:text-2xl font-bold text-gray-700 dark:text-gray-100 font-serif">
          <Balancer>{article.title}</Balancer>
        </div>
        <div className="flex items-center text-sm space-x-3 text-gray-500 mt-1 dark:text-gray-300">
          <Moment format="Do MMMM YYYY" locale={locale}>
            {new Date()}
          </Moment>
          <span>•</span>
          <span>{timeToRead(article.body.raw)} dakikalık okuma</span>
        </div>
        <div className="mt-2 text-gray-600 dark:text-gray-200">
          {article.description}
        </div>
      </div>
    </Link>
  );
}

export default ArticleList;
