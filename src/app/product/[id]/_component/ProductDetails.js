"use client";
import {
  AlertTriangle,
  CheckCircle,
  Facebook,
  Instagram,
  Minus,
  Plus,
  Twitter,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/components/contextApi/context/CartContext";

const currentURL = typeof window !== "undefined" ? window.location.href : "";

const socialMediaData = [
  {
    icon: <Facebook size={20} strokeWidth={1.5} />,
    url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentURL
    )}`,
  },
  {
    icon: <Twitter size={20} strokeWidth={1.5} />,
    url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentURL
    )}`,
  },
];

export default function ProductDetails({ productDetails }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [uniqueColors, setUniqueColors] = useState([]);
  const [uniqueSizes, setUniqueSizes] = useState([]);
  const [selectedStock, setSelectedStock] = useState(0);
  const [selectedVariationId, setSelectedVariationId] = useState(null);

  useEffect(() => {
    const colorSet = new Set();
    const sizeSet = new Set();

    productDetails?.variations?.forEach((variation) => {
      if (variation.color) colorSet.add(variation.color);
      if (variation.size) sizeSet.add(variation.size);
    });

    const colorArray = Array.from(colorSet);
    const sizeArray = Array.from(sizeSet);

    setUniqueColors(colorArray);
    setUniqueSizes(sizeArray);

    setSelectedColor(colorArray[0] || "");
    setSelectedSize(sizeArray[0] || "");
  }, [productDetails]);

  useEffect(() => {
    const matchedVariation = productDetails?.variations?.find(
      (v) => v.color === selectedColor && v.size === selectedSize
    );
    setSelectedStock(matchedVariation?.stock || 0);
    setSelectedVariationId(matchedVariation?.id || null);
    setQuantity(1); // Reset quantity
  }, [selectedColor, selectedSize, productDetails]);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    if (quantity < selectedStock) setQuantity(quantity + 1);
  };

  const handleBuyNow = () => {
    if (selectedStock === 0) return;
    addToCart({
      id: productDetails?.id,
      name: productDetails?.name,
      category: productDetails?.category?.name,
      price: productDetails?.retail_price,
      image: productDetails?.thumbnail,
      quantity,
      size: selectedSize,
      color: selectedColor,
      variationId: selectedVariationId,
    });
  };

  const calculateDiscountPrice = () => {
    const { retail_price, discount } = productDetails || {};
    if (!retail_price) return null;
    return (retail_price - retail_price * (discount / 100)).toFixed(2);
  };
  console.log(productDetails);

  return (
    <section>
      <div className="space-y-4 sm:space-y-6">
        {/* Category & Brand */}
        <div className="flex items-center flex-wrap gap-6 text-[#888AA0]">
          <p>
            <span>Category : </span>
            <Link
              href={`/category/${productDetails?.category?.name?.toLowerCase()}`}
              className="text-gray-900 text-sm"
            >
              {productDetails?.category?.name}
            </Link>
          </p>
          <p>
            <span>Brand : </span>
            <Link
              href={`/brand/${productDetails?.brand?.name?.toLowerCase()}`}
              className="text-gray-900 text-sm"
            >
              {productDetails?.brand?.name}
            </Link>
          </p>
        </div>

        {/* Title & Description */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl tracking-wide font-medium md:leading-[50px]">
            {productDetails?.name}
          </h1>
        </div>

        {/* Reviews & Stock Status */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4].map((_, i) => (
              <svg
                key={i}
                className="w-4 sm:w-5 h-4 sm:h-5 text-[#EFAD03] fill-[#EFAD03]"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <svg
              className="w-4 sm:w-5 h-4 sm:h-5 text-[#888AA0]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <span className="text-[#837F74] text-sm sm:text-base">
            (4.5) {productDetails?.Review?.length} Review
          </span>
          <p
            className={`flex items-center gap-1 ms-2 sm:ms-3 text-sm sm:text-base ${
              selectedStock > 5
                ? "text-green-600"
                : selectedStock > 0
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {selectedStock > 5 ? (
              <>
                <CheckCircle size={18} strokeWidth={1.5} />
                <span>In Stock</span>
              </>
            ) : selectedStock > 0 ? (
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

        {/* Price */}
        <div className="flex items-center gap-4 text-2xl sm:text-3xl font-medium">
          {productDetails?.retail_price && (
            <span className="text-[#837F74] line-through text-[80%]">
              ৳{productDetails?.retail_price}
            </span>
          )}
          <span className="text-primary">৳{calculateDiscountPrice()}</span>
        </div>

        {/* Color Selector */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex items-center gap-3">
            <label className="sm:text-lg font-medium">Color: </label>
            <select
              className="w-[200px] px-4 py-2 border rounded-md bg-white outline-none transition-all duration-300 focus:border-primary text-sm sm:text-base"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              {uniqueColors.map((color, i) => (
                <option key={i} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Size Selector */}
        {productDetails.category.name === "T-Shirts" && (
          <div className="flex items-center gap-3">
            <label className="sm:text-lg font-medium">Size: </label>
            <div className="flex gap-2">
              {uniqueSizes.map((size, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSize(size)}
                  className={`w-8 sm:w-10 h-8 sm:h-10 text-xs sm:text-sm rounded-md font-medium transition-all duration-300 ${
                    selectedSize === size
                      ? "bg-primary text-white"
                      : "border border-gray-300 hover:border-primary hover:text-primary"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity + Buttons */}
        <div className="flex gap-2 sm:gap-4 items-center">
          <div className="flex items-center border rounded-md">
            <button
              onClick={decreaseQuantity}
              className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-50"
            >
              <Minus size={20} strokeWidth={2} />
            </button>
            <div className="w-16 text-center text-lg">{quantity}</div>
            <button
              onClick={increaseQuantity}
              disabled={quantity >= selectedStock}
              className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50"
            >
              <Plus size={20} strokeWidth={2} />
            </button>
          </div>

          <Link
            href={selectedStock > 0 ? "/checkout" : "#"}
            onClick={handleBuyNow}
            className={`w-full sm:w-auto h-12 sm:px-20 flex items-center justify-center text-white font-semibold rounded-lg ${
              selectedStock > 0
                ? "bg-gradient-primary"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Buy Now
          </Link>
        </div>

        {/* SKU & Share */}
        <div className="border-t pt-4 space-y-2">
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
