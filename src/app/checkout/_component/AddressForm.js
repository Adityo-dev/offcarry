"use client";
import { useForm } from "react-hook-form";

const AddressForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      streetAddress: "",
      email: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 text-left rounded-md min-w-[30rem] xs:min-w-full dark:text-gray-400"
    >
      <div className="grid grid-cols-2 gap-5">
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-[#38311F]"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
            className="mt-2 h-12 p-4 w-full border border-gray-300 bg-white text-[#ACB5BD] rounded-lg placeholder:text-[#ACB5BD] text-sm outline-none transition-all duration-300 focus:border-primary"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        {/* Phone Input */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-[#38311F]"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="text"
            placeholder="Your Number"
            {...register("phone", { required: "Phone is required" })}
            className="mt-2 h-12 p-4 w-full border border-gray-300 bg-white text-[#ACB5BD] rounded-lg placeholder:text-[#ACB5BD] text-sm outline-none transition-all duration-300 focus:border-primary"
          />
          {errors.phone && (
            <span className="text-red-500">{errors.phone.message}</span>
          )}
        </div>

        {/* Street Address Input */}
        <div className="col-span-2">
          <label
            htmlFor="streetAddress"
            className="block text-sm font-semibold text-[#38311F]"
          >
            Street Address <span className="text-red-500">*</span>
          </label>
          <textarea
            id="streetAddress"
            rows="4"
            placeholder="Your Street Address"
            {...register("streetAddress", {
              required: "Street Address is required",
            })}
            className="mt-2 h-auto p-4 w-full border border-gray-300 bg-white text-[#ACB5BD] rounded-lg placeholder:text-[#ACB5BD] text-sm outline-none transition-all duration-300 focus:border-primary"
          />
          {errors.streetAddress && (
            <span className="text-red-500">{errors.streetAddress.message}</span>
          )}
        </div>

        {/* Email Input */}
        <div className="col-span-full">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-[#38311F]"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            {...register("email", { required: "Email is required" })}
            className="mt-2 h-12 p-4 w-full border border-gray-300 bg-white text-[#ACB5BD] rounded-lg placeholder:text-[#ACB5BD] text-sm outline-none transition-all duration-300 focus:border-primary"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="h-12 px-16 text-[#F8F9FA] font-semibold rounded-md bg-gradient-primary outline-none transition-all duration-300 text-center"
        >
          Save Location
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
