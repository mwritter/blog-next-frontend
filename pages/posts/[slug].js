import Hero from "../../components/Home/Hero";
import PostListItem from "../../components/Post/PostListItem";
import StrapiClient from "../../lib/strapi-client";
export default function PostPage({ post }) {
  return (
    <>
    <div className="bg-gray-100 mb-20 p-5">
      <Hero>
        {/* Not sure about this I think we should do an image */}
        <div className="h-96 border w-full text-center">
          [some image or video]
        </div>
      </Hero>

    </div>
      
      <div className="bg-white max-w-7xl mx-auto p-11 flex-1">
        <p>{post.content}</p>
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
  const [post] = await client.getPost(slug);
  return {
    props: { post },
  };
};
