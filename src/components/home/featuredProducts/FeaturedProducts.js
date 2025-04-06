import SliderProduct from "@/components/sliderProducts/SliderProducts";

async function FeaturedProducts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/shop/products`,
    {
      cache: "no-cache",
    }
  );

  const data = await response.json();
  const productsData = data?.products || [];

  const featuredProducts = productsData.filter(
    (product) => product?.isFeatured
  );

  return (
    <section className="container mx-auto px-2 pb-12 xl:pb-0">
      <SliderProduct title={"Featured Products"} products={featuredProducts} />
    </section>
  );
}

export default FeaturedProducts;
