"use client";
// import lucide icons
import { ChevronLeft, ChevronRight } from "lucide-react";
// Import Swiper React components
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import ProductCart from "../productCart/ProductCart";

const customButtonStyles =
  "static xl:absolute w-7 sm:w-10 h-7 sm:h-10 text-base xl:text-xl bg-gradient-primary text-white flex items-center justify-center border-none xl:top-1/2 transform -translate-y-1/2 z-10 cursor-pointer rounded-full xl:opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg";

export default function SliderProduct({ products }) {
  return (
    <main className="relative container mx-auto group ">
      {/* Custom Navigation Buttons */}
      <div className="absolute xl:static -bottom-16 sm:-bottom-20  flex gap-6 left-1/2 xl:left-auto transform xl:transform-none -translate-x-1/2">
        <div
          className={`${customButtonStyles} custom-productSlider-button-prev xl:-left-6 group-hover:opacity-1`}
        >
          <ChevronLeft strokeWidth={1.5} />
        </div>
        <div
          className={`${customButtonStyles} custom-productSlider-button-next  xl:-right-6 group-hover:opacity-1`}
        >
          <ChevronRight strokeWidth={1.5} />
        </div>
      </div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-productSlider-button-next",
          prevEl: ".custom-productSlider-button-prev",
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="w-full h-full"
      >
        {products.map((product, ind) => (
          <SwiperSlide key={ind}>
            <ProductCart product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
