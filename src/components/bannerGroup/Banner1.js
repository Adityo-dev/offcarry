import Image from "next/image";
import React from "react";

function Banner1() {
  return (
    <div className="w-full max-h-[380px] h-full">
      <Image
        src={"/images/banner10.png"}
        width={800}
        height={800}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
}

export default Banner1;
