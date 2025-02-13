import { AlertTriangle, CheckCircle, Store, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ProductCart({ product }) {
  return (
    <div className="w-full h-full">
      {/* Product Image Section */}
      <div className="relative">
        <Link
          href={`/product/${product?.title}`}
          className="w-full h-52 border shadow-sm rounded-lg flex justify-center items-center overflow-hidden"
        >
          <Image
            src={product?.image}
            width={200}
            height={200}
            alt={`Image of ${product?.title || "Product"}`}
            className={`w-full max-h-52 h-auto object-contain ${
              product?.stock > 0 ? "opacity-100" : "opacity-40"
            }`}
            loading="lazy"
          />
        </Link>

        {/* Product Details Section */}
        <div className="mt-4 space-y-2">
          {/* Product Title */}
          <Link href={`/product/${product?.title}`}>
            <h3 className="text-sm font-semibold text-gray-800 transition-all duration-300 hover:text-primary">
              {product?.title || "Product Title"}
            </h3>
          </Link>

          {/* Product Price */}
          <p className="text-lg text-gray-600 space-x-2">
            <span className="line-through text-[80%] text-[#ACB5BD]">
              ৳{product?.stock > 0 ? product?.oldPrice : "00"}
            </span>
            <span className="font-bold text-secondary">
              ৳{product?.stock > 0 ? product?.currentPrice : "00"}
            </span>
          </p>

          <p
            className={`text-sm flex items-center gap-1 ${
              product?.stock > 5
                ? "text-green-600"
                : product?.stock > 0
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {product?.stock > 5 ? (
              <>
                <CheckCircle size={16} strokeWidth={1.5} />
                <span>In Stock</span>
              </>
            ) : product?.stock > 0 ? (
              <>
                <AlertTriangle size={16} strokeWidth={1.5} />
                <span>Low Stock</span>
              </>
            ) : (
              <>
                <XCircle size={16} strokeWidth={1.5} />
                <span>Out of Stock</span>
              </>
            )}
          </p>
        </div>
      </div>

      {/* Buy Now Button */}
      {/* <button className="w-full h-10 bg-gradient-primary mt-4 text-white rounded-b-lg font-semibold hover:opacity-90 transition-opacity duration-300">
        Buy Now
      </button> */}
    </div>
  );
}

export default ProductCart;
