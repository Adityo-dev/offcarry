import SliderProduct from "@/components/sliderProducts/SliderProducts";

// FEATURED PRODUCTS
const featuredProducts = [
  {
    image: "/images/products3.png",
    title: "Men’s full sleeve Jaket",
    oldPrice: "130.00",
    currentPrice: "125.00",
    stock: 0,
  },
  {
    image: "/images/product5.jpg",
    title: "Hi quality Men’s Sneakers ",
    oldPrice: "130.00",
    currentPrice: "125.00",
    stock: 10,
  },
  {
    image: "/images/product10.jpg",
    title: "Hand made ladies Bag",
    oldPrice: "130.00",
    currentPrice: "125.00",
    stock: 0,
  },
  {
    image: "/images/product6.jpg",
    title: "Fashion hi scaling watch",
    oldPrice: "130.00",
    currentPrice: "125.00",
    stock: 10,
  },
  {
    image: "/images/product8.jpg",
    title: "Hand made ladies Bag",
    oldPrice: "130.00",
    currentPrice: "125.00",
    stock: 20,
  },
  {
    image: "/images/product7.jpg",
    title: "Hi quality Men’s Sneakers ",
    oldPrice: "130.00",
    currentPrice: "125.00",
    stock: 5,
  },
  {
    image: "/images/product6.jpg",
    title: "Hi quality Men’s Sneakers ",
    oldPrice: "130.00",
    currentPrice: "125.00",
    stock: 10,
  },
];

function FeaturedProducts() {
  return (
    <section className="container mx-auto px-4 pb-12 xl:pb-0">
      <SliderProduct title={"Featured Products"} products={featuredProducts} />
    </section>
  );
}

export default FeaturedProducts;
