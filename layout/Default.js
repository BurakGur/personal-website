import Footer from '../components/Footer';
import Header from '../components/Header';
import PlayingSong from '../components/PlayingSong';
import SEO from '../components/SEO';

export default function DefaultLayout(props) {
  return (
    <>
      <SEO {...props} />
      <Header />
      {props.children}
      <PlayingSong />
      <Footer />
    </>
  );
}
