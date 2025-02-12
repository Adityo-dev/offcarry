"use client";
import { useState } from "react";

export default function ProductReviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "sinan",
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

  return (
    <section className="relative">
      {/* Existing Reviews */}
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold">Review for Product</h2>
          <div className="flex items-center mt-2">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div className="ml-3">
              <p className="font-semibold text-gray-800">{review.name}</p>
              <p className="text-gray-500 text-sm">{review.date}</p>
            </div>
          </div>
          <p className="mt-2 text-gray-600">{review.comment}</p>
          <div className="mt-2 text-yellow-500">Rating: {review.rating} ★</div>
        </div>
      ))}

      {/* Add Review */}
      <h3 className="text-lg font-semibold mt-6">Add a review</h3>
      <p className="text-gray-500 text-sm">
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
      <form className="mt-4" onSubmit={handleSubmit}>
        <textarea
          className="w-full border p-2 rounded"
          rows="4"
          placeholder="Your review *"
          value={newReview.comment}
          onChange={(e) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
        ></textarea>
        <input
          type="text"
          className="w-full border p-2 rounded mt-2"
          placeholder="Name *"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
        />
        <input
          type="email"
          className="w-full border p-2 rounded mt-2"
          placeholder="Email *"
          value={newReview.email}
          onChange={(e) =>
            setNewReview({ ...newReview, email: e.target.value })
          }
        />

        <button
          type="submit"
          className="mt-4 bg-gray-800 text-white px-6 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
