// src/components/navigation/Navbar.tsx
"use client"
import Link from 'next/link'
import  NavLink from './NavLink'
import  MobileMenu  from './MobileMenu'
import React from 'react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 border-b border-gray-200 bg-white/95 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto">
        <nav className="px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-[#18217A]">
            Candor Ministries
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/home">Home</NavLink>
            <NavLink href="/books">Books</NavLink>
            <NavLink href="/audio-visuals">Audio-Visuals</NavLink>
            <NavLink href="/audio-books">Audio Books</NavLink>
            <NavLink href="/articles">Articles</NavLink>
            <NavLink href="/upcoming-events">Upcoming Events</NavLink>
            <NavLink href="/links">Links</NavLink>
            <NavLink href="/contact-us">Contact Us</NavLink>

            {/* Donate Button */}
          <div className="hidden md:block">
            <Link
              href="/donate"
              className="
                bg-[#18217A] text-white px-3 py-2 rounded-full  
                hover:bg-blue-800 transition-colors duration-200
                text-sm font-small
              "
            >
              Donate
            </Link>
          </div>


          </div>

          

          {/* Mobile Menu */}
          <MobileMenu />
        </nav>
      </div>
    </header>
  )
}