import { notFound } from 'next/navigation';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${params.id}`, {
    cache: 'force-cache', 
  });
  const post: Post = await res.json();

  if (!post.id) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.body}</p>
      <p className="text-sm text-gray-500">Author: User {post.userId}</p>
    </article>
  );
}