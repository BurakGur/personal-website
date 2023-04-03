import { timeToRead } from '../lib/helpers';
import 'moment/locale/tr';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { dateToLocaleString } from 'utils/date';

function BlogListItem({ article, ...props }) {
  return (
    <Link href={`/blog/${article.slug}`} {...props}>
      <div className="cursor-pointer">
        <div className="text-2xl font-medium text-gray-700 dark:text-gray-100 font-serif">
          <Balancer>{article.title}</Balancer>
        </div>
        <div className="flex items-center text-sm space-x-3 text-gray-500 mt-1 dark:text-gray-300">
          <span>{dateToLocaleString(article.date)}</span>
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

export default BlogListItem;
