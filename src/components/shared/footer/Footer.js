import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CopyRight from "./CopyRight";
import ContactInfo from "./ContactInfo";
import Newsletter from "@/components/shared/newsletter/Newsletter";
import TiktokIcon from "@/app/TiktokIcon";

const footerData = [
  {
    title: "Information",
    info: [
      { name: "Custom Service", url: "#" },
      { name: "Order Tracking", url: "#" },
      { name: "Contacts", url: "#" },
      { name: "Events", url: "#" },
      { name: "About Us", url: "#" },
    ],
  },
  {
    title: "Quick Links",
    info: [
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms and Conditions", url: "/terms-and-conditions" },
      { name: "Return & Refund Policy", url: "/return-refund-policy" },
      { name: "Shipping Policy", url: "/shipping-policy" },
      { name: "Cancellation Policy", url: "/cancellation-policy" },
      { name: "Payment Policy", url: "/payment-policy" },
      { name: "Disclaimer", url: "/disclaimer" },
    ],
  },
  {
    title: "About Us",
    info: [
      { name: "about us", url: "/about-us" },
      { name: "Terms & Condition", url: "#" },
      { name: "Shipping", url: "#" },
      { name: "Privacy Policy", url: "#" },
      { name: "Products Returns", url: "#" },
    ],
  },
];

// SOCIAL MEDIA DATA

const iconMap = {
  Facebook: <Facebook size={20} strokeWidth={1.5} />,
  Instagram: <Instagram size={20} strokeWidth={1.5} />,
  Twitter: <Twitter size={20} strokeWidth={1.5} />,
  X: <X size={20} strokeWidth={1.5} />,
  YouTube: <Youtube size={20} strokeWidth={1.5} />,
  LinkedIn: <Linkedin size={20} strokeWidth={1.5} />,
  tiktok: <TiktokIcon size={20} strokeWidth={1.5} />,
};

async function Footer() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/social-media`
  );

  const socialMedia = await response.json();

  return (
    <main className="w-full mt-10 lg:mt-64 pt-12 lg:pt-40 pb-6 bg-[#152327] text-white relative">
      {/* NEWS LETTER COMPONENTS */}
      <section className="relative container mx-auto">
        <div className="w-full absolute -top-72 left-0 right-0 px-4 hidden lg:block">
          <Newsletter />
        </div>
      </section>

      <section className="container mx-auto px-2 flex flex-col lg:grid grid-cols-12 gap-10 lg:gap-20 ">
        <div className="col-span-4">
          {/* LOGO AND SUBTITLE */}
          <Image
            src={"/logo/offcarry.png"}
            width={400}
            height={400}
            alt="OffCarry Logo - Your Trusted Shopping Partner"
            className="max-w-40 w-full"
          />
          <p className="mt-4 sm:mt-7 text-[#ACB5BD] leading-6 sm:leading-7 text-sm sm:text-base">
            Elegant pink origami design three-dimensional view and decoration
            co-exist. Great for adding a decorative touch to any room’s decor.
          </p>
          {/* SOCIAL MEDIA */}
          <div className="flex items-center gap-2 md:gap-4 mt-4 md:mt-7">
            {socialMedia?.map((media, ind) => {
              const icon = iconMap[media.name];
              if (!icon) return null;
              return (
                <Link
                  href={media.link}
                  key={ind}
                  target="_blank"
                  className="w-8 md:w-10 h-8 md:h-10 bg-[#203342] flex items-center justify-center rounded-full p-2"
                >
                  {icon}
                </Link>
              );
            })}
          </div>
        </div>
        {/* FOOTER MENU LINK */}
        <div className="col-span-8 flex flex-col sm:flex-row justify-between gap-7">
          {footerData.map((footer, ind) => (
            <div key={ind}>
              <h3 className="lg:text-lg">{footer?.title}</h3>
              <div className="flex flex-col mt-3 sm:mt-5 lg:mt-7 gap-2 sm:gap-3 text-[#ACB5BD]">
                {footer?.info.map((data, ind) => (
                  <Link
                    href={data?.url}
                    key={ind}
                    className="text-sm lg:text-base transition-all hover:underline capitalize"
                  >
                    {data?.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CONTACT INFO */}
      <div className="mt-12 lg:mt-20 mb-8 sm:mb-12 lg:mb-16">
        <ContactInfo />
      </div>
      {/* COPY RIGHT SECTION */}
      <CopyRight />
    </main>
  );
}

export default Footer;
