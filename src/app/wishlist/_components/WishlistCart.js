import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

function WishlistCart({ item }) {
  return (
    <div className="bg-[#FAFAFA] grid grid-cols-12 items-center border p-4 rounded-lg relative ">
      {/* Product Details */}
      <div className="flex items-center gap-4 col-span-5 lg:col-span-4">
        <div className="w-20 h-20 bg-white rounded-lg overflow-hidden">
          <Image
            src={item.image}
            width={400}
            height={400}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h3 className="text-sm font-medium">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.category}</p>
        </div>
      </div>

      {/* Unit Price */}
      <p className="font-medium col-span-2 lg:col-span-3">
        ${item.price.toFixed(2)}
      </p>

      {/* Stock Status */}
      <p
        className={`col-span-2 lg:col-span-3 ${
          item.stock === "In Stock" ? "text-green-500" : "text-red-500"
        }`}
      >
        {item.stock}
      </p>

      {/* Action Buttons */}
      <div className="w-full col-span-3 lg:col-span-2 flex items-center justify-between gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add to Cart
        </button>
        <button className="text-red-500 hover:text-red-700">
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
}

export default WishlistCart;
