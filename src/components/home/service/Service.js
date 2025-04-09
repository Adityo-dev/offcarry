// SERVICE TYPE DATA
const ServiceType = () => {
  const serviceData = [
    {
      icon: "🚚",
      title: "Free Delivery",
      subTitle: "Free shipping on all orders",
    },
    {
      icon: "🔄",
      title: "Returns",
      subTitle: "7-day money-back guarantee",
    },
    {
      icon: "📞",
      title: "24/7 Support",
      subTitle: "Online assistance anytime",
    },
    {
      icon: "💳",
      title: "Secure Payments",
      subTitle: "100% payment protection",
    },
  ];

  return (
    <section className="relative w-full max-h-[380px] h-full flex flex-col justify-between mx-auto border border-gray-300 rounded-lg">
      {serviceData.map((service, ind) => (
        <div
          key={ind}
          className="flex items-center gap-3 border-t first:border-0 border-gray-300 p-2.5 sm:p-4 lg:p-5"
        >
          <p className="text-2xl sm:text-3xl">{service.icon}</p>
          <p>
            <span className="text-sm sm:text-base uppercase font-semibold text-black">
              {service.title}
            </span>
            <br />
            <span className="text-sm leading-7 whitespace-nowrap">
              {service.subTitle}
            </span>
          </p>
        </div>
      ))}
    </section>
  );
};

export default ServiceType;
