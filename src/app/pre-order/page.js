import { ImagePlus } from "lucide-react";

const inputFieldStyles =
  "w-full h-12 rounded-md outline-none p-3 sm:p-4 text-sm bg-white text-gray-600 border focus:border-primary transition-all duration-300";

export default function PreOrder() {
  return (
    <div className="flex justify-center items-center py-14 bg-gray-100 px-4">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Pre-Order Now
        </h2>
        <p className="text-gray-500 text-center mb-4">
          Fill in your details to pre-order your favorite products before they
          run out!
        </p>

        <div className="bg-blue-100 text-blue-800 p-3 rounded-lg text-center font-medium">
          🔥 Limited Stock Available! Be the first to grab your exclusive deal.
        </div>

        <form className="space-y-4 mt-4">
          {/* Grid Layout for Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className={inputFieldStyles}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className={inputFieldStyles}
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className={inputFieldStyles}
              required
            />
            <input
              type="text"
              placeholder="Your Address"
              className={inputFieldStyles}
              required
            />
          </div>

          {/* Textarea for Product Details */}
          <textarea
            placeholder="Enter Your Product Details"
            className="w-full p-3 sm:p-4 text-sm rounded-md outline-none border focus:border-primary transition-all duration-300"
            rows="4"
            required
          ></textarea>

          {/* File Upload and Product Link Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
            {/* File Upload Section */}
            <div className="relative flex items-center border border-gray-300 bg-[#E5E5E5] rounded-md h-12 overflow-hidden">
              {/* Icon Section */}
              <div className="w-[20%] h-full flex items-center justify-center bg-[#D8D8D8]">
                <ImagePlus
                  size={24}
                  strokeWidth={1.75}
                  className="text-gray-500"
                />
              </div>
              {/* Input Section */}
              <div className="w-[80%] px-4 text-sm text-gray-600">
                <label htmlFor="file" className="cursor-pointer block">
                  No Image Added
                </label>
                <input type="file" id="file" name="file" className="hidden" />
              </div>
            </div>

            {/* Product Link Input */}
            <input
              type="text"
              name="link"
              placeholder="Add Product Link"
              className={inputFieldStyles}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-11 flex items-center justify-center rounded-md bg-gradient-primary text-white font-semibold shadow-md hover:opacity-90 transition-all"
          >
            Pre-Order Now
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            ✨ Enjoy Exclusive Discounts on Pre-Orders!
          </p>
          <p className="text-gray-600">🚚 Free Shipping for Early Buyers</p>
          <p className="text-gray-600">📦 Hassle-Free Returns & Easy Refunds</p>
        </div>
      </div>
    </div>
  );
}
