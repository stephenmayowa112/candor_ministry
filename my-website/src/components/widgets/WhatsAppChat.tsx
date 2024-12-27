// src/components/widgets/WhatsAppChat.tsx
'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

interface WhatsAppChatProps {
  phoneNumber: string
  welcomeMessage?: string
}

export default function WhatsAppChat({ 
  phoneNumber, 
  welcomeMessage = "Hello! How can we help you today?"
}: WhatsAppChatProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleChat = () => {
    const message = encodeURIComponent(welcomeMessage)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 p-4 bg-white rounded-lg shadow-lg max-w-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Chat with us</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-gray-600 mb-4">{welcomeMessage}</p>
          <button
            onClick={handleChat}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
          >
            Start Chat
          </button>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Open WhatsApp chat"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  )
}