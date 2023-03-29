import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import ArticleList from '../../components/ArticleList';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.'
};

export default async function BlogPage() {
  return (
    <section>
      {allPosts
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map(post => (
          <ArticleList key={post.id} article={post} />
        ))}
    </section>
  );
}
