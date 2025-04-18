import Link from "next/link";

// FOOTER MENU LINK
const footerBottomData = [
  {
    name: "Terms & Condition",
    url: "terms-and-conditions",
  },
  {
    name: "Privacy Policy ",
    url: "privacy-policy",
  },
  {
    name: "Contact Us",
    url: "contacts",
  },
];

function CopyRight() {
  return (
    <div className="container mx-auto px-2 flex flex-col sm:flex-row justify-between gap-3 pb-14 xl:pb-0">
      <p className="text-xs md:text-sm text-[#837F74] capitalize text-center lg:text-start">
        All Right Reserved Trust Nest Store © 2025
      </p>
      <div className="flex items-center gap-6 lg:gap-8 justify-center">
        {footerBottomData.map((data, ind) => (
          <Link
            href={data?.url}
            key={ind}
            className="text-[#ACB5BD] text-xs lg:text-sm hover:underline"
          >
            {data?.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CopyRight;
