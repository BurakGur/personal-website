import { Feed } from 'feed';
import fs from 'node:fs/promises';

const generateRSS = async blogs => {
  const feed = new Feed({
    title: "Burak Gür'ün Kişisel Blogu - RSS Feed",
    description:
      "Burak Gür'ün Kişisel Blog Feed'idir. Yazılımla ve kitaplarla ilgilidir.",
    id: 'https://burakgur.com/',
    link: 'https://burakgur.com/',
    language: 'tr',
    favicon: 'https://burakgur.com/favicon.ico',
    generator: 'Next.js',
    author: {
      name: 'Burak Gür',
      email: 'gurbrk@gmail.com'
    }
  });

  for (const post of blogs) {
    feed.addItem({
      title: post.title,
      id: post.url,
      link: post.url,
      description: post.description,
      content: post.content,
      date: new Date(post.created_at)
    });
  }
  fs.writeFileSync('./public/rss.xml', feed.rss2());
};

export default generateRSS;
