import SliderProduct from "../sliderProducts/SliderProducts";

// RELATED PRODUCTS
const relatedProducts = [
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

function RelatedProducts({ products = [] }) {
  return (
    <section className="pb-14">
      <SliderProduct title={"Related Products"} products={products} />
    </section>
  );
}

export default RelatedProducts;
