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
    image: '/images/A 3.png',
    slug: 'gaza-israeli-conflict'
  },
  {
    id: '2',
    title: 'TWO SERMONS, TWO SUMMITS, TWO DESTINIES.',
    image: '/images/B 1.png',
    slug: 'two-sermons'
  },
  {
    id: '3',
    title: 'BETWEEN MUHAMMAD AND JESUS, A MATTER OF GREATNESS',
    image: '/images/C 1.png',
    slug: 'between-muhammad-jesus'
  },
  {
    id: '4',
    title: 'ISLAM, AN ARABIAN CHRISTIAN REFORMATION.',
    image: '/images/e.png',
    slug: 'islam-reformation'
  },
  {
    id: '5',
    title: 'BEAR THE CROSS AND WEAR THE CROWN.',
    image: '/images/f.png',
    slug: 'cross-and-crown'
  },
{
    id: '6',
    title: 'THE OTHER ANTI-SEMATISM.',
    image: '/images/g.png',
    slug: 'anti-semitism'
  },
{
    id: '7',
    title: 'TRUE ISLAM: LOST IN TRANSLATION.',
    image: '/images/h.png',
    slug: 'true-islam'
  },
{
    id: '8',
    title: 'THE CRUSADES Motives, Methods & Moments.',
    image: '/images/i.png',
    slug: 'the-crusades'
  }

]

export default function RecentBooks() {
  return (
    <section id="books" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-[#18217A] text-center mb-12">
          Recent Books
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <Link 
              key={book.id}
              href={`/books/${book.slug}`}
              className="group w-full max-w-[250px] mx-auto"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden 
        transform perspective-1000 
        rotate-y-3 hover:rotate-y-0
        transition-all duration-300 ease-out
        group-hover:scale-102 group-hover:shadow-xl">
                <div className="relative h-48 w-full p-2">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-contain rounded-md"
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