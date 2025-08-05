interface Props {
  post: {
    id: number
    title: string
    body: string
    userId: number
  }
}

export default function ArticleCard({ post }: Props) {
  return (
    <article className="bg-white p-4 rounded-xl shadow-md">
      <img
        src={`https://picsum.photos/seed/${post.id}/400/250`}
        alt={`Post ${post.id}`}
        className="rounded mb-4 w-full h-48 object-cover"
      />
      <h2 className="text-xl font-semibold text-blue-700 mb-2">{post.title}</h2>
      <p className="text-sm mb-2">{post.body}</p>
      <p className="text-xs text-gray-600"><strong>Author:</strong> User {post.userId}</p>
    </article>
  )
}
