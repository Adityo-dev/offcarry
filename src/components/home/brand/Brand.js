"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

function Brand() {
  const [brandData, setBrandData] = useState([]);

  useEffect(() => {
    async function fetchBrands() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_ROUT_URL}/shop/brands`,
          { cache: "no-cache" }
        );
        const data = await response.json();
        setBrandData(data);
      } catch (error) {
        console.error("Failed to fetch brand data:", error);
      }
    }
    fetchBrands();
  }, []);

  return (
    <div className="relative w-full space-y-4 lg:space-y-6 overflow-hidden">
      {/* BRAND MARQUEE LEFT */}
      <Marquee className="w-full mx-auto" pauseOnHover={true}>
        {brandData.map((data, ind) => (
          <Link
            href={`/brand/${data?.name?.toLowerCase()}`}
            key={ind}
            className="w-40 lg:w-52 xl:w-64 h-20 lg:h-28 xl:h-36 border flex items-center justify-center rounded-lg ml-4 lg:ml-6 cursor-pointer"
          >
            <Image
              src={data?.logo}
              width={400}
              height={400}
              alt={`Logo of ${data?.name || "Brand"}`}
              className="w-20 lg:w-28 xl:w-32 h-auto "
            />
          </Link>
        ))}
      </Marquee>

      {/* BRAND MARQUEE RIGHT */}
      <Marquee className="w-full mx-auto" pauseOnHover={true} direction="right">
        {brandData.map((data, ind) => (
          <Link
            href={`/brand/${data?.name?.toLowerCase()}`}
            key={ind}
            className="w-40 lg:w-52 xl:w-64 h-20 lg:h-28 xl:h-36 border flex items-center justify-center rounded-lg ml-4 lg:ml-6 cursor-pointer"
          >
            <Image
              src={data?.logo}
              width={400}
              height={400}
              alt={`Logo of ${data?.name || "Brand"}`}
              className="w-20 lg:w-28 xl:w-32 h-auto "
            />
          </Link>
        ))}
      </Marquee>
    </div>
  );
}

export default Brand;
