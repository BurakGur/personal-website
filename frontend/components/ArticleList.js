import { timeToRead } from '../lib/helpers';
import Moment from 'react-moment';

function ArticleList({ articles }) {
  return (
    <>
      {articles.map(article => (
        <div className="my-6" key={article.id}>
          <div className="text-2xl font-bold text-gray-700">
            {article.title}
          </div>
          <div className="text-sm">
            <Moment format="DD/MM/YYYY">{article.published_at}</Moment> •
            {timeToRead(article.content)} dakikalık okuma
          </div>
          <div className="text-lg">{article.description}</div>
        </div>
      ))}
    </>
  );
}

export default ArticleList;
