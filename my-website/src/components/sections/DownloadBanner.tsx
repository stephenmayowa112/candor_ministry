// src/components/sections/DownloadBanner.tsx
import Link from 'next/link'

export default function DownloadBanner() {
  return (
    <section className="bg-[#18217A] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
          God&apos;s Word Will Change<br />Your Life Forever!
        </h2>
        
        <div className="pt-4">
          <Link 
            href="/books/free-ebooks"
            className="
              inline-block px-8 py-3 
              border-2 border-white rounded-full
              text-lg font-medium
              hover:bg-white hover:text-[#18217A]
              transition-colors duration-200
            "
          >
            Download free Ebooks of Emil Saleem Shehadeh
          </Link>
        </div>
      </div>
    </section>
  )
}