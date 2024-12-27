// src/components/navigation/Navbar.tsx
import Link from 'next/link'
import NavLink from './NavLink'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto">
        <nav className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-900">
            Candor Ministries
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/books">Books</NavLink>
            <NavLink href="/audio-visuals">Audio-Visuals</NavLink>
            <NavLink href="/audio-books">Audio Books</NavLink>
            <NavLink href="/articles">Articles</NavLink>
            <NavLink href="/upcoming-events">Upcoming Events</NavLink>
            <NavLink href="/links">Links</NavLink>
            <NavLink href="/contact-us">Contact Us</NavLink>
          </div>

          {/* Donate Button */}
          <div className="hidden md:block">
            <Link
              href="/donate"
              className="
                bg-blue-900 text-white px-6 py-2 rounded-md
                hover:bg-blue-800 transition-colors duration-200
                text-sm font-medium
              "
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </nav>
      </div>
    </header>
  )
}