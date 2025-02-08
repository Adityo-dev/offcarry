import Image from "next/image";
import React from "react";

function Banner2() {
  return (
    <div className="space-y-6">
      <div className="w-full h-[240px]">
        <Image
          src={"/images/banner2.png"}
          width={400}
          height={400}
          alt=""
          className="w-full h-full object-fill rounded-lg"
        />
      </div>
      <div className="w-full h-[236px]">
        <Image
          src={"/images/banner1.png"}
          width={400}
          height={400}
          alt=""
          className="w-full h-full object-fill rounded-lg"
        />
      </div>
    </div>
  );
}

export default Banner2;
