"use client";
import Toast from "@/components/toast/Toast";
import { User } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ProductReviews({ initialReviewData, productId }) {
  const [rating, setRating] = useState(1);
  const [hover, setHover] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reviewData, setReviewData] = useState(initialReviewData);
const session = useSession();
console.log(session);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: session?.data?.user?.name,
      email: session?.data?.user?.email,
      userId: session?.data?.user?.sub,
    },
  });
  const onSubmit = async (data) => {
    setLoading(true);
    const newReview = {
      email: data.email,
      name: data.name,
      userId: data.userId,
      productId: productId,
      rating: rating,
      comment: data.comment,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ROUT_URL}/shop/reviews`,
        {
          method: "POST",
          body: JSON.stringify(newReview),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        Toast({
          type: "success",
          message: "🎉 Review submitted successfully!",
        });
        reset();
        setRating(1);
        // Add the new review to the existing reviews
        setReviewData([...reviewData, newReview]);
      } else {
        Toast({ type: "error", message: "❌ Failed to submit review." });
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

  // FORM INPUT FIELD STYLES
  const formInputFieldStyles =
    "w-full h-12 p-4 text-sm border rounded-lg outline-none transition-all duration-300 focus:border-primary";

  return (
    <section className="relative">
      {/* Existing Reviews */}
      <h2 className="font-semibold">Review for Product</h2>
      <div className="space-y-6">
        {reviewData.map((review, ind) => (
          <div key={ind}>
            <div className="flex items-center mt-4">
              <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={30} strokeWidth={1.5} />
              </div>
              <div className="ml-2 sm:ml-3">
                <div className="text-sm sm:text-base text-yellow-500">
                  Rating: {review.rating}
                </div>
                <p className="flex items-center gap-2 text-xs sm:text-sm">
                  <span>{review.name}</span>
                  <span>--</span>
                  <span className="text-xs">{review?.createdAt?.split("T")[0]}</span>
                </p>
              </div>
            </div>
            <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-600">
              {review.comment}
            </p>
          </div>
        ))}
      </div>

      {/* Add Review */}
      <h3 className="text-lg font-semibold mt-6 border-b pb-4">Add a review</h3>
      <p className="text-gray-500 text-sm mt-4">
        Your email address will not be published. Required fields are marked *
      </p>

      {/* Star Rating */}
      <div className="flex items-center mt-2">
        <p className="mr-2 font-medium">Your rating *</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`cursor-pointer text-xl ${
              hover >= star || rating >= star
                ? "text-yellow-500"
                : "text-gray-300"
            }`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review Form */}
      <form className="mt-4 space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          name="comment"
          className={`${formInputFieldStyles} w-full h-full`}
          rows="6"
          placeholder="Your review *"
          {...register("comment", { required: true })}
        />
        <input
          name="name"
          type="text"
          className={formInputFieldStyles}
          placeholder="Name *"
          {...register("name", { required: true })}
        />
        <input
          name="email"
          type="email"
          className={formInputFieldStyles}
          placeholder="Email *"
          {...register("email", { required: true })}
        />
        <button
          type="submit"
          className="px-12 py-3 bg-gradient-primary text-white rounded-lg text-lg font-semibold"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
}
