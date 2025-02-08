import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="rounded-xl bg-white shadow-sm border-2 border-[#10B982] border-l-[#07B7C5] my-4">
      <div className="relative">
        {/* Action Buttons */}
        <div className="absolute left-2 top-2 space-y-2">
          <button className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-105">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 text-teal-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-105">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </div>

        {/* New Badge */}
        <div className="absolute right-2 top-2">
          <span className="rounded-md bg-violet-500 px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-white">
            New
          </span>
        </div>

        {/* Product Image */}
        <Image
          width={200}
          height={200}
          src={product.image ?? "/placeholder.svg"}
          alt="Men's full sleeve Jacket"
          className="mx-auto h-48 sm:h-64 md:h-72 w-auto object-cover m-2"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 mx-auto flex flex-col items-center">
        <h3 className="text-lg sm:text-xl font-medium text-gray-900 text-center">
          Men's full sleeve Jacket
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-base sm:text-lg font-medium text-gray-400 line-through">
            $130.00
          </span>
          <span className="text-xl sm:text-2xl font-bold text-teal-500">
            $125.00
          </span>
        </div>

        <div className="mt-2 flex items-center gap-1">
          <div className="flex text-yellow-400">
            {"★".repeat(4)}
            {"☆".repeat(1)}
          </div>
          <span className="text-xs sm:text-sm text-gray-500">(25)</span>
        </div>
      </div>

      <button className="mt-4 sm:mt-7 sm:py-4 w-full py-4 rounded-br-lg rounded-bl-lg bg-gradient-to-r from-[#07B7C5] to-[#10B982] text-center text-base sm:text-lg font-bold text-white shadow-md hover:from-[#06A7B5] hover:to-[#0FA972]">
        Buy Now
      </button>
    </div>
  );
}
