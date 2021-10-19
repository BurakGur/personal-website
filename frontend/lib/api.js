export function getStrapiURL(path = '') {
  const strapiPublishUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  return `${strapiPublishUrl || 'http://localhost:1337'}${path}`;
}

export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  return await response.json();
}
