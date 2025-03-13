import UpcomingCart from "@/components/productCarts/upcomingCart/UpcomingCart";
import SectionHeader from "@/components/sectionHeader/SectionHeader";

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
    <main className="space-y-6 pt-14 xl:pt-0">
      <SectionHeader title={"Upcoming Products"} linkName={"upcoming"} />
      <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
        {upcomingProducts.map((upcoming, ind) => (
          <UpcomingCart key={ind} product={upcoming} />
        ))}
      </div>
    </main>
  );
}

export default Upcoming;
