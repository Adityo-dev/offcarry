"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { CustomerForm } from "./customer-form"
import { ChatInterface } from "./chat-interface"

export function ChatWidget({ onClose }) {
  const [chatState, setChatState] = useState(() => {
    // Check if customer info exists in localStorage
    if (typeof window !== 'undefined') {
      const savedInfo = localStorage.getItem('customerInfo')
      if (savedInfo) {
        const parsedInfo = JSON.parse(savedInfo)
        if (parsedInfo.name || parsedInfo.email || parsedInfo.mobile) {
          return "chat"
        }
      }
    }
    return "form"
  })

  const [customerInfo, setCustomerInfo] = useState(() => {
    // Initialize state from localStorage if available
    if (typeof window !== 'undefined') {
      const savedInfo = localStorage.getItem('customerInfo')
      return savedInfo ? JSON.parse(savedInfo) : {
        name: "",
        email: "",
        mobile: "",
      }
    }
    return {
      name: "",
      email: "",
      mobile: "",
    }
  })

  // Save to localStorage whenever customerInfo changes
  useEffect(() => {
    if (customerInfo.name || customerInfo.email || customerInfo.mobile) {
      localStorage.setItem('customerInfo', JSON.stringify(customerInfo))
    }
  }, [customerInfo])

  const handleFormSubmit = (data) => {
    setCustomerInfo(data)
    setChatState("chat")
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
            <ChatInterface customerInfo={customerInfo} />
          )}
        </div>
      </div>
    </div>
  )
}
