import Link from "next/link";
// import icon
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";

// SOCIAL MEDIA DATA
const socialMediaData = [
  {
    icon: <Facebook size={20} strokeWidth={1.5} />,
    url: "https://www.facebook.com/OffCarry",
  },
  { icon: <Twitter size={20} strokeWidth={1.5} />, url: "" },
  { icon: <Instagram size={20} strokeWidth={1.5} />, url: "" },
];

// CONTACTS DATA
// const otherNavigation = [
//   { name: "Order tracking", url: "order-tracking" },
//   {
//     name: "Privacy Policy",
//     url: "privacy-policy",
//   },
//   { name: "Terms And Conditions", url: "terms-and-conditions" },
// ];

const contacts = [
  {
    icon: <Mail size={20} strokeWidth={1.5} />,
    text: "support@offcarry.com",
    url: "mailto:support@offcarry.com",
  },
  {
    icon: <Phone size={20} strokeWidth={1.5} />,
    text: "+8801973239675",
    url: "https://wa.me/+8801973239675",
  },
];

function TopNavigationBar() {
  return (
    <section className="w-full h-[40px] hidden xl:flex items-center bg-[#282828] text-white">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="text-sm">Enjoy free shipping on orders up to $100</p>
        {/* SOCIAL MEDIA SECTION */}
        <div className="flex items-center gap-7">
          {socialMediaData.map((socialMedia, ind) => (
            <div key={ind}>
              <Link href={socialMedia?.url} target="_blank">
                {socialMedia?.icon}
              </Link>
            </div>
          ))}
        </div>
        {/* CONTACTS SECTION */}
        {/* <div className="flex items-center gap-4">
          {otherNavigation.map((navigation, ind) => (
            <Link
              href={navigation?.url}
              key={ind}
              className="border-r border-[#ACB5BD] pr-4 last:border-0"
            >
              <p className="text-sm">{navigation?.name}</p>
            </Link>
          ))}
        </div> */}
        <div className="flex items-center gap-7">
          {contacts.map((contact, ind) => (
            <Link
              href={contact?.url}
              target="_blank"
              key={ind}
              className="flex items-center gap-2 border-r border-[#ACB5BD] pr-6 last:border-0 "
            >
              <p>{contact?.icon}</p>
              <p className="text-sm hover:underline">{contact?.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopNavigationBar;
