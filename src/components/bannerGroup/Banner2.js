import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    image: "/images/banner2.png",
    url: "#",
  },
  {
    image: "/images/banner1.png",
    url: "#",
  },
];

function Banner2() {
  return (
    <div className="space-y-7">
      {data.map((banner2, ind) => (
        <div key={ind} className="w-full h-[235px]">
          <Link href={banner2?.url}>
            <Image
              src={banner2?.image}
              width={400}
              height={400}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Banner2;
