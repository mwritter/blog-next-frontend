import StrapiClient from "./strapi-client";
const client = new StrapiClient();
export function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith("/")
    ? client.fetchData(media.url)
    : media.url;
  return imageUrl;
}