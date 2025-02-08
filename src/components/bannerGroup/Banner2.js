import Image from "next/image";
import React from "react";

function Banner2() {
  return (
    <div className="w-full h-full">
      <div className="h-1/2">
        <Image
          src={"/images/banner4.png"}
          width={400}
          height={400}
          alt=""
          className="w-full h-full object-fill rounded-lg"
        />
      </div>
      <div className="h-1/2">
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
