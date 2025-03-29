"use client";
import { Controller, useForm } from "react-hook-form";
import { ImagePlus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Toast from "@/components/toast/Toast";

const inputFieldStyles =
  "w-full h-12 rounded-md outline-none p-3 sm:p-4 text-sm bg-white text-gray-600 border focus:border-primary transition-all duration-300";

function PreOrder() {
  const [fileName, setFileName] = useState("No Image Added");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      file: null, // Set default value for file input
    },
  });

  // ফাইল আপলোড ফাংশন
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ROUT_URL}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data.fileUrl; // সার্ভার থেকে ফিরে আসা URL
    } else {
      throw new Error("Failed to upload file");
    }
  };

  // ফর্ম সাবমিট হ্যান্ডলার
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      let productImageUrl = "";

      // ফাইল আপলোড করুন যদি থাকে
      if (data.file) {
        productImageUrl = await uploadFile(data.file);
      }

      // ফর্ম ডাটা প্রস্তুত করুন
      const formData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        productDetails: data.productDetails,
        productImage: productImageUrl, // আপলোড করা ফাইলের URL
        productLink: data.productLink,
      };

      // প্রি-অর্ডার সাবমিট করুন
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ROUT_URL}/shop/pre-order`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        Toast({
          type: "success",
          message: "🎉 Pre-order submitted successfully!",
        });
        reset();
        setFileName("No Image Added");
      } else {
        Toast({ type: "error", message: "❌ Failed to submit Pre-order" });
      }
    } catch (error) {
      Toast({
        type: "error",
        message: "⚠️ Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-4">
      <div className="w-full sm:max-h-[600px] h-full bg-[#B2E4DB] rounded-md relative flex flex-col lg:flex-row overflow-hidden sm:pt-6">
        {/* Image Section (Always Visible) */}
        <div className="w-full lg:w-[35%] flex justify-center items-end">
          <Image
            src="/images/preOrder.png"
            width={400}
            height={400}
            alt="Pre Order Illustration - Order Your Products Before Release"
            className="w-auto h-auto object-contain hidden lg:block"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-[65%] py-6 px-3 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-start text-[#38311F] font-semibold mb-6 ">
            Pre-Order Your Favorite <br /> Product Now
          </h2>

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
              <Controller
                name="file"
                control={control}
                defaultValue={null}
                render={({ field }) => (
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
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            setFileName(file.name); // ফাইলের নাম সেট করুন
                            field.onChange(file); // react-hook-form-এ ফাইল ডাটা সেট করুন
                          } else {
                            setFileName("No Image Added");
                            field.onChange(null); // ফাইল ডাটা রিসেট করুন
                          }
                        }}
                      />
                    </div>
                  </div>
                )}
              />

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
              className="sm:max-w-[250px] w-full h-11 mx-auto lg:mx-0 flex items-center justify-center rounded-md bg-gradient-primary text-white font-semibold shadow-md hover:opacity-90 transition-all"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Pre-Order Now"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PreOrder;
