// src/app/layout.tsx
import { Inter } from 'next/font/google'
import Navbar from '@/components/navigation/Navbar'
import WhatsAppChat from '@/components/widgets/WhatsAppChat'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Candor Ministries',
  description: 'Spreading the word of God through various media',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
         <Footer />
        <WhatsAppChat 
          phoneNumber="+2348130864548" // Replace with your actual WhatsApp number
          welcomeMessage="Welcome to Candor Ministries! How can we assist you today?"
        />
      </body>
    </html>
  )
}