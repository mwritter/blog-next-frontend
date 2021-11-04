export default function Post({post}) {
    return (
        <div className="flex flex-col space-y-5 border-2 shadow-md p-10 bg-white z-10">
            <div className="text-2xl font-bold text-gray-700">
                {post.title}
            </div>
            <div>
                {post.description}
            </div>
        </div>
    )
}

