// src/components/sections/RecentAudioVisuals.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

interface VideoItem {
  id: string
  title: string
  thumbnail: string
  duration: string
  videoUrl: string
}

const videos: VideoItem[] = [
  {
    id: '1',
    title: 'Understanding Biblical Truth',
    thumbnail: '/images/videos/video1.jpg',
    duration: '45:21',
    videoUrl: '/videos/understanding-biblical-truth'
  },
  {
    id: '2',
    title: 'The Power of Prayer',
    thumbnail: '/images/videos/video2.jpg',
    duration: '32:15',
    videoUrl: '/videos/power-of-prayer'
  },
  {
    id: '3',
    title: 'Walking in Faith',
    thumbnail: '/images/videos/video3.jpg',
    duration: '28:47',
    videoUrl: '/videos/walking-in-faith'
  },
  {
    id: '4',
    title: 'Living the Gospel',
    thumbnail: '/images/videos/video4.jpg',
    duration: '37:52',
    videoUrl: '/videos/living-the-gospel'
  },
  {
    id: '5',
    title: 'Divine Purpose',
    thumbnail: '/images/videos/video5.jpg',
    duration: '41:33',
    videoUrl: '/videos/divine-purpose'
  },
  {
    id: '6',
    title: 'Grace and Mercy',
    thumbnail: '/images/videos/video6.jpg',
    duration: '35:19',
    videoUrl: '/videos/grace-and-mercy'
  }
]

export default function RecentAudioVisuals() {
  const [displayCount, setDisplayCount] = useState(6)

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-[#18217A] text-center mb-12">
          Recent Audio-Visuals
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.slice(0, displayCount).map((video) => (
            <div 
              key={video.id}
              className="group relative aspect-video bg-gray-200 rounded-lg overflow-hidden"
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="p-4 rounded-full bg-white/90 text-[#18217A] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Play size={24} />
                </button>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-sm rounded">
                {video.duration}
              </div>
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-medium truncate">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button
            onClick={() => setDisplayCount(prev => prev + 6)}
            className="
              px-8 py-3 rounded-full
              border-2 border-[#18217A] text-[#18217A]
              hover:bg-[#18217A] hover:text-white
              transition-colors duration-200
              text-sm font-medium
            "
          >
            Load more Videos
          </button>
        </div>
      </div>
    </section>
  )
}