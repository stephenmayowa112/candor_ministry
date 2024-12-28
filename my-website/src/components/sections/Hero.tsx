// src/components/sections/Hero.tsx
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className="relative w-full h-[600px]">
      <Image
        src="/images/arabs.jpg"
        alt="Woman speaking at event"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/20" /> {/* Optional overlay for better text contrast if needed */}
    </div>
  )
}