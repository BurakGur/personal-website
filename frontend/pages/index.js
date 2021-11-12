import About from '../components/About';
import ArticleList from '../components/ArticleList';
import { fetchAPI } from '../lib/api';
import generateRSS from '../lib/rss';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home({ articles }) {
  return (
    <>
      <Header />
      <About />
      <ArticleList articles={articles} />
      <Footer />
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
