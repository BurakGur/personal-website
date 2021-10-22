import About from '../components/About';
import ArticleList from '../components/ArticleList';
import { fetchAPI } from '../lib/api';

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
  return {
    props: { articles },
    revalidate: 1
  };
}
