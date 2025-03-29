import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Banner2() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/pbanners`,
    {
      cache: "no-cache",
    }
  );
  const banner = await response.json();
  const type = ["slider-up", "slider-down"];
  const selectedBanner = banner?.filter((item) => type.includes(item?.type));

  return (
    <div className="space-y-7">
      {selectedBanner.map((banner, ind) => (
        <div key={ind} className="w-full h-[235px]">
          <Link href={banner?.url || ""}>
            <Image
              src={banner?.banner.image}
              width={400}
              height={400}
              alt={`Banner for ${banner?.title || "Promotion"}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Banner2;
