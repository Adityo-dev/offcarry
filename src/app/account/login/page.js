"use client";

import { useForm } from "react-hook-form";
import { LockKeyhole, User } from "lucide-react";
import Link from "next/link";
import { signIn } from "next-auth/react";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("Submitted Data:", data);
    try {
      const response = await signIn("credentials", data);
      if (response) {
        console.log("User logged in successfully:", response);
      } else {
        console.error("Failed to log in user:", response.error);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  // FORM INPUT FIELD STYLES
  const formInputFieldStyles =
    "w-full h-12 pl-10 text-sm border rounded-lg outline-none transition-all duration-300 focus:border-primary";
  const formInputFieldIconStyles =
    "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400";

  return (
    <section className="flex items-center justify-center py-28 xl:py-20 px-4">
      <div className="bg-white p-6 sm:p-8 shadow-2xl rounded-lg max-w-lg w-full text-center">
        <h2 className="text-3xl font-semibold mb-2">Hello Again</h2>
        <p className="text-sm sm:text-base">
          Enter your credentials to access your account.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 sm:space-y-4 mt-4 sm:mt-6"
        >
          <div>
            <div className="relative">
              <User size={20} className={formInputFieldIconStyles} />
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
                className={formInputFieldStyles}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm text-start mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <LockKeyhole size={20} className={formInputFieldIconStyles} />
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
                className={formInputFieldStyles}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm text-start mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <Link href={""} className="text-secondary hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-primary text-white py-3 rounded-lg text-lg font-semibold"
          >
            Login In
          </button>
        </form>

        <p className="text-gray-600 mt-4 text-sm">
          Don’t have an account?
          <Link
            href="/account/register"
            className="text-secondary hover:underline ms-2"
          >
            Register Now
          </Link>
        </p>
      </div>
    </section>
  );
}
