import Link from 'next/link';
import CommentForm from '@/components/CommentForm';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default async function BlogPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?_limit=4`, {
    cache: 'force-cache', 
  });
  const posts: Post[] = await res.json();

  if (!posts.length) {
    return <div className="max-w-4xl mx-auto p-6">Error: Could not load posts</div>;
  }

  return (
    <section className="max-w-4xl mx-auto">
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.id} className="bg-white p-6 rounded-xl shadow-md">
            <Link href={`/blog/${post.id}`}>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2 hover:underline">{post.title}</h2>
            </Link>
            <p className="text-gray-700">{post.body.slice(0, 250)}...</p>
            <Link href={`/blog/${post.id}`} className="mt-2 text-blue-600 hover:underline text-sm">
              Read more...
            </Link>
          </article>
        ))}
      </div>

      <section className="mt-16 p-6 bg-gray-50 border border-gray-200 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">💬 Comments</h2>
        <CommentForm />
      </section>
    </section>
  );
}