"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImagePlus } from "lucide-react";

const inputFieldStyles =
  "w-full h-12 rounded-md outline-none p-3 sm:p-4 text-sm bg-white text-gray-600 border focus:border-blue-500 transition-all duration-300";

export default function PreOrder() {
  const [fileName, setFileName] = useState("No Image Added");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ROUT_URL}/shop/pre-order`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) throw new Error("Failed to submit pre-order");

      alert("✅ Pre-order submitted successfully!");
      reset();
      setFileName("No Image Added");
    } catch (error) {
      console.error("Error:", error);
      alert("❌ An error occurred while submitting the pre-order.");
    } finally {
      setLoading(false);
    }
  };

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

        <form className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: "name", type: "text", placeholder: "Your Name" },
              { name: "email", type: "email", placeholder: "Your Email" },
              { name: "phone", type: "text", placeholder: "Phone Number" },
              { name: "address", type: "text", placeholder: "Your Address" },
            ].map(({ name, type, placeholder }) => (
              <div key={name}>
                <input
                  type={type}
                  placeholder={placeholder}
                  className={inputFieldStyles}
                  {...register(name, {
                    required: `${placeholder} is required`,
                  })}
                />
                {errors[name] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[name].message}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Product Details */}
          <div>
            <textarea
              placeholder="Enter Your Product Details"
              className="w-full p-3 sm:p-4 text-sm rounded-md outline-none border focus:border-blue-500 transition-all duration-300"
              rows="4"
              {...register("productDetails", {
                required: "Product details are required",
              })}
            ></textarea>
            {errors.productDetails && (
              <p className="text-red-500 text-sm mt-1">
                {errors.productDetails.message}
              </p>
            )}
          </div>

          {/* File Upload & Product Link */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* File Upload */}
            <div className="relative flex items-center border border-gray-300 bg-[#E5E5E5] rounded-md h-12 overflow-hidden">
              <div className="w-[20%] h-full flex items-center justify-center bg-[#D8D8D8]">
                <ImagePlus
                  size={24}
                  strokeWidth={1.75}
                  className="text-gray-500"
                />
              </div>
              <div className="w-[80%] px-4 text-sm text-gray-600">
                <label htmlFor="file" className="cursor-pointer block">
                  {fileName}
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="hidden"
                  onChange={(e) =>
                    setFileName(e.target.files[0]?.name || "No Image Added")
                  }
                  {...register("file")}
                />
              </div>
            </div>

            {/* Product Link */}
            <div>
              <input
                type="text"
                placeholder="Add Product Link"
                className={inputFieldStyles}
                {...register("productLink", {
                  required: "Product link is required",
                })}
              />
              {errors.productLink && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.productLink.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-11 flex items-center justify-center rounded-md bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-all"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Pre-Order Now"}
          </button>
        </form>

        {/* Extra Info */}
        <div className="mt-6 text-center text-gray-600">
          <p>✨ Enjoy Exclusive Discounts on Pre-Orders!</p>
          <p>🚚 Free Shipping for Early Buyers</p>
          <p>📦 Hassle-Free Returns & Easy Refunds</p>
        </div>
      </div>
    </div>
  );
}
