import { useState } from "react";
import { Trash } from "lucide-react";
import Image from "next/image";

const cartItems = [
  {
    id: 1,
    name: "Men’s full sleeve Jaket",
    category: "Electronic",
    price: 16.3,
    image: "/images/products1.png",
  },
  {
    id: 2,
    name: "Apple Watch",
    category: "Electronic",
    price: 16.3,
    image: "/images/products2.png",
  },
  {
    id: 3,
    name: "Men’s Jacef’s",
    category: "Electronic",
    price: 16.3,
    image: "/images/products1.png",
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
    <div className="mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
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
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#FAFAFA] flex items-center justify-between border p-4 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white p-2 rounded-lg">
                <Image
                  src={item.image}
                  width={400}
                  height={400}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
            </div>
            <p className="font-medium">${item.price.toFixed(2)}</p>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                className="px-2 py-1"
                onClick={() => updateQuantity(item.id, -1)}
              >
                -
              </button>
              <span className="px-4">{quantities[item.id]}</span>
              <button
                className="px-2 py-1"
                onClick={() => updateQuantity(item.id, 1)}
              >
                +
              </button>
            </div>
            <p className="text-green-500 font-semibold">
              ${(item.price * quantities[item.id]).toFixed(2)}
            </p>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
