import { timeToRead } from '../lib/helpers';

function ArticleList({ articles }) {
  return (
    <>
      {articles.map(article => (
        <div className="my-6" key={article.id}>
          <div className="text-2xl">{article.title}</div>
          <div className="text-sm">
            {article.published_at} • {timeToRead(article.content)} dakikalık
            okuma
          </div>
          <div className="text-lg">{article.description}</div>
        </div>
      ))}
    </>
  );
}

export default ArticleList;
