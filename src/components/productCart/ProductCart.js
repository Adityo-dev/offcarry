import Image from "next/image";
import Link from "next/link";

function ProductCart({ product }) {
  return (
    <div className="w-full max-w-[325px] bg-[#F6F6F6] border border-primary rounded-lg ">
      {/* Product Image Section */}
      <div className="px-6 mt-6">
        <Link
          href={`/product/${product?.title}`}
          className="w-full h-52 flex justify-center items-center"
        >
          <Image
            src={product?.image}
            width={200}
            height={200}
            alt={`Image of ${product?.title || "Product"}`}
            className="max-w-52 w-full max-h-52 h-auto object-contain"
            loading="lazy"
          />
        </Link>

        {/* Product Details Section */}
        <div className="mt-4 text-center space-y-2">
          {/* Product Title */}
          <h3 className="text-lg font-medium text-gray-800 truncate">
            {product?.title || "Product Title"}
          </h3>

          {/* Product Price */}
          <p className="text-gray-600 text-lg space-x-2">
            <span className="line-through text-[#ACB5BD]">
              ৳{product?.oldPrice || "0"}
            </span>
            <span className="font-bold text-primary">
              ৳{product?.currentPrice || "0"}
            </span>
          </p>
        </div>
      </div>

      {/* Buy Now Button */}
      <button className="w-full h-10 bg-gradient-primary mt-4 text-white rounded-b-lg font-semibold hover:opacity-90 transition-opacity duration-300">
        Buy Now
      </button>
    </div>
  );
}

export default ProductCart;
