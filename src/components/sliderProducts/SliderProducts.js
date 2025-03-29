"use client";
import Image from "next/image";
// import lucide icons
import { ChevronLeft, ChevronRight } from "lucide-react";
// Import Swiper React components
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import product cart components
import ProductCart from "@/components/productCarts/productsCart/ProductCart";
import ProductCartR from "../productCarts/productsCart/ProductCartR";

const customButtonStyles =
  "static xl:absolute w-7 sm:w-10 h-7 sm:h-10 text-base xl:text-xl bg-gradient-primary text-white flex items-center justify-center border-none xl:top-1/2 transform -translate-y-1/2 z-10 cursor-pointer rounded-full xl:opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg";

export default function SliderProduct({ title, products }) {
  // arrow value
  const value = title?.split(" ")?.join("");

  return (
    <main className="relative container mx-auto group space-y-4 md:space-y-6">
      {/* Custom Navigation Buttons */}
      <header>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
          {title}
        </h2>
      </header>
      <section>
        <div className="absolute xl:static -bottom-16 sm:-bottom-20  flex gap-6 left-1/2 xl:left-auto transform xl:transform-none -translate-x-1/2">
          <div
            className={`${customButtonStyles} custom-${value}-button-prev xl:-left-6 group-hover:opacity-1`}
          >
            <ChevronLeft strokeWidth={1.5} />
          </div>
          <div
            className={`${customButtonStyles} custom-${value}-button-next  xl:-right-6 group-hover:opacity-1`}
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
            nextEl: `.custom-${value}-button-next`,
            prevEl: `.custom-${value}-button-prev`,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 12,
            },
            1536: {
              slidesPerView: 6,
              spaceBetween: 12,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="w-full h-full"
        >
          {products
            .filter((product) => product.id !== null)
            .map((product, ind) => (
              <SwiperSlide key={ind}>
                <ProductCart product={product} />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </main>
  );
}
