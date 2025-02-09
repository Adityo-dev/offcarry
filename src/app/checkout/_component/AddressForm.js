"use client";

// import {
//   useAddBrandMutation,
//   useUpdateBrandMutation,
// } from "@/store/slices/brandApi";
// import { useFetchCategoriesQuery } from "@/store/slices/CategoryApi";
import { useForm } from "react-hook-form";
// import { AiFillCloseCircle } from "react-icons/ai";
// import { BiCloudUpload } from "react-icons/bi";
// import { toast } from "react-toastify";

const AddressForm = ({ brand, isEdit, setShowForm }) => {

  // const [
  //   addBrand,
  //   { isLoading: addLoading, isSuccess: addSuccess, isError: addError },
  // ] = useAddBrandMutation();

  // const [
  //   updateBrand,
  //   {
  //     isLoading: updateLoading,
  //     isSuccess: updateSuccess,
  //     isError: updateError,
  //   },
  // ] = useUpdateBrandMutation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: brand?.name || "",
      description: brand?.description,
      logo: brand?.logo || "",
    },
  });


  // useEffect(() => {
  //   if (addSuccess) {
  //     toast.success("Brand added successfully!");
  //     setShowForm();
  //   } else if (updateSuccess) {
  //     toast.success("Brand updated successfully!");
  //     setShowForm();
  //   }

  //   if (addError) {
  //     toast.error(
  //       `Failed to add brand: ${addError.message || "Unknown error occurred"}`
  //     );
  //   } else if (updateError) {
  //     toast.error(
  //       `Failed to update brand: ${
  //         updateError.message || "Unknown error occurred"
  //       }`
  //     );
  //   }
  // }, [addSuccess, updateSuccess, addError, updateError]);

  const onSubmit = async (data) => {
    if (isEdit) {
      updateBrand({ ...data, "id": brand.id });
    } else {
      addBrand({ ...data, "logo": "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 px-10 text-left rounded-md min-w-[30rem] xs:min-w-full dark:text-gray-400"
    >

      <div className="grid grid-cols-2 gap-5">
        {/* Name Input */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-bold text-gray-700"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          {...register("name", { required: "Name is required" })}
          className="mt-1 h-8 p-5 w-full border border-gray-300 rounded-md shadow-sm bg-inherit placeholder:text-gray-600 dark:placeholder:text-gray-500 sm:text-sm"
        />
        {errors.name && (
          <span className="text-red-500">{errors?.name?.message}</span>
        )}
      </div>

      {/* Phone Input */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-bold text-gray-700"
        >
          Phone Number
        </label>
        <input
          id="phone"
          type="text"
          placeholder="Your Number"
          {...register("phone", { required: "Phone is required" })}
          className="mt-1 h-8 p-5 w-full border border-gray-300 rounded-md shadow-sm bg-inherit placeholder:text-gray-600 dark:placeholder:text-gray-500 sm:text-sm"
        />
        {errors.phone && (
          <span className="text-red-500">{errors?.phone?.message}</span>
        )}
      </div>

      {/* Street Address Input */}
      <div>
        <label
          htmlFor="address"
          className="block text-sm font-bold text-gray-700"
        >
          Street Address
        </label>
        <input
          id="address"
          type="text"
          placeholder="Your Address"
          {...register("address", { required: "Address is required" })}
          className="mt-1 h-8 p-5 w-full border border-gray-300 rounded-md shadow-sm bg-inherit placeholder:text-gray-600 dark:placeholder:text-gray-500 sm:text-sm"
        />
        {errors.address && (
          <span className="text-red-500">{errors?.address?.message}</span>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-bold text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="text"
          placeholder="Your Email"
          {...register("email", { required: "Email is required" })}
          className="mt-1 h-8 p-5 w-full border border-gray-300 rounded-md shadow-sm bg-inherit placeholder:text-gray-600 dark:placeholder:text-gray-500 sm:text-sm"
        />
        {errors.email && (
          <span className="text-red-500">{errors?.email?.message}</span>
        )}
      </div>
      </div>


      <button
        type="submit"
        className="h-12 px-12 text-white font-semibold rounded-md bg-gradient-to-r from-[#07B7C5] to-[#10B982] focus:outline-none transition-all duration-300 text-center"
      >
        Save Location
      </button>
    </form>
  );
};

export default AddressForm;
