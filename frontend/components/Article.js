import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import { locale } from '../config';
import 'moment/locale/tr';

const Article = ({ article }) => {
  return (
    <div>
      <div className="text-4xl font-bold text-gray-700 dark:text-gray-100">
        {article.title}
      </div>
      <div className="text-gray-500 mt-2 mb-6 dark:text-gray-300">
        <Moment format="Do MMMM YYYY" locale={locale}>
          {article.published_at}
        </Moment>
      </div>
      <ReactMarkdown className="prose dark:prose-dark" skipHtml={false}>
        {article.content}
      </ReactMarkdown>
    </div>
  );
};

export default Article;
