interface PostProps {
  title: string
  body: string
  author?: string
  image?: string
}

export default function PostCard({ title, body, author, image }: PostProps) {
  return (
    <article className="bg-white p-4 rounded-lg shadow-md">
      {image && <img src={image} alt={title} className="rounded mb-4" />}
      <h2 className="text-indigo-600 font-bold text-lg mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{body}</p>
      {author && <p className="text-sm text-gray-500"><strong>Author:</strong> {author}</p>}
    </article>
  )
}
