import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ProductCart({ product }) {
  // Determine stock status
  let stockStatus;
  if (product?.stock > 5) {
    stockStatus = {
      text: "In Stock",
      icon: <CheckCircle size={16} strokeWidth={1.5} />,
      color: "text-green-600",
    };
  } else if (product?.stock > 0) {
    stockStatus = {
      text: "Low Stock",
      icon: <AlertTriangle size={16} strokeWidth={1.5} />,
      color: "text-yellow-600",
    };
  } else {
    stockStatus = {
      text: "Out of Stock",
      icon: <XCircle size={16} strokeWidth={1.5} />,
      color: "text-red-600",
    };
  }

  return (
    <div className="w-full h-full">
      {/* Product Image Section */}
      <div className="relative">
        <Link
          href={`/product/${product?.name}-${product?.id}`}
          className="w-full h-56 border shadow-sm rounded-lg flex justify-center items-center overflow-hidden"
          aria-label={`View details of ${product?.name}`}
        >
          <Image
            src={product?.image}
            width={200}
            height={200}
            alt={`Image of ${product?.name}`}
            className={`w-full max-h-56 h-auto object-contain ${
              product?.stock > 0 ? "opacity-100" : "opacity-40"
            }`}
            loading="lazy"
          />
        </Link>

        {/* Product Details Section */}
        <div className="mt-4 space-y-2">
          {/* Product product  name */}
          <Link href={`/product/${product?.name}-${product?.id}`}>
            <h3 className="text-sm font-semibold text-gray-800 transition-all duration-300 hover:text-primary">
              {product?.name}
            </h3>
          </Link>

          {/* Product Price */}
          <p className="text-lg text-gray-600 space-x-2">
            {product?.oldPrice > 0 && (
              <span className="line-through text-[80%] text-[#ACB5BD]">
                ৳{product?.oldPrice}
              </span>
            )}
            <span className="font-bold text-secondary">
              ৳{product?.currentPrice}
            </span>
          </p>

          {/* Stock Status */}
          <p
            className={`text-sm font-semibold flex items-center gap-1 ${stockStatus.color}`}
          >
            {stockStatus.icon}
            <span>{stockStatus.text}</span>
          </p>
        </div>
      </div>

      {/* Buy Now Button (Uncomment if needed) */}
      {/* <button className="w-full h-10 bg-gradient-primary mt-4 text-white rounded-b-lg font-semibold hover:opacity-90 transition-opacity duration-300">
        Buy Now
      </button> */}
    </div>
  );
}

export default ProductCart;
