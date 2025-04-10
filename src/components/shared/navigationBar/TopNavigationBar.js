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
import TiktokIcon from "@/components/icon/TiktokIcon";
import WhatsAppIcon from "@/components/icon/WhatsAppIcon";

// SOCIAL MEDIA DATA
const iconMap = {
  facebook: <Facebook size={20} strokeWidth={1.5} />,
  instagram: <Instagram size={20} strokeWidth={1.5} />,
  twitter: <Twitter size={20} strokeWidth={1.5} />,
  x: <X size={20} strokeWidth={1.5} />,
  youtube: <Youtube size={20} strokeWidth={1.5} />,
  linkedin: <Linkedin size={20} strokeWidth={1.5} />,
  tiktok: <TiktokIcon size={20} strokeWidth={1.5} />,
  whatsapp: <WhatsAppIcon size={20} strokeWidth={1.5} />,
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
            const icon = iconMap[media?.name.toLowerCase()];

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
