export function formatTime(date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}

export function getInitialMessages() {
  return [
    {
      id: "1",
      content: "👋 Hi there! I'm ShopBot, your personal shopping assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]
}

export function getProductRecommendations() {
  return [
    {
      id: "p1",
      name: "Wireless Noise-Cancelling Headphones",
      price: 199.99,
      image: "/placeholder.svg?height=128&width=192",
      category: "Electronics",
    },
    {
      id: "p2",
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      image: "/placeholder.svg?height=128&width=192",
      category: "Clothing",
    },
    {
      id: "p3",
      name: "Smart Fitness Watch",
      price: 149.99,
      image: "/placeholder.svg?height=128&width=192",
      category: "Electronics",
    },
    {
      id: "p4",
      name: "Organic Coffee Beans",
      price: 14.99,
      image: "/placeholder.svg?height=128&width=192",
      category: "Food & Beverages",
    },
  ]
}
