import Image from "next/image";
import Category from "../category/Category";
import HeroSlider from "./HeroSlider";
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
    <section className="w-full h-[75vh] bg-[#F1F1F1]">
      <div className="container mx-auto px-4 pt-6 space-y-7">
        {/* CATEGORY COMPONENTS */}
        <Category />
        <div className="w-full flex items-center gap-7">
          {/* HERO SLIDER COMPONENTS */}
          <div className="w-3/4 h-[500px]">
            <HeroSlider sliderData={heroData} />
          </div>
          {/* BANNER */}
          <div className="w-1/4 h-[500px] flex flex-col gap-7">
            <Image
              src={"/images/handMade.png"}
              width={400}
              height={400}
              alt=""
              className="w-full h-full"
            />
            <Image
              src={"/images/summerSale.png"}
              width={400}
              height={400}
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
