// src/components/navigation/NavLink.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  
  return (
    <Link 
      href={href}
      className={`
        px-3 py-2 text-base transition-colors duration-200
        ${isActive 
          ? 'text-gray-700 hover:text-blue-900' 
          : 'text-blue-900 font-semibold'
        }
      `}
    >
      {children}
    </Link>
  )
}