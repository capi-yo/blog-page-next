'use client'

import { useState } from 'react'

export default function CommentForm() {
  const [form, setForm] = useState({ name: '', email: '', comment: '' })
  const [comments, setComments] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.comment) return
    const newComment = `<strong>${form.name}</strong> (${form.email}) says:<br/>${form.comment}`
    setComments([newComment, ...comments])
    setForm({ name: '', email: '', comment: '' })
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
          required
        />
        <textarea
          id="comment"
          placeholder="Write your comment..."
          value={form.comment}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
          rows={4}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Post Comment
        </button>
      </form>

      <div className="mt-6 space-y-4">
        {comments.map((cmt, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded" dangerouslySetInnerHTML={{ __html: cmt }} />
        ))}
      </div>
    </div>
  )
}
