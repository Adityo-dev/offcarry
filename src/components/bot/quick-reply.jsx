"use client"

export function QuickReply({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-3 rounded-full transition-colors"
    >
      {text}
    </button>
  )
}
