import { useRouter } from 'next/router';
import Head from 'next/head';
import { url, metaImage } from '../config';

function SEO({ title, description }) {
  const router = useRouter();
  const metaUrl = url + router.asPath;
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {/* Open Graphs */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImage} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metaUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={metaImage} />
      <meta property="twitter:site" content="@brkgur" />
      <meta name="robots" content="follow, index" />
      <link rel="canonical" href={metaUrl} />
    </Head>
  );
}

export default SEO;
