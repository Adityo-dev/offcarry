"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

export default function CategorySlider({ sliderData }) {
  const [autoplay, setAutoplay] = useState(true);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <section
      className="swiper-container relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {sliderData.map((category, ind) => (
          <SwiperSlide key={ind}>
            <div className="max-w-[250px] w-full h-[100px] flex items-center justify-center rounded-md bg-white shadow-sm transition-all duration-300 hover:border hover:border-primary">
              <Link href={category?.url} className="flex items-center gap-3">
                <Image
                  src={category?.image}
                  width={400}
                  height={400}
                  alt=""
                  className="w-12 h-12 object-cover"
                />
                <p>{category?.title}</p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
