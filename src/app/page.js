import FeaturedProducts from "@/components/home/featuredProducts/FeaturedProducts";
import Hero from "@/components/home/hero/Hero";
import PreOrder from "@/components/home/preOrder/PreOrder";

export default function Home() {
  return (
    <main className="space-y-12">
      <Hero />
      <PreOrder />
      <FeaturedProducts />
    </main>
  );
}
