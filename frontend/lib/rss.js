import { Feed } from 'feed';
import fs from 'node:fs/promises';
import { author, url, title, description } from '../config';

const generateRSS = async blogs => {
  const feed = new Feed({
    title: `${title} - RSS Feed`,
    description: description,
    id: url,
    link: url,
    language: 'tr',
    favicon: `${url}/favicon.ico`,
    generator: 'Next.js',
    author: author
  });

  for (const post of blogs) {
    feed.addItem({
      title: post.title,
      id: post.url,
      link: post.url,
      description: post.description,
      content: post.content,
      date: new Date(post.published_at)
    });
  }
  fs.writeFileSync('./public/rss.xml', feed.rss2());
};

export default generateRSS;
