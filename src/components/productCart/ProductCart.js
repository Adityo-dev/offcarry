import Image from "next/image";
import Link from "next/link";

function ProductCart({ product }) {
  return (
    <div className="max-w-[325px] w-full h-[350px] bg-[#F6F6F6] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* PRODUCTS IMAGE */}
      <Link href={"#"} className="w-full h-60 flex justify-center items-center">
        <Image
          src={product?.image}
          width={200}
          height={200}
          alt={product?.title || "Product Image"}
          className="max-w-60 w-full max-h-60 h-auto object-contain"
        />
      </Link>
      {/* PRODUCTS DETAILS */}
      <div className="mt-4 text-center space-y-2">
        {/* PRODUCTS TITLE */}
        <h3 className="text-lg font-medium text-gray-800">
          {product?.title || "Product Title"}
        </h3>

        {/* PRODUCTS PRICE*/}
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
  );
}

export default ProductCart;
