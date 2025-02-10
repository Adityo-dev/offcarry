import { MoveRight } from "lucide-react";
import { useState } from "react";

export default function CheckoutCard() {
  const [coupon, setCoupon] = useState("");
  const [subtotal, setSubtotal] = useState(48.9);
  const [discount, setDiscount] = useState(5.0);
  const [shipping, setShipping] = useState(0.0);
  const total = subtotal - discount + shipping;

  const handleSubmit = () => {
    console.log({ coupon, subtotal, discount, shipping, total });
  };

  return (
    <div className="mx-auto p-6 bg-[#FAFAFA] rounded-lg shadow-lg mt-6">
      <h2 className="text-gray-700 font-semibold mb-2">Apply Coupon</h2>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="w-full h-12 p-2 outline-none text-gray-700"
        />
        <button
          className="w-16 h-12 flex items-center justify-center bg-teal-500  text-white"
          onClick={handleSubmit}
        >
          <MoveRight size={20} strokeWidth={2} />
        </button>
      </div>
      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal (3 Items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span className="text-red-500">-${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping Charge</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span className="text-teal-500 font-semibold">${total.toFixed(2)}</span>
      </div>
      <button
        className="mt-4 w-full bg-gradient-to-r from-teal-400 to-green-400 text-white py-2 rounded-xl text-lg shadow-md hover:opacity-90"
        onClick={handleSubmit}
      >
        Checkout
      </button>
    </div>
  );
}
