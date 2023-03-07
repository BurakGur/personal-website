export function getStrapiURL(path = '') {
  const strapiPublishUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  return `${strapiPublishUrl || 'http://localhost:1337'}${path}`;
}

export async function fetchStrapi(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  return await response.json();
}

export default async function fetchApi(input, init) {
  const res = await fetch(input, init);
  return res.json();
}
