"use client";
import Link from "next/link";
import { Gift, Heart, House, Store, User } from "lucide-react";
import { usePathname } from "next/navigation";

const mobileNavigationBarData = [
  {
    icon: <House size={20} strokeWidth={1.3} />,
    name: "home",
    url: "/",
  },
  {
    icon: <Store size={20} strokeWidth={1.3} />,
    name: "New",
    url: "/new",
  },
  {
    icon: <Gift size={20} strokeWidth={1.3} />,
    name: "pre order",
    url: "/pre-order",
  },
  {
    icon: <Heart size={20} strokeWidth={1.3} />,
    name: "wishlist",
    url: "/wishlist",
  },
  {
    icon: <User size={20} strokeWidth={1.3} />,
    name: "account",
    url: "/account/login",
  },
];

function MobileNavigationBar() {
  const pathname = usePathname();

  return (
    <nav className="w-full h-14 fixed bottom-0 z-50 xl:hidden bg-[#152327] text-white border-t border-[#213236] shadow-lg px-4 flex items-center justify-between ">
      {mobileNavigationBarData.map((navData, index) => (
        <Link
          href={navData.url}
          key={index}
          className={`flex flex-col gap-0.5 items-center justify-center text-[10px] md:text-xs capitalize ${
            pathname === navData.url ? "text-secondary" : ""
          }`}
          aria-label={navData.name}
        >
          <span
            className={`${
              navData?.name === "offer" && "text-secondary animate-pulse"
            }`}
          >
            {navData.icon}
          </span>
          <span>{navData.name}</span>
        </Link>
      ))}
    </nav>
  );
}

export default MobileNavigationBar;
