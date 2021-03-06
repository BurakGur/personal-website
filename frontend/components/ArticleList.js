import { timeToRead } from '../lib/helpers';
import Moment from 'react-moment';
import { locale } from '../config';
import 'moment/locale/tr';
import Link from 'next/link';

function ArticleList({ articles }) {
  return (
    <div className="space-y-8 mt-8">
      {articles.map(article => (
        <Link href={`/${article.slug}`} key={article.id}>
          <div className="cursor-pointer">
            <div className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-100">
              {article.title}
            </div>
            <div className="flex items-center text-sm space-x-3 text-gray-500 mt-1 dark:text-gray-300">
              <Moment format="Do MMMM YYYY" locale={locale}>
                {article.published_at}
              </Moment>
              <span>•</span>
              <span>{timeToRead(article.content)} dakikalık okuma</span>
            </div>
            <div className="text-base md:text-lg mt-2 text-gray-600 dark:text-gray-200">
              {article.description}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ArticleList;
