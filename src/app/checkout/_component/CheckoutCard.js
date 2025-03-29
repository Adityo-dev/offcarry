import { MoveRight } from "lucide-react";
import { useState } from "react";

export default function CheckoutCard({ selectedItems }) {
  const selectedItemsCount = selectedItems.length;
  const subtotal = selectedItems.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );

  const coupons = {
    SAVE10: 10,
    SAVE20: 20,
    SAVE50: 50,
  };

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const shipping = selectedItemsCount > 0 ? 70 : 0;

  // Apply Coupon Function
  const applyCoupon = () => {
    if (coupons[coupon]) {
      setDiscount(coupons[coupon]);
    } else {
      setDiscount(0);
    }
  };

  // Total Price
  const total = subtotal - discount + shipping;

  const handleSubmit = () => {
    // console.log({ coupon, subtotal, discount, shipping, total });
  };

  return (
    <section className="w-full mx-auto p-4 sm:p-6 bg-[#FAFAFA] rounded-lg shadow-lg mt-6">
      <h2 className="text-gray-700 font-semibold mb-2">Apply Coupon</h2>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="w-full h-12 p-4 outline-none text-gray-700"
        />
        <button
          className="w-16 h-12 flex items-center justify-center bg-teal-500  text-white"
          onClick={applyCoupon}
        >
          <MoveRight size={20} strokeWidth={2} />
        </button>
      </div>
      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal ({selectedItemsCount} Items)</span>
          <span>৳{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span className="text-red-500">-৳{discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping Charge</span>
          <span>৳{shipping.toFixed(2)}</span>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span className="text-teal-500 font-semibold">৳{total.toFixed(2)}</span>
      </div>
      <button
        className="mt-4 w-full bg-gradient-to-r from-teal-400 to-green-400 text-white py-2 rounded-xl text-lg shadow-md hover:opacity-90"
        onClick={handleSubmit}
      >
        Checkout
      </button>
    </section>
  );
}
