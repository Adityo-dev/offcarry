import Image from "next/image";
import React from "react";

async function Banner4() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/pbanners`,
    {
      cache: "no-cache",
    }
  );
  const banner = await response.json();
  const type = ["promo-2", "promo-3"];
  const selectedBanner = banner
    ?.filter((item) => type.includes(item?.type))
    .sort((a, b) => a?.position - b?.position);

  return (
    <section className="container mx-auto px-4 grid grid-cols-12 gap-4 lg:gap-7">
      <div className="col-span-full sm:col-span-8 w-full max-h-[420px] h-full">
        <Image
          src={selectedBanner?.[0]?.banner?.image}
          width={800}
          height={800}
          alt={`Banner for ${
            selectedBanner?.[0]?.banner?.title || "Promotion"
          }`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/*  */}
      <div className="col-span-full sm:col-span-4 w-full max-h-[420px] h-full">
        <Image
          src={selectedBanner?.[1]?.banner?.image}
          width={800}
          height={800}
          alt={`Banner for ${
            selectedBanner?.[1]?.banner?.title || "Promotion"
          }`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
}

export default Banner4;
