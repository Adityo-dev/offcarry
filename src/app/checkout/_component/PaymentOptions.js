import { useState } from "react";
import Image from "next/image";

const paymentMethods = [
  {
    id: "1",
    type: "পণ্য হাতে পেয়ে টাকা পরিশোধ করুন",
    name: "Cash on delivery",
    icon: "/logo/cash-on-delivery.png",
  },
  // {
  //   id: "2",
  //   type: "PayPal",
  //   name: "014*****326",
  //   icon: "/logo/nogad-logo.png",
  // },
];

export default function PaymentOptions() {
  const [selected, setSelected] = useState(paymentMethods[0].id);

  return (
    <section className="w-full">
      <h2 className="text-lg font-semibold">Payment Options</h2>
      <div className="mt-4 sm:mt-6 space-y-4 p-4 sm:p-6 rounded-lg bg-[#E5F7FF]">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center justify-between border-b last:border-0 cursor-pointer"
            onClick={() => setSelected(method.id)}
          >
            <div className="flex items-center gap-4 pb-4">
              <div className="w-20 h-16 p-3 bg-white rounded-lg">
                <Image
                  width={400}
                  height={400}
                  src={method.icon}
                  alt={method.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="flex flex-col gap-1">
                <span className="font-medium">{method.name}</span>
                <span className="font-medium">{method.type}</span>
              </p>
            </div>
            <input
              type="radio"
              name="payment"
              checked={selected === method.id}
              onChange={() => setSelected(method.id)}
              className="form-radio w-5 h-5"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
