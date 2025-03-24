import Image from "next/image";
import React from "react";

async function Banner1() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/pbanners`,
    {
      cache: "no-cache",
    }
  );
  const banner = await response.json();
  const selectedBanner = banner?.find((item) => item?.type == 'promo-sec');
console.log(selectedBanner)
  return (
    <div className="w-full max-h-[380px] h-full">
      <Image
        src={selectedBanner?.banner?.image}
        width={800}
        height={800}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
}

export default Banner1;
