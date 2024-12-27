// src/components/navigation/MobileMenu.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-gray-900"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <nav className="flex flex-col p-4">
            <Link
              href="/"
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/books"
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Books
            </Link>
            <Link
              href="/audio-visuals"
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Audio-Visuals
            </Link>
            <Link
              href="/audio-books"
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Audio Books
            </Link>
            <Link
              href="/articles"
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Articles
            </Link>
            <Link
              href="/upcoming-events"
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Upcoming Events
            </Link>
            <Link
              href="/links"
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Links
            </Link>
            <Link
              href="/contact-us"
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            <Link
              href="/donate"
              className="mt-2 px-4 py-3 bg-blue-900 text-white rounded-md text-center"
              onClick={toggleMenu}
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}