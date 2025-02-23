import Banner3 from "@/components/bannerGroup/Banner3";
import Banner4 from "@/components/bannerGroup/Banner4";
import BestSellers from "@/components/home/bestSellers/BestSellers";
import Brand from "@/components/home/brand/Brand";
import DealOfTheDay from "@/components/home/dealOfTheDay/DealOfTheDay";
import FeaturedProducts from "@/components/home/featuredProducts/FeaturedProducts";
import Hero from "@/components/home/hero/Hero";
import PreOrder from "@/components/home/preOrder/PreOrder";
import ServiceType from "@/components/home/service/Service";
// import Service from "@/components/home/service/Service";
import Newsletter from "@/components/shared/newsletter/Newsletter";
import Upcoming from "@/components/upcoming/Upcoming";

export default function Home() {
  return (
    <main className="space-y-10 lg:space-y-16 pt-16 xl:pt-0">
      <Hero />
      <DealOfTheDay />
      <Upcoming />
      <PreOrder />
      <FeaturedProducts />
      <Banner3 />
      <BestSellers />
      <div className="container mx-auto px-4 grid grid-cols-12 gap-7">
        <div className="col-span-3">
          <ServiceType />
        </div>
        <div className="col-span-9">
          <Banner4 />
        </div>
      </div>
      <Brand />
      <div className="px-4 block lg:hidden">
        <Newsletter />
      </div>
    </main>
  );
}
