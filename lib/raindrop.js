export const getBookmarks = async () => {
  const res = await fetch('https://raindrop.io/api/raindrops/0', {
    headers: {
      Authorization: `Bearer ${process.env.RAINDROP_API_KEY}`
    }
  });
  const data = await res.json();
  return data.items;
};
