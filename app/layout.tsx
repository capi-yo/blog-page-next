import '@/styles/globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'My TechVision Blog',
  description: 'Explore AI, Web Dev, Cybersecurity, and UI/UX',
  icons: { icon: '/trendtech.png' },
  keywords: 'AI, Web Development, Cybersecurity, UI/UX, Tech Blog',
  openGraph: {
    title: 'My TechVision Blog',
    description: 'Explore AI, Web Dev, Cybersecurity, and UI/UX',
    images: ['/og-image.jpg'], 
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}