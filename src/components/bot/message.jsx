import { cn } from "@/lib/utils"
import { formatRelativeTime } from "./chat-utils"

import { User } from "lucide-react"
export function Message({ message }) {
  const isAgent = message.senderId == 1


  return (
    <div className={cn("flex", isAgent ? "justify-start" : "justify-end")}>
      {isAgent && (

        <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" stroke="gray" strokeWidth="4" />
          <circle cx="32" cy="24" r="10" fill="gray" />
          <path d="M22 48c0-5.523 4.477-10 10-10s10 4.477 10 10v4H22v-4z" fill="gray" />
          <path d="M12 32v-2c0-11.046 8.954-20 20-20s20 8.954 20 20v2" stroke="gray" strokeWidth="4" />
          <rect x="8" y="28" width="6" height="10" rx="2" fill="gray" />
          <rect x="50" y="28" width="6" height="10" rx="2" fill="gray" />
          <path d="M56 33a4 4 0 01-4 4h-2" stroke="gray" strokeWidth="2" />
        </svg>

      )}
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2",
          isAgent ? "bg-gray-100 rounded-tl-none ml-2" : "bg-primary text-white rounded-tr-none",
        )}
      >
        <div className="text-sm">{message.content}</div>
        <div className={cn("text-xs mt-1", isAgent ? "text-gray-500" : "text-violet-100")}>
          {formatRelativeTime(message.createdAt)}
        </div>
        <div>
          {!isAgent && (message.adminSeen ? (
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">

              <path d="M18 34L26 42L42 26" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

              <path d="M24 34L32 42L48 26" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">

              <path d="M18 34L26 42L42 26" stroke="#A0A0A0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

              <path d="M24 34L32 42L48 26" stroke="#A0A0A0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>))}

        </div>
      </div>
      {!isAgent && (
        <div className="flex items-center justify-center ml-2 border-2 border-gray-400 rounded-full h-6 w-6" >
          <User className="h-6 w-6 text-gray-400" />
        </div>
      )}
    </div>
  )
}
