// SERVICE TYPE DATA
const ServiceType = () => {
  const serviceData = [
    {
      icon: "",
      title: "Free Delivery",
      subTitle: "Free shipping on all order",
    },
    {
      icon: "",
      title: "Returns",
      subTitle: "Back guarantee under 7 days",
    },
    {
      icon: "",
      title: "Support 24/7",
      subTitle: "Support online 24 hours a day",
    },
    {
      icon: "",
      title: "Payments",
      subTitle: "100% payment security",
    },
  ];

  return (
    <section className="relative w-full max-h-[380px] h-full flex flex-col justify-between mx-auto border border-gray-300 rounded-lg">
      {serviceData.map((service, ind) => (
        <div
          key={ind}
          className="flex items-center gap-3 border-t first:border-0 border-gray-300 p-5"
        >
          <p className="text-4xl">{service.icon}</p>
          <p>
            <span className="text-lg uppercase font-semibold text-black">
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
