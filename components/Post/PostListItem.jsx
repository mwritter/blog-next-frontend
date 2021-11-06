import Link from "next/link";
export default function PostListItem({ post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="flex flex-col space-y-5 border-2 shadow-md p-10 bg-white z-10 cursor-pointer">
        <div className="text-2xl font-bold text-gray-700">{post.title}</div>
        <div>{post.description}</div>
        {/* need to get a date and author too */}
      </div>
    </Link>
  );
}
