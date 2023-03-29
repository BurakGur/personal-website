import Document, { Html, Head, Main, NextScript } from 'next/document';
import { locale, gtmId } from '../config';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={locale}>
        <Head>
          <link href="/favicon.ico" rel="shortcut icon" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtmId}', { page_path: window.location.pathname });
            `
            }}
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#DB2777" />
        </Head>
        <body className="container bg-gray-50 dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
