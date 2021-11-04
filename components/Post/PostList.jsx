import Post from './Post'
export default function PostList({posts, title}) {
    return (
        <div className="mx-auto max-w-7xl px-10">
            {
            title &&
                <p className="mb-6">
                    {title}
                </p>
            }
            { posts.map(post => (
                <div key={post.id} className="mb-10">
                    <Post post={post} />
                </div>
            )) }
        </div>
    )
}
