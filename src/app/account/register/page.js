"use client";

import { useForm } from "react-hook-form";
import { LockKeyhole, Mail, User } from "lucide-react";

import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  console.log("Form submitted:");
  const onSubmit = async (data) => {
    try {
      const response = await signIn("credentials", data);
      if (response) {
        console.log("User registered successfully:", response);
      } else {
        console.error("Failed to register user:", response.error);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  // FORM INPUT FIELD STYLES
  const formInputFieldStyles =
    "w-full h-12 pl-10 text-sm border rounded-lg outline-none transition-all duration-300 focus:border-primary";
  const formInputFieldIconStyles =
    "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400";

  return (
    <section className="flex items-center justify-center py-28 xl:py-20 px-4 ">
      <div className="bg-white p-6 sm:p-8 shadow-2xl rounded-lg max-w-lg w-full text-center">
        <h2 className="text-3xl font-semibold mb-2">Register Now!</h2>
        <p className="text-sm sm:text-base">
          You can signup with you social account below
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 sm:space-y-4 mt-4 sm:mt-6"
        >
          <div>
            <div className="relative">
              <User size={20} className={formInputFieldIconStyles} />
              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
                className={formInputFieldStyles}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm text-start mt-2">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <Mail size={19} className={formInputFieldIconStyles} />
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

          <div>
            <div className="relative">
              <LockKeyhole size={20} className={formInputFieldIconStyles} />
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className={formInputFieldStyles}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm text-start mt-2">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-primary text-white py-3 rounded-lg text-lg font-semibold"
          >
            Sign In
          </button>
        </form>

        <p className="text-gray-600 mt-4 text-sm">
          Already have an account?
          <Link
            href="/account/login"
            className="text-secondary hover:underline ms-2"
          >
            Login Now
          </Link>
        </p>
      </div>
    </section>
  );
}
