'use client'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

export default function HomePage() {
  const router = useRouter()

  return (
    <main className="px-4">
      <section className="text-center py-12 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-6 text-blue-700">Welcome to My TechVision Blog</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          TechVision is your go-to blog for the latest trends in Artificial Intelligence,
          Web Development, Cybersecurity, and UI/UX Design. Explore expert articles and
          insights from top professionals.
        </p>
        <button
  onClick={() => router.push('/blog')}
 className="mt-8 px-6 py-3 bg-blue-700 text-white text-lg rounded-full transform transition-transform duration-300 hover:scale-110 shadow-lg">
  Explore Blog
</button>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 pb-12">
  <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
    <Image
      src="/images/AI.jpg"
      alt="AI"
      width={300}
      height={200}
      className="w-full h-40 object-cover rounded mb-3"
    />
    <h3 className="text-xl font-semibold text-blue-700">Artificial Intelligence</h3>
    <p className="text-gray-600 text-sm mt-2">
      Explore machine learning, automation, and cutting-edge AI technologies shaping the future.
    </p>
  </div>

  <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
    <Image
      src="/images/webdev.jpg"
      alt="Web Development"
      width={300}
      height={200}
      className="w-full h-40 object-cover rounded mb-3"
    />
    <h3 className="text-xl font-semibold text-blue-700">Web Development</h3>
    <p className="text-gray-600 text-sm mt-2">
      Stay ahead with modern JavaScript frameworks, full-stack tools, and best coding practices.
    </p>
  </div>

  <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
    <Image
      src="/images/Cyber.jpg"
      alt="Cybersecurity"
      width={300}
      height={200}
      className="w-full h-40 object-cover rounded mb-3"
    />
    <h3 className="text-xl font-semibold text-blue-700">Cybersecurity</h3>
    <p className="text-gray-600 text-sm mt-2">
      Learn about online threats, ethical hacking, and how to protect digital infrastructure.
    </p>
  </div>

  <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
    <Image
      src="/images/design.jpg"
      alt="UI/UX Design"
      width={300}
      height={200}
      className="w-full h-40 object-cover rounded mb-3"
    />
    <h3 className="text-xl font-semibold text-blue-700">UI/UX Design</h3>
    <p className="text-gray-600 text-sm mt-2">
      Discover trends in user-centered design, prototyping, and seamless digital experiences.
    </p>
  </div>
</section>
<section className="mt-12 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
 
  <aside className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-6 rounded shadow-md">
    <h2 className="font-bold text-xl mb-2">💡 Trending Now</h2>
    <p className="text-base leading-relaxed">
      Artificial Intelligence continues to revolutionize industries with tools like ChatGPT,
      Copilot, and image generators. Web Development frameworks such as Next.js and Astro are
      redefining performance and developer experience. Cybersecurity is more crucial than ever,
      with zero-trust models and AI-driven threat detection on the rise. UI/UX Design trends
      emphasize minimalism, accessibility, and immersive micro-interactions.
    </p>
  </aside>

 
  <aside className="p-6">
    <h3 className="font-semibold text-lg mb-2"> Why Trust TechVision?</h3>
    <p className="text-base leading-relaxed text-gray-800">
      TechVision is curated by seasoned developers, designers, and security experts who provide
      in-depth and practical analysis of the latest tech trends. We prioritize clarity, accuracy,
      and actionable advice so you can confidently stay ahead in the tech landscape.
    </p>
  </aside>
</section>


    </main>
  )
}
