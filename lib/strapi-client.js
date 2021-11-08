export default class StrapiClient {
  constructor() {}

  async getPosts() {
    return await this.fetchData("/posts");
  }

  async getPost(slug) {
    const [data] = await this.fetchData(`/posts?slug=${slug}`);
    return data;
  }

  async fetchData(path) {
    const requestURL = `${process.env.STRAPI_API_URL}${path}`;
    const response = await fetch(requestURL);
    const data = await response.json();
    return data;
  }
}
