import { ShoppingBag, Settings } from "lucide-react"

export function ChatHeader() {
  return (
    <div className="p-4 border-b flex items-center justify-between bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
      <div className="flex items-center space-x-2">
        <ShoppingBag className="h-6 w-6" />
        <div>
          <h2 className="font-bold text-lg">ShopBot</h2>
          <p className="text-xs opacity-80">Online • Ready to help</p>
        </div>
      </div>
      <button className="rounded-full p-2 hover:bg-white/10 transition-colors">
        <Settings className="h-5 w-5" />
      </button>
    </div>
  )
}

