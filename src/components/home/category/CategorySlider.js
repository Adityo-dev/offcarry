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
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
          1536: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
        }}
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
            <Link
              href={`category/${(category?.name).toLowerCase()}`}
              className="w-full h-20 md:h-[100px] flex items-center justify-center rounded-lg bg-white shadow-sm transition-all duration-300 hover:border hover:border-primary"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <Image
                  src={category?.logo}
                  width={400}
                  height={400}
                  alt={`Logo for ${category?.name}: ${category?.description}`}
                  className="w-10 md:w-12 h-full  md:h-12 object-cover"
                />
                <p className="text-sm sm:text-base font-semibold tracking-wider">
                  {category?.name}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
