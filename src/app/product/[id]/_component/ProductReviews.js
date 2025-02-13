"use client";
import { User } from "lucide-react";
import { useState } from "react";

export default function ProductReviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Aditto Dev Barmon (koushik)",
      date: "November 30, 2022",
      comment:
        "Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      rating: 4,
    },
    {
      id: 2,
      name: "Aditto Dev Barmon (koushik)",
      date: "November 30, 2022",
      comment:
        "Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      rating: 4,
    },
    {
      id: 3,
      name: "Aditto Dev Barmon (koushik)",
      date: "November 30, 2022",
      comment:
        "Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      rating: 4,
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    comment: "",
    rating: 1,
  });

  const [rating, setRating] = useState(1);
  const [hover, setHover] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const review = {
      id: reviews.length + 1,
      name: newReview.name,
      date: new Date().toLocaleDateString(),
      comment: newReview.comment,
      rating: rating,
    };

    setReviews([...reviews, review]);

    setNewReview({
      name: "",
      email: "",
      comment: "",
      rating: 1,
    });
    setRating(1);
  };

  // FORM INPUT FIELD STYLES
  const formInputFieldStyles =
    "w-full h-12 p-4 text-sm border rounded-lg outline-none transition-all duration-300 focus:border-primary";
  const formInputFieldIconStyles =
    "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400";

  return (
    <section className="relative">
      {/* Existing Reviews */}
      <h2 className="font-semibold">Review for Product</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id}>
            <div className="flex items-center mt-4">
              <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={30} strokeWidth={1.5} />
              </div>
              <div className="ml-2 sm:ml-3">
                <div className="text-sm sm:text-base text-yellow-500">
                  Rating: {review.rating} ★
                </div>
                <p className="flex items-center gap-2 text-xs sm:text-sm">
                  <span>{review.name}</span>
                  <span>--</span>
                  <span className="text-xs">{review.date}</span>
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
      <h3 className="text-lg font-semibold mt-6 border-b pb-4 ">
        Add a review
      </h3>
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
      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
        <textarea
          className={`${formInputFieldStyles} w-full h-full`}
          rows="6"
          placeholder="Your review *"
          value={newReview.comment}
          onChange={(e) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
        />
        <input
          type="text"
          className={formInputFieldStyles}
          placeholder="Name *"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
        />
        <input
          type="email"
          className={formInputFieldStyles}
          placeholder="Email *"
          value={newReview.email}
          onChange={(e) =>
            setNewReview({ ...newReview, email: e.target.value })
          }
        />

        <button
          type="submit"
          className="px-12 py-3 bg-gradient-primary text-white rounded-lg text-lg font-semibold"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
