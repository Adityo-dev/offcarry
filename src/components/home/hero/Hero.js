import Image from "next/image";
import Category from "../category/Category";
import HeroSlider from "./HeroSlider";
import Banner2 from "@/components/bannerGroup/Banner2";
// HERO SLIDER DATA
const heroData = [
  {
    image: "/images/slider6.png",
    url: "",
  },
  {
    image: "/images/slider3.png",
    url: "",
  },
  {
    image: "/images/slider2.png",
    url: "",
  },
  {
    image: "/images/slider4.png",
    url: "",
  },
  {
    image: "/images/slider5.png",
    url: "",
  },
];

function Hero() {
  return (
    <main className="w-full pb-4 sm:pb-8 bg-[#F1F1F1]">
      <section className="container mx-auto px-4 pt-4 sm:pt-6 space-y-4 sm:space-y-7">
        {/* CATEGORY COMPONENTS */}
        <Category />
        <div className="w-full grid grid-cols-12 gap-7">
          {/* HERO SLIDER COMPONENTS */}
          <div className="w-full h-full sm:h-[500px] col-span-12 sm:col-span-9">
            <HeroSlider sliderData={heroData} />
          </div>
          {/* BANNER */}
          <div className="w-full h-full sm:h-[500px] col-span-12 sm:col-span-3 hidden sm:block">
            <Banner2 />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
