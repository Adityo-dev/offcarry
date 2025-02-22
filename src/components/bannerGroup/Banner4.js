import Image from "next/image";
import React from "react";

function Banner4() {
  return (
    <section className="grid grid-cols-12 gap-4 lg:gap-7">
      <div className="col-span-full sm:col-span-8 w-full min-h-[380px] h-full">
        <Image
          src={"/images/banner10.png"}
          width={800}
          height={800}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/*  */}
      <div className="col-span-full sm:col-span-4 w-full min-h-[380px] h-full">
        <Image
          src={"/images/banner2.png"}
          width={800}
          height={800}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
}

export default Banner4;
