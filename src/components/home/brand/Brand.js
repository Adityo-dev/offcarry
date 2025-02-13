"use client";
import Image from "next/image";

// import marquee
import Marquee from "react-fast-marquee";

const brandData = [
  "/logo/sony-1.png",
  "/logo/dell.png",
  "/logo/lenovo.png",
  "/logo/samsung.png",
  "/logo/sanyo-1.png",
  "/logo/oppo.png",
  "/logo/panasonic.png",
  "/logo/asus.png",
  "/logo/lenovo.png",
  "/logo/samsung.png",
  "/logo/sanyo-1.png",
  "/logo/oppo.png",
  "/logo/panasonic.png",
  "/logo/asus.png",
];

const Brand = () => {
  return (
    <div className="relative w-full space-y-4 lg:space-y-6 overflow-hidden">
      {/*  BRAND MARQUEE LEFT */}
      <Marquee className="w-full mx-auto" pauseOnHover="true">
        {brandData.map((data, ind) => (
          <div
            className="w-40 lg:w-52 xl:w-64 h-20 lg:h-28 xl:h-36 border flex items-center justify-center rounded-lg ml-4 lg:ml-6 cursor-pointer"
            key={ind}
          >
            <Image
              src={data}
              width={400}
              height={400}
              alt=""
              className="w-20 lg:w-28 xl:w-36"
            />
          </div>
        ))}
      </Marquee>
      {/*  BRAND MARQUEE RIGHT */}
      <Marquee className="w-full mx-auto" pauseOnHover="true" direction="right">
        {brandData.map((data, ind) => (
          <div
            className="w-40 lg:w-52 xl:w-64 h-20 lg:h-28 xl:h-36  border flex items-center justify-center rounded-lg ml-4 lg:ml-6 cursor-pointer"
            key={ind}
          >
            <Image
              src={data}
              width={400}
              height={400}
              alt=""
              className="w-20 lg:w-28 xl:w-36"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Brand;
