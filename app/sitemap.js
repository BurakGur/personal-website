import { allPosts } from 'contentlayer/generated';
import { url } from 'config';
import { navItems } from 'utils/constants';

export default async function sitemap() {
  const posts = allPosts.map(post => ({
    url: `${url}/blog/${post.slug}`,
    lastModified: post.date.split('T')[0]
  }));

  const pages = Object.keys(navItems).map(page => ({
    url: `${url}${page}`,
    lastModified: new Date().toISOString().split('T')[0]
  }));

  return [...pages, ...posts];
}
