'use client'

export default function Error({ error }: { error: Error }) {
  return (
    <div className="max-w-4xl mx-auto p-6 text-red-600">
      Error: {error.message || 'Failed to load content'}
    </div>
  );
}