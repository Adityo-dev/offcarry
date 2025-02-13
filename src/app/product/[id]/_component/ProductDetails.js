"use client";

import { Minus, Plus, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("");

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleBuyNow = () => {
    console.log("Quantity:", quantity);
    console.log("Selected Size:", selectedSize);
    console.log("Selected Color:", selectedColor || "Not Selected");
  };

  return (
    <div className="md:max-w-4xl mx-auto p-6">
      <div className="space-y-6">
        <div className="flex items-center flex-wrap gap-6 text-[#888AA0]">
          <p>
            Category : <span className="text-gray-900">Mobile Accessories</span>
          </p>
          <p>
            Brand : <span className="text-gray-900">Walton</span>
          </p>
        </div>

        <h1 className="text-2xl md:text-4xl tracking-wide md:leading-[45px]">
          Anti-Drop AirPods1 2 Silicone Bluetooth Compatible Earphone Cover Air
          Pods
        </h1>

        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-[#EFAD03] fill-[#EFAD03]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <svg
              className="w-5 h-5 text-[#888AA0]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <span className="text-[#837F74]">(4.5) 25 Review</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[#837F74] line-through text-xl">$130.00</span>
          <span className="text-primary text-4xl font-semibold">$125.00</span>
        </div>

        {/* COLOR SELECTOR  */}
        <div className="flex items-center gap-4">
          <div>
            <label className="text-lg font-medium">Color: </label>
            <select
              className="w-[200px] px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#00bfa6] focus:border-[#00bfa6]"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="">Select One</option>
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="blue">Blue</option>
            </select>
          </div>
          {/*  */}
          <div className="flex items-center gap-1 text-[#EFAD03] text-sm">
            <TriangleAlert size={18} strokeWidth={1.5} />
            <span className="text-[#EFAD03]">Limited quantity available</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <label className="text-lg font-medium">Size: </label>
          <div className="flex gap-2">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-10 h-10 rounded-md font-medium transition-colors ${
                  selectedSize === size
                    ? "bg-[#00bfa6] text-white hover:bg-[#00bfa6]/90"
                    : "border border-gray-300 hover:border-[#00bfa6] hover:text-[#00bfa6]"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT COUNTER AND BUY NOW BTN */}
        <div className="flex gap-4 items-center">
          <div className="flex items-center border rounded-md">
            <button
              onClick={decreaseQuantity}
              className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <Minus size={20} strokeWidth={2} />
            </button>
            <div className="w-16 text-center text-lg">{quantity}</div>
            <button
              onClick={increaseQuantity}
              className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <Plus size={20} strokeWidth={2} />
            </button>
          </div>
          {/* BUY NOW BTN */}
          <Link
            href={"/checkout"}
            onClick={handleBuyNow}
            className="h-12 px-12 flex items-center text-white font-semibold rounded-lg bg-gradient-primary outline-none"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
