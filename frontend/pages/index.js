import About from '../components/About';
import ArticleList from '../components/ArticleList';
import { fetchAPI } from '../lib/api';
import generateRSS from '../lib/rss';

export default function Home({ articles }) {
  return (
    <>
      <About />
      <ArticleList articles={articles} />
    </>
  );
}

export async function getStaticProps() {
  const articles = await fetchAPI('/articles');
  await generateRSS(articles);
  return {
    props: { articles },
    revalidate: 1
  };
}
