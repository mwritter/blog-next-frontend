import Head from "next/head";
import Hero from "../components/Hero";
import Image from "next/image";
import PostList from "../components/Post/PostList";
import StrapiClient from "../lib/strapi-client";

export default function Home({ posts, assets }) {
  const [headerMedia] = assets.find((asset) => asset.label == "header").media;
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="" />
      </Head>
      <Hero>
        <div className="bg-gray-100">
          <div className="grid md:grid-cols-2 items-center max-w-7xl mx-auto p-4 gap-4">
            <div className="md:w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
            <div className="justify-self-center">
              <Image
                src={headerMedia.url}
                alt={"header image"}
                width={headerMedia.width}
                height={headerMedia.height}
              />
            </div>
          </div>
        </div>
      </Hero>
      <PostList title="Articles" posts={posts} />
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
  const assets = await client.getAssets();
  return { props: { posts, assets } };
};
