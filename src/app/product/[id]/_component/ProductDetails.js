"use client";
import {
  AlertTriangle,
  CheckCircle,
  Facebook,
  Instagram,
  Minus,
  Plus,
  TriangleAlert,
  Twitter,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import { useCart } from "@/components/contextApi/context/CartContext";

// SOCIAL MEDIA DATA
const socialMediaData = [
  {
    icon: <Facebook size={20} strokeWidth={1.5} />,
    url: "https://www.facebook.com/TrustNestStore",
  },
  { icon: <Twitter size={20} strokeWidth={1.5} />, url: "" },
  { icon: <Instagram size={20} strokeWidth={1.5} />, url: "" },
];

export default function ProductDetails({ productDetails }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
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
    addToCart({
      id: productDetails?.id,
      name: productDetails?.name,
      category: "Electronic",
      price: 16.3,
      image: "/images/product9.jpg",
    });
  };

  return (
    <section>
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center flex-wrap gap-6 text-[#888AA0]">
          <p>
            <span>Category : </span>
            <Link href={"#"} className="text-gray-900 text-sm">
              {productDetails?.category?.name}
            </Link>
          </p>
          <p>
            <span>Brand : </span>
            <Link href={"#"} className="text-gray-900 text-sm">
              {productDetails?.brand?.name}
            </Link>
          </p>
        </div>
        {/* PRODUCT NAME AND TITLE  */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl tracking-wide font-medium md:leading-[50px]">
            {productDetails?.name}
          </h1>
          <p className="text-sm sm:text-base leading-6">
            {productDetails?.description}
          </p>
        </div>
        {/* PRODUCT RATING */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4].map((_, i) => (
              <svg
                key={i}
                className="w-4 sm:w-5 h-4 sm:h-5 text-[#EFAD03] fill-[#EFAD03]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <svg
              className="w-4 sm:w-5 h-4 sm:h-5 text-[#888AA0]"
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
          <span className="text-[#837F74] text-sm sm:text-base">
            (4.5) {productDetails?.Review?.length} Review
          </span>
          {/* PRODUCT STOCK */}
          <p
            className={`flex items-center flex-wrap gap-1 ms-2 sm:ms-3 text-sm sm:text-base ${
              productDetails?.stock > 5
                ? "text-green-600"
                : productDetails?.stock > 0
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {productDetails?.stock > 5 ? (
              <>
                <CheckCircle size={18} strokeWidth={1.5} />
                <span>In Stock</span>
              </>
            ) : productDetails?.stock > 0 ? (
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
        </div>

        {/* PRODUCT PRICE */}
        <div className="flex items-center gap-4 text-2xl sm:text-3xl font-medium">
          {productDetails?.retail_price && (
            <span className="text-[#837F74] line-through text-[80%]">
              ৳{productDetails?.retail_price}
            </span>
          )}
          {productDetails?.retail_price && (
            <span className="text-primary">
              ৳
              {(
                productDetails?.retail_price -
                productDetails?.retail_price * (productDetails?.discount / 100)
              ).toFixed(2)}
            </span>
          )}
        </div>

        {/* COLOR SELECTOR  */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex items-center gap-3">
            <label className="sm:text-lg font-medium">Color: </label>
            <div>
              <select
                className="w-[200px] px-4 py-2 border rounded-md bg-white outline-none transition-all duration-300 focus:border-primary text-sm sm:text-base"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                {productDetails?.variations?.map((variation) => {
                  return (
                    <option key={variation.id} value={variation.color}>
                      {variation.color}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        {/* PRODUCT SIZE */}
        <div className="flex items-center gap-3">
          <label className="sm:text-lg font-medium">Size: </label>
          <div className="flex gap-2">
            {productDetails?.variations?.map((size) => (
              <button
                key={size?.id}
                onClick={() => setSelectedSize(size?.size)}
                className={`w-8 sm:w-10 h-8 sm:h-10 text-xs sm:text-sm rounded-md font-medium transition-all duration-300 ${
                  selectedSize === size?.size
                    ? "bg-primary text-white"
                    : "border border-gray-300 hover:border-primary hover:text-primary"
                }`}
              >
                {size?.size}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT COUNTER AND BUY NOW BTN */}
        <div className="flex gap-2 sm:gap-4 items-center">
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
          {/* Add To Cart BTN */}
          <AddToCartButton />

          {/* BUY NOW BTN */}
          <Link
            href={"/checkout"}
            onClick={handleBuyNow}
            className="w-full sm:w-auto h-12 sm:px-20 flex items-center justify-center text-white font-semibold rounded-lg bg-gradient-primary outline-none"
          >
            Buy Now
          </Link>
        </div>

        <div className="border-t pt-4 space-y-2">
          {/* SKU*/}
          {productDetails?.sku && (
            <p>
              <span className="text-sm sm:text-base font-medium pr-2">
                SKU:
              </span>
              <span className="text-sm sm:text-base text-secondary">
                {productDetails?.sku}
              </span>
            </p>
          )}
          {/* SOCIAL MEDIA */}
          <div className="flex items-center gap-2">
            <p className="text-sm sm:text-base font-medium">Share:</p>
            <p className="flex items-center gap-3">
              {socialMediaData.map((media, ind) => (
                <Link
                  href={media?.url}
                  key={ind}
                  target="_blank"
                  className="transition-all duration-300 hover:text-primary"
                >
                  {media?.icon}
                </Link>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
