import UpcomingCart from "../productCarts/upcomingCart/UpcomingCart";

// PRODUCTS DATA
const upcomingProducts = [
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
  {
    image: "/images/product6.jpg",
    title: "Hi quality Men’s Sneakers ",
    oldPrice: "130.00",
    currentPrice: "125.00",
    stock: 10,
  },
  {
    image: "/images/product6.jpg",
    title: "Hi quality Men’s Sneakers ",
    oldPrice: "130.00",
    currentPrice: "125.00",
    stock: 10,
  },
  {
    image: "/images/product6.jpg",
    title: "Hi quality Men’s Sneakers ",
    oldPrice: "130.00",
    currentPrice: "125.00",
    stock: 10,
  },
  {
    image: "/images/product6.jpg",
    title: "Hi quality Men’s Sneakers ",
    oldPrice: "130.00",
    currentPrice: "125.00",
    stock: 10,
  },
  {
    image: "/images/product6.jpg",
    title: "Hi quality Men’s Sneakers ",
    oldPrice: "130.00",
    currentPrice: "125.00",
    stock: 10,
  },
];

function Upcoming() {
  return (
    <section className="container mx-auto px-4">
      {/* TITLE AND TABS LIST */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mb-5 md:mb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
          Upcoming Products
        </h2>
      </div>

      {/* PRODUCTS CONTAINER */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
        {upcomingProducts.map((upcoming, ind) => (
          <UpcomingCart key={ind} product={upcoming} />
        ))}
      </div>
    </section>
  );
}

export default Upcoming;
