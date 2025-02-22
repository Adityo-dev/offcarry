import Link from "next/link";
import { Heart, House, Store, User } from "lucide-react";

const mobileNavigationBarData = [
  {
    icon: <House size={20} strokeWidth={1.3} />,
    name: "Home",
    url: "/",
  },
  {
    icon: <Store size={20} strokeWidth={1.3} />,
    name: "Shop",
    url: "/shop",
  },
  {
    icon: <Heart size={20} strokeWidth={1.3} />,
    name: "Wishlist",
    url: "/wishlist",
  },
  {
    icon: <User size={20} strokeWidth={1.3} />,
    name: "Offer",
    url: "/offer",
  },
  {
    icon: <User size={20} strokeWidth={1.3} />,
    name: "Account",
    url: "/account/login",
  },
];

function MobileNavigationBar() {
  return (
    <nav className="w-full h-14 fixed bottom-0 z-50 xl:hidden bg-[#152327] text-white shadow-lg px-5 flex items-center justify-between ">
      {mobileNavigationBarData.map((navData, index) => (
        <Link
          href={navData.url}
          key={index}
          className="flex flex-col gap-0.5 items-center justify-center text-[10px] md:text-xs"
          aria-label={navData.name}
        >
          <span>{navData.icon}</span>
          <span>{navData.name}</span>
        </Link>
      ))}
    </nav>
  );
}

export default MobileNavigationBar;
