// import icon
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";
import Link from "next/link";

// social media data
const socialMediaData = [
  { icon: <Facebook size={22} strokeWidth={1.5} />, url: "" },
  { icon: <Twitter size={22} strokeWidth={1.5} />, url: "" },
  { icon: <Instagram size={22} strokeWidth={1.5} />, url: "" },
  { icon: "", url: "" },
];

// contact data
const contacts = [
  { icon: <Mail size={22} strokeWidth={1.5} />, text: "demo@gmail.com" },
  { icon: <Phone size={22} strokeWidth={1.5} />, text: "1-800-123-4567" },
];

function TopNavigationBar() {
  return (
    <section className="w-full h-[40px] flex items-center bg-[#282828] text-white">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="text-sm">Enjoy free shipping on orders up to $100</p>
        <div className="flex items-center gap-7">
          {socialMediaData.map((socialMedia, ind) => (
            <div key={ind}>
              <Link href={socialMedia?.url}>{socialMedia?.icon}</Link>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-7">
          {contacts.map((contact, ind) => (
            <div
              key={ind}
              className="flex items-center gap-2 border-r border-[#ACB5BD] pr-6 last:border-0"
            >
              <p>{contact?.icon}</p>
              <p className="text-sm">{contact?.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopNavigationBar;
