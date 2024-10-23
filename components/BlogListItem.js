import { timeToRead } from '../lib/helpers';
import 'moment/locale/tr';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { dateToLocaleString } from 'utils/date';

function BlogListItem({ article, ...props }) {
  return (
    <Link href={`/blog/${article.slug}`} {...props}>
      <div className="cursor-pointer">
        <div className="font-serif text-2xl font-medium text-gray-700 dark:text-white">
          <Balancer>{article.title}</Balancer>
        </div>
        <div className="mt-1 flex items-center space-x-3 text-sm text-gray-500">
          <span>{dateToLocaleString(article.date)}</span>
          <span>•</span>
          <span>{timeToRead(article.body.raw)} min read</span>
        </div>
        <div className="mt-2 text-gray-600 dark:text-gray-400">
          {article.description}
        </div>
      </div>
    </Link>
  );
}

export default BlogListItem;
