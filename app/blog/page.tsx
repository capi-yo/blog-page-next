'use client'

import { useEffect, useState } from 'react'

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [expanded, setExpanded] = useState<number | null>(null)
  const [comments, setComments] = useState<string[]>([])
  const [form, setForm] = useState({ name: '', email: '', comment: '' })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
      .then(res => res.json())
      .then(setPosts)
      .catch(console.error)
  }, [])

  const toggleRead = (id: number) => {
    setExpanded(expanded === id ? null : id)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.comment) return
    setComments([`${form.name} (${form.email}): ${form.comment}`, ...comments])
    setForm({ name: '', email: '', comment: '' })
  }

  return (
    <section className="max-w-4xl mx-auto">
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.id} className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">{post.title}</h2>
            <p className="text-gray-700">
             {expanded === post.id
  ? post.body.repeat(4) 
  : post.body.repeat(2).slice(0, 250) + '...'} 

            </p>
            <button
              onClick={() => toggleRead(post.id)}
              className="mt-2 text-blue-600 hover:underline text-sm"
            >
              {expanded === post.id ? 'Show less' : 'Read more...'}
            </button>
          </article>
        ))}
      </div>

     
      <section className="mt-16 p-6 bg-gray-50 border border-gray-200 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">💬 Comments</h2>

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={form.name}
              onChange={handleInput}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={form.email}
              onChange={handleInput}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>
          <div>
            <textarea
              id="comment"
              placeholder="Comment..."
              value={form.comment}
              onChange={handleInput}
              className="w-full border px-4 py-2 rounded"
              rows={3}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition duration-300"
          >
            Post Comment
          </button>
        </form>

        {comments.length > 0 && (
          <div className="space-y-3">
            {comments.map((cmt, i) => (
              <div key={i} className="p-3 bg-white border border-gray-200 rounded text-sm text-gray-800">
                {cmt}
              </div>
            ))}
          </div>
        )}
      </section>
    </section>
  )
}


