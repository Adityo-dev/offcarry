"use client"

import { useState, useRef, useEffect } from "react"
import { Message } from "./message"
import { ChatInput } from "./chat-input"

export function ChatInterface({ customerInfo }) {
  const [messages, setMessages] = useState([
    {
      id: "1",
      content: `Hi ${customerInfo.name}, how can I help you today?`,
      sender: "agent",
      timestamp: new Date(),
    },
  ])

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (content) => {
    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simulate agent response after a short delay
    setTimeout(() => {
      const agentMessage = {
        id: (Date.now() + 1).toString(),
        content: "Someone will reply soon. Please be patient.",
        sender: "agent",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, agentMessage])
    }, 1000)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  )
}
