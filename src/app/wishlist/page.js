import SectionHeader from "@/components/sectionHeader/SectionHeader";
import WishlistCart from "./_components/WishlistCart";

// data
const wishlistData = [
  {
    image: "/images/product5.jpg",
    name: "August Gift Voucher",
    currentPrice: "100",
    oldPrice: "120",
    stock: 10,
  },
  {
    image: "/images/product9.jpg",
    name: "August Gift Voucher",
    currentPrice: "100",
    oldPrice: "120",
    stock: 5,
  },
  {
    image: "/images/product11.jpg",
    name: "August Gift Voucher",
    currentPrice: "100",
    oldPrice: "120",
    stock: 0,
  },
];

function Wishlist() {
  return (
    <main className="space-y-6 pt-16 xl:pt-0">
      <SectionHeader title={"Wishlist"} linkName={"wishlist"} />
      <section className="container mx-auto px-4 mt-6">
        <header className="grid grid-cols-12 gap-6  border-b pb-4">
          <p className="col-span-4 font-semibold">Product Name</p>
          <p className="col-span-3 font-semibold">Unit Price</p>
          <p className="col-span-3 font-semibold">Stock Status</p>
        </header>

        <div className="space-y-6 mt-6">
          {wishlistData.map((wishlist, ind) => (
            <WishlistCart key={ind} product={wishlist} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Wishlist;
