"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"



export function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {

      onSendMessage(message)
      console.log(message);
      
      setMessage("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border-t p-3 bg-white">
      <div className="flex items-center space-x-2">
        <div className="flex-1">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="w-full py-2 px-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
          />
        </div>

        <Button
          type="submit"
          size="icon"
          disabled={!message.trim()}
          className="rounded-full bg-primary hover:bg-secondary transition-colors flex justify-center items-center"
        >
          <Send className="h-5 w-5 text-white" />
        </Button>
      </div>
    </form>
  )
}

