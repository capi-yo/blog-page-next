'use client'

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (

<footer className="bg-gray-900 text-white mt-12 pt-10 pb-6">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">TechVision</h2>
          <p className="mt-3 text-sm text-gray-400">
            Your source for the latest in AI, Web Development, Cybersecurity, and UI/UX trends.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        &copy; 2025 Simple Blog Project
      </div>
    </footer>
  )
}
