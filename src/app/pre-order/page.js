export default function PreOrder() {
  return (
    <div className="flex justify-center items-center py-12 bg-gray-100">
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
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Product Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="Your Address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
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
