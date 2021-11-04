import Head from 'next/head'
import Hero from '../components/Home/Hero';
import PostList from '../components/Post/PostList'
import StrapiClient from '../lib/strapi-client'

export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="" />
      </Head>
      <Hero />
      <PostList title="Latest Posts" posts={posts}/>
    </div>
  )
}

/**
 * get all the post to display list of post previews
 */
const client = new StrapiClient();
export const getStaticProps = async () => {
  const posts = await client.getPosts();
  return { props: { posts } }
}
