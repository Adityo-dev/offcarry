import UpcomingCart from "../productCarts/upcomingCart/UpcomingCart";

async function Upcoming() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/shop/products`,
    {
      cache: "no-cache",
    }
  );
  const data = await response.json();
  const productsData = data?.products || [];

  const upcomingProducts = productsData?.filter(
    (products) => products?.isUpcoming
  );

  return (
    <section className="container mx-auto px-2">
      {/* TITLE AND TABS LIST */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mb-5 md:mb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
          Upcoming Products
        </h2>
      </div>

      {/*UPCOMING PRODUCTS CONTAINER */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
        {upcomingProducts.map((upcoming, ind) => (
          <UpcomingCart key={ind} product={upcoming} />
        ))}
      </div>
    </section>
  );
}

export default Upcoming;
