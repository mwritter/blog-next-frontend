import Head from "next/head";
import Hero from "../components/Home/Hero";
import PostList from "../components/Post/PostList";
import StrapiClient from "../lib/strapi-client";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="" />
      </Head>
      <Hero />
      <PostList title="Latest Posts" posts={posts} />
    </div>
  );
}

/**
 * Node js
 */
const client = new StrapiClient();

/**
 * @method getStaticProps
 * @description get all the post from the db to display list of post previews
 * @returns {object} with posts[] property
 */
export const getStaticProps = async () => {
  const posts = await client.getPosts();
  return { props: { posts } };
};
