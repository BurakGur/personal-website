import Document, { Html, Head, Main, NextScript } from 'next/document';

import Header from '../components/Header';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={true}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="container">
          <Header />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
