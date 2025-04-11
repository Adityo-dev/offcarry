"use client"

import { useState, useEffect } from "react"
import { X, Agent } from "lucide-react"
import { CustomerForm } from "./customer-form"
import { ChatInterface } from "./chat-interface"

export function ChatWidget({ onClose }) {
  const [chatState, setChatState] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedChat = localStorage.getItem('chatSession')
      return savedChat ? "chat" : "form"
    }
    return "form"
  })

  const [chatSession, setChatSession] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedChat = localStorage.getItem('chatSession')
      return savedChat ? JSON.parse(savedChat) : {
        senderId: null,
        chatId: null,
        mobile: "",
      }
    }
    return {
      senderId: null,
      chatId: null,
      mobile: "",
    }
  })

  useEffect(() => {
    if (chatSession.senderId) {
      localStorage.setItem('chatSession', JSON.stringify(chatSession))
    }
  }, [chatSession])

  const handleFormSubmit = async (data) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUT_URL}/chat/anonymous`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          mobile: data.mobile,
          email: data.email,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create chat')
      }

      const result = await response.json()
      const updatedData = {
        senderId: result.user.id,
        chatId: result.chatRoom.id,
        mobile: data.mobile,
      }
      setChatSession(updatedData)
      localStorage.setItem('chatSession', JSON.stringify(updatedData))
      setChatState("chat")
    } catch (error) {
      console.error('Error creating chat:', error)
    }
  }

  return (
    <div className="fixed md:bottom-6 bottom-16 right-1 md:right-6 z-50 w-[calc(100%-1%)] max-w-md px-2 md:px-0">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 flex flex-col md:h-[500px] h-[80vh]">

        <div className="p-4 border-b flex items-center justify-between bg-gradient-to-r from-primary to-secondary text-white">
          <div className="flex items-center space-x-2">
            <h2 className="font-bold flex items-center space-x-2">
            <span className="h-2 w-2 bg-green-200 rounded-full  animate-ping shadow-black"></span>

              <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" stroke="#ffff" strokeWidth="4" />
                <circle cx="32" cy="24" r="10" fill="#ffff" />
                <path d="M22 48c0-5.523 4.477-10 10-10s10 4.477 10 10v4H22v-4z" fill="#ffff" />
                <path d="M12 32v-2c0-11.046 8.954-20 20-20s20 8.954 20 20v2" stroke="#ffff" strokeWidth="4" />
                <rect x="8" y="28" width="6" height="10" rx="2" fill="#ffff" />
                <rect x="50" y="28" width="6" height="10" rx="2" fill="#ffff" />
                <path d="M56 33a4 4 0 01-4 4h-2" stroke="#ffff" strokeWidth="2" />
              </svg>
              <span>Customer Support</span>


            </h2>
          </div>
          <button onClick={onClose} className="rounded-full p-1 hover:bg-white/10 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-hidden">
          {chatState === "form" ? (
            <CustomerForm onSubmit={handleFormSubmit} />
          ) : (
            <ChatInterface chatSession={chatSession} />
          )}
        </div>
      </div>
    </div>
  )
}
