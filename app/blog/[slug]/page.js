import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Mdx } from 'components/Mdx';
import Balancer from 'react-wrap-balancer';
import { dateToLocaleString } from '../../../utils/date';
import ViewCounter from 'components/ViewCounter';
import { url } from 'config';

export async function generateStaticParams() {
  return allPosts.map(post => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }) {
  const post = allPosts.find(post => post.slug === params.slug);
  const { title, description, slug } = post;
  const ogImage = `${url}/api/og?title=${title}`;
  return {
    title: title,
    description: description,

    openGraph: {
      title,
      description,
      type: 'article',
      url: `${url}/blog/${slug}`,
      images: [
        {
          url: ogImage
        }
      ]
    }
  };
}

export default async function Blog({ params }) {
  const post = allPosts.find(post => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <h1 className="font-serif text-3xl font-bold">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="mb-6 mt-3 flex justify-between text-sm text-gray-300 dark:text-gray-300">
        <span>{dateToLocaleString(post.date)}</span>
        <ViewCounter slug={post.slug} />
      </div>
      <Mdx code={post.body.code} />
    </section>
  );
}
