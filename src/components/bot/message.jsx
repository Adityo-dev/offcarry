import { cn } from "@/lib/utils"
import { formatTime } from "./chat-utils"

export function Message({ message }) {
  const isAgent = message.sender === "agent"

  return (
    <div className={cn("flex", isAgent ? "justify-start" : "justify-end")}>
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2",
          isAgent ? "bg-gray-100 rounded-tl-none" : "bg-violet-600 text-white rounded-tr-none",
        )}
      >
        <div className="text-sm">{message.content}</div>
        <div className={cn("text-xs mt-1", isAgent ? "text-gray-500" : "text-violet-100")}>
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  )
}
