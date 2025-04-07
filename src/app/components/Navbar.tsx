'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-600">
          Kalavedika
        </Link>
        <div className="space-x-6 hidden md:flex">
          <Link href="/events" className="hover:text-purple-500">Events</Link>
          <Link href="/gallery" className="hover:text-purple-500">Gallery</Link>
          <Link href="/team" className="hover:text-purple-500">Team</Link>
          <Link href="/contact" className="hover:text-purple-500">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
