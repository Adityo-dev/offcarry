import Image from "next/image";
import { AlertTriangle, CheckCircle, X, XCircle } from "lucide-react";

function WishlistCart({ product }) {
  return (
    <div className="grid grid-cols-12 items-center gap-6 border-b pb-6 last:border-0">
      {/* IMAGE AND PRODUCT NAME */}
      <div className="col-span-4 flex items-center gap-4">
        <Image
          src={product?.image}
          width={400}
          height={400}
          alt=""
          className="w-36 h-36 border rounded-lg"
        />
        <p>{product?.name}</p>
      </div>
      {/* UNIT PRICE */}
      <p className="text-2xl text-gray-600 space-x-3 col-span-3">
        <span className="line-through text-[80%] text-[#ACB5BD]">
          ৳{product?.stock > 0 ? product?.oldPrice : "00"}
        </span>
        <span className="font-bold text-secondary">
          ৳{product?.stock > 0 ? product?.currentPrice : "00"}
        </span>
      </p>

      {/* STOCK */}
      <p
        className={`flex items-center gap-1 col-span-2 ${
          product?.stock > 5
            ? "text-green-600"
            : product?.stock > 0
            ? "text-yellow-600"
            : "text-red-600"
        }`}
      >
        {product?.stock > 5 ? (
          <>
            <CheckCircle size={18} strokeWidth={1.5} />
            <span>In Stock</span>
          </>
        ) : product?.stock > 0 ? (
          <>
            <AlertTriangle size={18} strokeWidth={1.5} />
            <span>Low Stock</span>
          </>
        ) : (
          <>
            <XCircle size={18} strokeWidth={1.5} />
            <span>Out of Stock</span>
          </>
        )}
      </p>

      {/* BUY NOW AND REMOVE BUTTON */}
      <div className="col-span-3 w-full flex justify-between pl-6">
        <button className="bg-gradient-primary text-white px-12 py-2.5 rounded-lg text-lg font-semibold">
          Buy now
        </button>
        <X size={28} strokeWidth={1.5} />
      </div>
    </div>
  );
}

export default WishlistCart;
