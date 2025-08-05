'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-blue-700 text-white py-4 mb-8 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <h1 className="text-xl font-bold">My Awesome Blog</h1>
        <nav className="mt-2 md:mt-0">
          <ul className="flex gap-6">
            {['/', '/blog'].map((path) => (
              <li key={path}>
                <Link
                  href={path}
                  className={`px-2 py-1 transition-all duration-300 rounded 
                    ${pathname === path
                      ? 'font-semibold text-yellow-300'
                      : 'hover:text-yellow-200 hover:scale-105'}`}
                >
                  {path === '/' ? 'Home' : 'Blog'}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
