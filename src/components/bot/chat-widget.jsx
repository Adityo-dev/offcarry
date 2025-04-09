"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
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
      const updatedData={
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
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-md">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 flex flex-col h-[500px]">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between bg-gradient-to-r from-primary to-secondary text-white">
          <h2 className="font-bold">Customer Support</h2>
          <button onClick={onClose} className="rounded-full p-1 hover:bg-white/10 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
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
