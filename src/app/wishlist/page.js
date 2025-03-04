import SectionHeader from "@/components/sectionHeader/SectionHeader";
import Image from "next/image";
import { Trash } from "lucide-react";
import WishlistCart from "./_components/WishlistCart";

// Data
const cartItems = [
  {
    id: 1,
    name: "Men’s full sleeve Jaket",
    category: "Electronic",
    price: 16.3,
    image: "/images/product5.jpg",
    stock: "In Stock",
  },
  {
    id: 2,
    name: "Apple Watch",
    category: "Electronic",
    price: 16.3,
    image: "/images/product6.jpg",
    stock: "Out of Stock",
  },
  {
    id: 3,
    name: "Men’s Jacef’s",
    category: "Electronic",
    price: 16.3,
    image: "/images/product7.jpg",
    stock: "In Stock",
  },
];

function Wishlist() {
  return (
    <main className="space-y-6 pt-14 xl:pt-0">
      <SectionHeader title={"Wishlist"} linkName={"wishlist"} />
      <section className="container mx-auto px-4 mt-6">
        {/* Header */}
        <header className="hidden lg:grid grid-cols-12 gap-4 border-b pb-4">
          <p className="col-span-4 font-semibold">Product Name</p>
          <p className="col-span-3 font-semibold">Unit Price</p>
          <p className="col-span-3 font-semibold">Stock Status</p>
          <p className="col-span-2 font-semibold">Action</p>
        </header>
        {/* Wishlist Items */}
        <div className="space-y-4 mt-4">
          {cartItems.map((item) => (
            <WishlistCart key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Wishlist;
