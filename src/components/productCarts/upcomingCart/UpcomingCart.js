import { AlertTriangle, CheckCircle, Store, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function UpcomingCart({ product }) {
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

          {/* Product Price (TBD) */}
          <p className="text-gray-600 font-semibold">
            <span>Price:</span> <span className="text-sm">TBD</span>
          </p>

          {/* Stock Status (Coming Soon) */}
          <p className="text-sm font-semibold flex items-center gap-1 text-blue-600">
            <AlertTriangle size={16} strokeWidth={1.5} />
            <span>Coming Soon</span>
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

export default UpcomingCart;
