import ReactMarkdown from "react-markdown";
import StrapiClient from "../../lib/strapi-client";
export default function PostPage({ post }) {
  return (
    <>
      {/* Add Hero section here */}
      <div className="bg-white max-w-5xl mx-auto p-11 flex-1">
        <ReactMarkdown>{post.content}</ReactMarkdown>
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
