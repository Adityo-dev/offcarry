
export function formatTime(date) {
  if (!date) return "";
  if (typeof date === "string") {
    date = new Date(date);
  }
  if (isNaN(date.getTime())) return ""; // Invalid date
  const currentDate = new Date();
  if (date.toDateString() === currentDate.toDateString()) {
    return `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`;
  }
  const options = { weekday: "short", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const formattedTime = formatTime12Hour(date);
  return `${formattedDate} ${formattedTime}`;
}
function formatTime12Hour(date) {
  if (!date) return "";
  if (typeof date === "string") {
    date = new Date(date);
  }
  if (isNaN(date.getTime())) return ""; // Invalid date 
  const rawHours = date.getHours();
  const rawMinutes = date.getMinutes();
  const period = rawHours >= 12 ? "PM" : "AM";
  const formattedHours = rawHours % 12 || 12; // Convert 0 to 12 for 12-hour format
  const formattedMinutes = rawMinutes.toString().padStart(2, "0");
  return `${formattedHours}:${formattedMinutes} ${period}`;
}

export function formatRelativeTime(date) {
  if (!date) return "";
  if (typeof date === "string") {
    date = new Date(date);
  }
  if (isNaN(date.getTime())) return ""; // Invalid date

  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) {
    return "just now";
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < 604800) { // Less than 7 days
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
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
