export default class StrapiClient {
    constructor() {}

    async getPosts() {
        return await this.fetchData('/posts')
    }

    async fetchData(path) {
        const requestURL = `${process.env.STRAPI_API_URL}${path}`
        console.log(requestURL);
        const response = await fetch(requestURL)
        const data = await response.json()
        return data
    }
}