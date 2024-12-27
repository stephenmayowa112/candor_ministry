// src/app/page.tsx
import Hero from '@/components/sections/Hero'
import DownloadBanner from '@/components/sections/DownloadBanner'
import RecentBooks from '@/components/sections/RecentBooks'

export default function Home() {
  return (
    <main>
      <Hero />
      <DownloadBanner />
      <RecentBooks />
    </main>
  )
}