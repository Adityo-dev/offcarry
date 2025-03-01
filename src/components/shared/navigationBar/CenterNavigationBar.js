"use client";
import Image from "next/image";
import { AlignJustify, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react"; // Import useState
import SearchSection from "./SearchSection";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MobileMenuAndCategory from "./MobileMenuAndCategory";

function CenterNavigationBar({
  categoriesData,
  navigationItems,
  centerNavRightData,
}) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <section className="fixed xl:relative z-50 shadow-lg xl:shadow-none w-full h-14 xl:h-auto bg-[#152327] xl:bg-white flex items-center">
      <div className="container w-full mx-auto px-4 flex items-center justify-between">
        {/* Justify Menu Icon section */}
        <div className="text-white xl:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <AlignJustify size={24} strokeWidth={1.3} />
            </SheetTrigger>
            <SheetContent className="w-screen overflow-x-auto z-[50000] max-w-[300px] flex justify-between">
              <MobileMenuAndCategory
                categoriesData={categoriesData}
                navigationItems={navigationItems}
              />
            </SheetContent>
          </Sheet>
        </div>
        {/* TRUST NEST STORE LOGO */}
        <Link href={"/"}>
          <Image
            src="/logo/trustNestStore.png"
            width={160}
            height={160}
            alt="TrustNest Store Logo"
            className="w-24 xl:w-[160px]"
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
              <p
                className={`w-8 xl:w-10 h-8 xl:h-10 p-1.5 bg-[#EEF0F2] rounded-full flex items-center justify-center  ${
                  data?.title === "offer"
                    ? "text-secondary animate-pulse"
                    : "text-[#292B49]"
                }`}
              >
                {data?.icon}
              </p>
              <p className="hidden xl:flex flex-col text-sm text-[#837F74] capitalize">
                <span>{data?.title}</span>
                <span className="text-xs">{data?.name}</span>
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
            <div className="fixed top-14 right-0 z-50 w-full bg-[#152327] p-4 shadow-lg">
              <SearchSection />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CenterNavigationBar;
