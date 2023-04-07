import { url } from 'config';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*'
      }
    ],
    sitemap: `${url}/sitemap.xml`,
    host: url
  };
}
