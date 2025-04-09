import Link from "next/link";
// import icon
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import TiktokIcon from "@/app/TiktokIcon";

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

const contacts = [
  {
    icon: <Mail size={20} strokeWidth={1.5} />,
    text: "sup.offcarry@gmail.com",
    url: "mailto:sup.offcarry@gmail.com",
  },
  {
    icon: <Phone size={20} strokeWidth={1.5} />,
    text: "+8801937270044 ",
    url: "https://wa.me/+8801937270044 ",
  },
];

async function TopNavigationBar() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/social-media`
  );
  const socialMedia = await response.json();

  return (
    <section className="w-full h-[40px] hidden xl:flex items-center bg-[#282828] text-white">
      <div className="container mx-auto px-2 flex items-center justify-between">
        <p className="text-sm">Enjoy free shipping on orders up to $100</p>
        {/* SOCIAL MEDIA SECTION */}
        <div className="flex items-center gap-7">
          {socialMedia?.map((media, ind) => {
            const icon = iconMap[media.name];
            if (!icon) return null;
            return (
              <Link href={media.link} key={ind} target="_blank">
                {icon}
              </Link>
            );
          })}
        </div>

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
