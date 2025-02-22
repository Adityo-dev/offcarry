"use client";
import Image from "next/image";
import { AlignJustify, Gift, Heart, Search, UserPlus } from "lucide-react";
import Link from "next/link";
import { useState } from "react"; // Import useState
import SearchSection from "./SearchSection";

// Center nav right section data
const centerNavRightData = [
  {
    icon: <Gift size={22} strokeWidth={1.3} />,
    name: "Latest Offers",
    title: "Offer",
    url: "/offer",
  },
  {
    icon: <Heart size={22} strokeWidth={1.3} />,
    name: "My Wishlist",
    title: "Wishlist",
    url: "/wishlist",
  },
  {
    icon: <UserPlus size={22} strokeWidth={1.3} />,
    name: "My Account",
    title: "Login or Register ",
    url: "/account/login",
  },
];

function CenterNavigationBar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <section className="fixed xl:relative z-50 shadow-lg xl:shadow-none w-full h-16 xl:h-auto bg-[#152327] xl:bg-white flex items-center">
      <div className="container w-full mx-auto px-4 flex items-center justify-between">
        {/* Justify Menu Icon section */}
        <div className="text-white xl:hidden">
          <AlignJustify size={24} strokeWidth={1.3} />
        </div>
        {/* TRUST NEST STORE LOGO */}
        <Link href={"/"}>
          <Image
            src="/logo/trustNestStore.png"
            width={160}
            height={160}
            alt="TrustNest Store Logo"
            className="w-28 xl:w-[160px]"
          />
        </Link>

        {/* Middle Section: Search Field */}
        <div className="flex-1 max-w-[600px] mx-4 hidden xl:block">
          <SearchSection />
        </div>

        {/* Right Section: Wishlist and Account */}
        <div className="hidden xl:flex items-center gap-4">
          {centerNavRightData.map((data, ind) => (
            <Link
              href={data?.url}
              key={ind}
              className="flex items-center gap-2"
            >
              <p className="w-8 xl:w-10 h-8 xl:h-10 p-1.5 bg-[#EEF0F2] text-[#292B49] rounded-full flex items-center justify-center">
                {data?.icon}
              </p>
              <p className="hidden xl:flex flex-col text-sm text-[#837F74]">
                <span>{data?.title}</span>
                <span>{data?.name}</span>
              </p>
            </Link>
          ))}
        </div>

        {/* Mobile Section: Search Icon */}
        <div className="flex items-center xl:hidden text-white relative">
          {/* Search Icon */}
          <button onClick={toggleSearch}>
            <Search size={24} strokeWidth={1.5} />
          </button>
          {/* Search Section (Conditionally Rendered) */}
          {isSearchVisible && (
            <div className="fixed top-16 right-0 z-50 w-full bg-[#152327] p-4 shadow-lg">
              <SearchSection />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CenterNavigationBar;
