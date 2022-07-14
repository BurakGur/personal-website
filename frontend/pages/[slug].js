import Article from '../components/Article';
import DefaultLayout from '../layout/Default';
import { fetchStrapi } from '../lib/api';

const ArticlePage = ({ article }) => {
  const { title, description } = article;
  return (
    <DefaultLayout title={title} description={description}>
      <Article article={article} />
    </DefaultLayout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchStrapi('/articles?_sort=id:ASC');

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
  const articles = await fetchStrapi(`/articles?slug=${params.slug}`);
  return {
    props: { article: articles[0] },
    revalidate: 1
  };
}

export default ArticlePage;
