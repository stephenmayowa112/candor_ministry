// src/components/sections/SupportOptions.tsx
import { Users, Star, DollarSign } from 'lucide-react'
import Link from 'next/link'

interface SupportOption {
  title: string
  description: string
  icon: React.ReactNode
  buttonText: string
  buttonLink: string
}

const options: SupportOption[] = [
  {
    title: 'Partnership',
    description: 'Your partnership is with the spread of the Gospel around the world',
    icon: <Users className="w-8 h-8" />,
    buttonText: 'Become a Partner',
    buttonLink: '/partnership'
  },
  {
    title: 'Patron',
    description: 'Become a bigger part of the Great Commission',
    icon: <Star className="w-8 h-8" />,
    buttonText: 'Become a Patron',
    buttonLink: '/patron'
  },
  {
    title: 'Donate',
    description: 'Your donation is with the spread of the Gospel around the world',
    icon: <DollarSign className="w-8 h-8" />,
    buttonText: 'Donate to current missions',
    buttonLink: '/donate'
  }
]

export default function SupportOptions() {
  return (
    <section className="bg-[#18217A] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {options.map((option) => (
            <div 
              key={option.title}
              className="text-center space-y-4"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 mx-auto rounded-full border-2 border-white flex items-center justify-center">
                {option.icon}
              </div>
              
              <h3 className="text-2xl font-semibold">
                {option.title}
              </h3>
              
              <p className="text-white/80">
                {option.description}
              </p>
              
              <Link
                href={option.buttonLink}
                className="
                  inline-block px-6 py-3
                  border-2 border-white rounded-full
                  hover:bg-white hover:text-[#18217A]
                  transition-colors duration-200
                  text-sm font-medium
                "
              >
                {option.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}