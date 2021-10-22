import { Feed } from 'feed';
import fs from 'fs';
import { author, url, title, description } from '../config';

const generateRSS = async articles => {
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

  for (const article of articles) {
    feed.addItem({
      title: article.title,
      id: article.url,
      link: article.url,
      description: article.description,
      content: article.content,
      date: new Date(article.published_at)
    });
  }
  fs.writeFileSync('./public/rss.xml', feed.rss2());
};

export default generateRSS;
