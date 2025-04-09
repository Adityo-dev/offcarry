"use client"

import { useState } from "react"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChatWidget } from "./chat-widget"
import { useSocket } from "./useSocket"

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Fixed chat button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-lg bg-primary flex justify-center hover:bg-secondary hover:shadow-xl"
        >
          <MessageSquare className="h-8 w-8" />
        </Button>
      </div>

      {/* Chat widget that appears when button is clicked */}
      {isOpen && <ChatWidget onClose={() => setIsOpen(false)} />}
    </>
  )
}

