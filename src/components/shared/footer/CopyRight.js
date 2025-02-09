import Link from "next/link";

// FOOTER MENU LINK
const footerBottomData = [
  {
    name: "Terms & Condition",
    url: "#",
  },
  {
    name: "Privacy Policy ",
    url: "#",
  },
  {
    name: "Contact Us",
    url: "#",
  },
];

function CopyRight() {
  return (
    <div className="container mx-auto px-4 flex justify-between">
      <p className="text-sm text-[#837F74] capitalize">
        All Right Reserved Trust Nest Store © 2025
      </p>
      <div className="flex items-center gap-8">
        {footerBottomData.map((data, ind) => (
          <Link href={data?.url} key={ind} className="text-[#ACB5BD] text-sm">
            {data?.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CopyRight;
