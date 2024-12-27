// src/components/sections/RecentBooks.tsx
import Image from 'next/image'
import Link from 'next/link'

interface Book {
  id: string
  title: string
  image: string
  slug: string
}

const books: Book[] = [
  {
    id: '1',
    title: 'THE GAZA-ISRAELI CONFLICT',
    image: '/images/books/gaza-israeli-conflict.jpg',
    slug: 'gaza-israeli-conflict'
  },
  {
    id: '2',
    title: 'TWO SERMONS, TWO SUMMITS, TWO DESTINIES.',
    image: '/images/books/two-sermons.jpg',
    slug: 'two-sermons'
  },
  {
    id: '3',
    title: 'BETWEEN MUHAMMAD AND JESUS, A MATTER OF GREATNESS',
    image: '/images/books/between-muhammad-jesus.jpg',
    slug: 'between-muhammad-jesus'
  },
  {
    id: '4',
    title: 'ISLAM, AN ARABIAN CHRISTIAN REFORMATION.',
    image: '/images/books/islam-reformation.jpg',
    slug: 'islam-reformation'
  }
]

export default function RecentBooks() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-[#18217A] text-center mb-12">
          Recent Books
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <Link 
              key={book.id}
              href={`/books/${book.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-200 group-hover:scale-105">
                <div className="relative h-64 w-full">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-[#18217A] text-white p-4 text-center">
                  <h3 className="font-medium text-sm md:text-base">
                    {book.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}