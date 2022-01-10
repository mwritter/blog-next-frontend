import Hero from "../../components/Hero";
import StrapiClient from "../../lib/strapi-client";
import Markdown from "../../components/Markdown";
export default function PostPage({ post }) {
  return (
    <>
      <Hero>
        <div className="p-5 bg-gray-100 flex justify-center text-gray-800">
          <div>
            <h1 className="text-3xl font-semibold">{post.title}</h1>
            <p className="font-semibold text-sm text-gray-400">{post.date}</p>
          </div>
        </div>
      </Hero>
      <div className="bg-white max-w-5xl mx-auto p-11 flex-1 text-gray-800">
        <Markdown post={post} />
      </div>
    </>
  );
}

/**
 * Node js
 */
const client = new StrapiClient();

/**
 * @method getStaticPaths
 * @description get all the post dynamic paths
 * @returns {object} with paths[] property
 */
export const getStaticPaths = async () => {
  const posts = await client.getPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

/**
 * @method getStaticProps
 * @description get all the post from the db to display list of post previews
 * @returns {object} with post property
 */
export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const post = await client.getPost(slug);
  return {
    props: { post },
  };
};
