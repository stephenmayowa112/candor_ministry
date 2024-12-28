// src/app/page.tsx
import React from 'react'
import Hero from '@/components/sections/Hero'
import DownloadBanner from '@/components/sections/DownloadBanner'
import RecentBooks from '@/components/sections/RecentBooks'
import RecentAudioVisuals from '@/components/sections/RecentAudioVisuals'
import SupportOptions from '@/components/sections/SupportOptions' // Ensure this path is correct or update it to the correct path

export default function Home() {
  return (
    <>
      <Hero />
      <DownloadBanner />
      <RecentBooks />
      <RecentAudioVisuals />
      <SupportOptions />
    </>
  )
}