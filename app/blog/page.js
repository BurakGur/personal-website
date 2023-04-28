import { allPosts } from 'contentlayer/generated';
import BlogListItem from 'components/BlogListItem';

export const metadata = {
  title: 'blog'
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
          <BlogListItem key={post.id} article={post} className="mb-8 flex" />
        ))}
    </section>
  );
}
