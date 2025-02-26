import Image from "next/image";
import React from "react";

function Banner4() {
  return (
    <section className="container mx-auto px-4 grid grid-cols-12 gap-4 lg:gap-7">
      <div className="col-span-full sm:col-span-8 w-full max-h-[420px] h-full">
        <Image
          src={"/images/banner10.png"}
          width={800}
          height={800}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/*  */}
      <div className="col-span-full sm:col-span-4 w-full max-h-[420px] h-full">
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
