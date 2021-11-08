import PostListItem from "./PostListItem";
export default function PostList({ posts, title }) {
  return (
    <div className="mx-auto mt-5 max-w-7xl px-10">
      {title && <p className="mb-6">{title}</p>}
      {posts.map((post) => (
        <div key={post.id} className="mb-10">
          <PostListItem post={post} />
        </div>
      ))}
    </div>
  );
}
