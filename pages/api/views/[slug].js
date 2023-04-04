import redis from 'lib/redis';
export default async function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({ error: 'Missing slug' });
  }

  const views = await redis.get(`views:${slug}`);

  const total = views ? parseInt(views) + 1 : 1;
  await redis.set(`views:${slug}`, total);

  res.status(200).json({ total });
}
