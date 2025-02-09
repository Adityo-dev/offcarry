"use client";
import Link from "next/link";
import Image from "next/image";

// IMPORT SWIPER COMPONENTS
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// IMPORT SWIPER STYLES
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// IMPORT ICONS
import { ChevronLeft, ChevronRight } from "lucide-react";

// CUSTOM SLIDER BUTTON STYLES
const customButtonStyles =
  "absolute w-12 h-12 flex items-center justify-center border-none top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gradient-primary text-white rounded-full opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0px_20px_30px_-10px_rgba(38,57,77)]";

function HeroSlider({ sliderData }) {
  return (
    <main className="relative w-full h-full rounded-lg overflow-hidden group ">
      {/* CUSTOM SLIDER BUTTON  */}
      <div
        className={`${customButtonStyles} custom-heroSlider-button-prev -left-6 group-hover:left-0 rounded-l-lg `}
      >
        <ChevronLeft size={30} strokeWidth={1.5} />
      </div>
      <div
        className={`${customButtonStyles} custom-heroSlider-button-next -right-6 group-hover:right-0 rounded-r-lg`}
      >
        <ChevronRight size={30} strokeWidth={1.5} />
      </div>

      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        navigation={{
          nextEl: ".custom-heroSlider-button-next",
          prevEl: ".custom-heroSlider-button-prev",
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="w-full h-full"
      >
        {sliderData.map((slider, ind) => (
          <SwiperSlide key={ind}>
            <Link href={`#`}>
              <Image
                className="w-full h-full object-cover"
                src={slider?.image}
                width={1600}
                height={600}
                alt=""
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default HeroSlider;
