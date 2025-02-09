import SliderProduct from "@/components/sliderProducts/SliderProducts";
// FEATURED PRODUCTS
const featuredProducts = [
  {
    image: "/images/products1.png",
    title: "Men’s full sleeve Jaket",
    oldPrice: "130.00",
    currentPrice: "125.00",
    url: "",
  },
  {
    image: "/images/products2.png",
    title: "Hi quality Men’s Sneakers ",
    oldPrice: "130.00",
    currentPrice: "125.00",
    url: "",
  },
  {
    image: "/images/products2.png",
    title: "Hand made ladies Bag",
    oldPrice: "130.00",
    currentPrice: "125.00",
    url: "",
  },
  {
    image: "/images/products2.png",
    title: "Fashion hi scaling watch",
    oldPrice: "130.00",
    currentPrice: "125.00",
    url: "",
  },
  {
    image: "/images/products2.png",
    title: "Hand made ladies Bag",
    oldPrice: "130.00",
    currentPrice: "125.00",
    url: "",
  },
  {
    image: "/images/products2.png",
    title: "Hi quality Men’s Sneakers ",
    oldPrice: "130.00",
    currentPrice: "125.00",
    url: "",
  },
  {
    image: "/images/products2.png",
    title: "Hi quality Men’s Sneakers ",
    oldPrice: "130.00",
    currentPrice: "125.00",
    url: "",
  },
];
function FeaturedProducts() {
  return (
    <section className="container mx-auto px-4 space-y-7">
      <h2 className="text-4xl">Featured Products</h2>
      <SliderProduct products={featuredProducts} />
    </section>
  );
}

export default FeaturedProducts;
