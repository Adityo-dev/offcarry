import Banner1 from "@/components/bannerGroup/Banner1";
import Banner3 from "@/components/bannerGroup/Banner3";
import Banner4 from "@/components/bannerGroup/Banner4";
import { ChatButton } from "@/components/bot/chat-button";
import BestSellers from "@/components/home/bestSellers/BestSellers";
import Brand from "@/components/home/brand/Brand";
import DealOfTheDay from "@/components/home/dealOfTheDay/DealOfTheDay";
import FeaturedProducts from "@/components/home/featuredProducts/FeaturedProducts";
import Hero from "@/components/home/hero/Hero";
import PreOrder from "@/components/home/preOrder/PreOrder";
import ServiceType from "@/components/home/service/Service";
import Newsletter from "@/components/shared/newsletter/Newsletter";
import Upcoming from "@/components/upcoming/Upcoming";

export default function Home() {
  return (
    <main className="space-y-10 lg:space-y-16 pt-14 xl:pt-0 relative">
      <Hero />
      <DealOfTheDay />
      <PreOrder />
      <BestSellers />
      <section className="container mx-auto px-2 grid grid-cols-12 gap-4 lg:gap-7">
        <div className="col-span-full lg:col-span-4">
          <ServiceType />
        </div>
        <div className="col-span-full lg:col-span-8">
          <Banner1 />
        </div>
      </section>
      <FeaturedProducts />
      <Banner3 />
      <Upcoming />
      <Banner4 />
      <Brand />
      <section className="px-4 block lg:hidden">
        <Newsletter />
      </section>

      <ChatButton />

    </main>
  );
}
