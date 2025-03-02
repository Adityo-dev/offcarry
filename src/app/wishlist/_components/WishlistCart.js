import { Trash, X } from "lucide-react";
import Image from "next/image";
import React from "react";

function WishlistCart({ item }) {
  return (
    <div className="bg-[#FAFAFA] grid grid-cols-12 items-center border p-4 rounded-lg relative ">
      {/* Product Details */}
      <div className="flex items-center gap-4 col-span-full sm:col-span-5 lg:col-span-4 mb-4 sm:mb-0">
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
      <div className="flex sm:inline items-center justify-between pb-2.5 sm:pb-0 col-span-full sm:col-span-2 lg:col-span-3">
        <p className="sm:hidden">Price</p>
        <p className="font-medium">${item.price.toFixed(2)}</p>
      </div>

      {/* Stock Status */}
      <div className="flex sm:inline items-center justify-between border-y border-dotted sm:border-none py-2.5 sm:py-0 col-span-full sm:col-span-2 lg:col-span-3">
        <p className="sm:hidden">Stock</p>
        <p
          className={` ${
            item.stock === "In Stock" ? "text-green-500" : "text-red-500"
          }`}
        >
          {item.stock}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="w-full col-span-full pt-2.5 sm:pt-0 sm:col-span-3 lg:col-span-2 flex items-center justify-between">
        <button className="bg-gradient-primary text-white w-full sm:w-auto px-6 h-11 rounded-lg">
          Add to Cart
        </button>
        <button className="text-red-500 hover:text-red-700 hidden md:block">
          <Trash size={20} />
        </button>
        <button className="text-red-500 hover:text-red-700 absolute md:static top-1.5 right-1.5 block md:hidden">
          <X size={20} />
        </button>
      </div>
    </div>
  );
}

export default WishlistCart;
