import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Mdx } from '../../../components/Mdx';
import Balancer from 'react-wrap-balancer';
import { dateToLocaleString } from '../../../utils/date';

export async function generateStaticParams() {
  return allPosts.map(post => ({
    slug: post.slug
  }));
}

export const metadata = {};

export default async function Blog({ params }) {
  const post = allPosts.find(post => post.slug === params.slug);

  metadata.title = post.title;
  metadata.description = post.description;

  if (!post) {
    notFound();
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif max-w-[650px]">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-4 font-mono text-sm max-w-[650px]">
        <div className="flex items-center text-sm text-gray-500 mt-1 dark:text-gray-300 mb-4">
          {dateToLocaleString(post.date)}
        </div>
        <Mdx code={post.body.code} />
      </div>
    </section>
  );
}
