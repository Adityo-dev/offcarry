import Banner3 from "@/components/bannerGroup/Banner3";
import Banner4 from "@/components/bannerGroup/Banner4";
import BestSellers from "@/components/home/bestSellers/BestSellers";
import FeaturedProducts from "@/components/home/featuredProducts/FeaturedProducts";
import Hero from "@/components/home/hero/Hero";
import PreOrder from "@/components/home/preOrder/PreOrder";
import Service from "@/components/home/service/Service";

export default function Home() {
  return (
    <main className="space-y-16">
      <Hero />
      <PreOrder />
      <FeaturedProducts />
      <Banner3 />
      <BestSellers />
      <Banner4 />
      <Service />
    </main>
  );
}
