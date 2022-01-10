import Link from "next/link";
export default function PostListItem({ post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="rounded-lg border-2 hover:border-8 hover:shadow-lg hover:border-gray-500 flex flex-col space-y-3 shadow-md p-10 bg-white cursor-pointer transition duration-200 ease-in-out">
        <div className="text-2xl font-bold text-gray-700">{post.title}</div>
        <div className="text-gray-400 text-xs font-semibold">{post.date}</div>
        <div>{post.description}</div>
      </div>
    </Link>
  );
}
