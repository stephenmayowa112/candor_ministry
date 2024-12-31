// src/components/layout/Footer.tsx
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#18217A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Connect Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Connect with us</h2>
            <div className="flex space-x-6">
              <Link href="https://facebook.com" className="hover:opacity-80 transition-opacity">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="hover:opacity-80 transition-opacity">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="hover:opacity-80 transition-opacity">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://youtube.com" className="hover:opacity-80 transition-opacity">
                <Youtube size={24} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-right">
            <h2 className="text-2xl font-semibold mb-6">CONTACT US</h2>
            <div className="space-y-2">
              <p>+447971243052</p>
              <p>info@candorministries.com</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t bg-white border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-[#18217A] ">
          © 2025 Candor Ministries. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}