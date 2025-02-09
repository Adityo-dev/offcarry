import { useState } from "react";
import { Trash } from "lucide-react";
import Image from "next/image";

const paymentMethods = [
  {
    id: 1,
    type: "MasterCard",
    lastDigits: "014*****326",
    icon: "/images/mastercard.png",
  },
  {
    id: 2,
    type: "PayPal",
    lastDigits: "014*****326",
    icon: "/images/paypal.png",
  },
  {
    id: 3,
    type: "PayPal",
    lastDigits: "014*****326",
    icon: "/images/paypal.png",
  },
];

export default function PaymentOptions() {
  const [methods, setMethods] = useState(paymentMethods);
  const [selected, setSelected] = useState(paymentMethods[0].id);

  const removeMethod = (id) => {
    setMethods(methods.filter((method) => method.id !== id));
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-lg font-semibold">Payment Options</h2>
      </div>
      <div className="mt-4 space-y-4 p-3 rounded-lg bg-[#E5F7FF]">
        {methods.map((method) => (
          <div key={method.id} className="flex items-center justify-between border-b pb-2 pt-2">
            <div className="flex items-center gap-4">
              <Image width={32} height={32} src={method.icon} alt={method.type}  />
              <span className="font-medium">{method.lastDigits}</span>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="radio"
                name="payment"
                checked={selected === method.id}
                onChange={() => setSelected(method.id)}
                className="form-radio text-blue-500"
              />
              <button onClick={() => removeMethod(method.id)} className="text-red-500 hover:text-red-700">
                <Trash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
