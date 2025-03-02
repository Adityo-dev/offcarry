import { useState } from "react";
import CheckoutItemsCart from "./CheckoutItemsCart";

const cartItems = [
  {
    id: 1,
    name: "Men’s full sleeve ",
    category: "Electronic",
    price: 16.3,
    image: "/images/product5.jpg",
  },
  {
    id: 2,
    name: "Apple Watch",
    category: "Electronic",
    price: 16.3,
    image: "/images/product6.jpg",
  },
  {
    id: 3,
    name: "Men’s Jacef’s",
    category: "Electronic",
    price: 16.3,
    image: "/images/product7.jpg",
  },
];

export default function ShoppingCart() {
  const [items, setItems] = useState(cartItems);
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const updateQuantity = (id, amount) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + amount),
    }));
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6 mt-10 max-w-4xl">
      <div className="flex justify-between items-center border-b pb-4">
        <h2 className="text-lg text-[#38311F] font-semibold">
          {items.length} Items In Cart
        </h2>
        <button
          className="text-red-500 hover:underline"
          onClick={() => setItems([])}
        >
          Remove All
        </button>
      </div>
      <div className="space-y-4 mt-4">
        {items.map((item, ind) => (
          <CheckoutItemsCart
            key={ind}
            item={item}
            quantities={quantities}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
        ))}
      </div>
    </div>
  );
}
