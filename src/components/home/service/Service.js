import { Gift, MessageSquareMore } from "lucide-react";

// SERVICE DATA
const serviceData = [
  {
    icon: <Gift size={28} strokeWidth={1.5} />,
    title: "Free Shipping",
    subTitle: "Free Shipping for orders over $120",
  },
  {
    icon: <Gift size={28} strokeWidth={1.5} />,
    title: "Refund",
    subTitle: "Within 30 days for an exchange.",
  },
  {
    icon: <MessageSquareMore size={28} strokeWidth={1.5} />,
    title: "Support",
    subTitle: "24 hours a day, 7 days a week",
  },
  {
    icon: <Gift size={28} strokeWidth={1.5} />,
    title: "Payment",
    subTitle: "Pay with Multiple Credit Cards",
  },
];

function Service() {
  return (
    <section className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 text-center gap-6">
      {serviceData.map((service, ind) => (
        <div
          key={ind}
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3"
        >
          <p className="w-16 h-16 rounded-full border flex items-center justify-center">
            {service?.icon}
          </p>

          <p className="flex flex-col sm:gap-1">
            <span className="text-base sm:text-lg sm:font-semibold">
              {service?.title}
            </span>
            <span className="text-[#525258] text-sm sm:text-base">
              {service?.subTitle}
            </span>
          </p>
        </div>
      ))}
    </section>
  );
}

export default Service;
