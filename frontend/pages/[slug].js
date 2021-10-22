import Article from '../components/Article';
import { fetchAPI } from '../lib/api';

const ArticlePage = ({ article }) => {
  return <Article article={article} />;
};

export async function getStaticPaths() {
  const articles = await fetchAPI('/articles');

  return {
    paths: articles.map(article => ({
      params: {
        slug: article.slug
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`);
  return {
    props: { article: articles[0] },
    revalidate: 1
  };
}

export default ArticlePage;
