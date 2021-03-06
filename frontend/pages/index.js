import About from '../components/About';
import ArticleList from '../components/ArticleList';
import { fetchStrapi } from '../lib/api';
import generateRSS from '../lib/rss';
import DefaultLayout from '../layout/Default';
import { description, title } from '../config';

export default function Home({ articles }) {
  return (
    <DefaultLayout title={title} description={description}>
      <About />
      <ArticleList articles={articles} />
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const getArticles = await fetchStrapi('/articles?_sort=id:ASC');
  const articles = getArticles.reverse();
  await generateRSS(articles);
  return {
    props: { articles },
    revalidate: 1
  };
}
