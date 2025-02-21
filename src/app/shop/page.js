// app/shop/page.js
import DynamicProductDisplay from "@/components/dynamicProductDisplay/DynamicProductDisplay";
import SectionHeader from "@/components/sectionHeader/SectionHeader";

const products = [
  {
    id: 1,
    name: "Product 1",
    currentPrice: 100,
    image: "/images/product6.jpg",
    title: "Men’s full sleeve Jaket",
    oldPrice: "130.00",
    currentPrice: "125.00",
    stock: 10,
    filters: [
      { filterName: "brand", value: "Brand A" },
      { filterName: "storage", value: "64GB" },
      { filterName: "stock", value: "in stock" },
    ],
  },
  {
    id: 2,
    name: "Product 1",
    currentPrice: 100,
    image: "/images/product7.jpg",
    title: "Men’s full sleeve Jaket",
    oldPrice: "13.00",
    currentPrice: "15.00",
    stock: 5,
    filters: [
      { filterName: "brand", value: "Brand b" },
      { filterName: "storage", value: "20GB" },
      { filterName: "stock", value: "low stock" },
    ],
  },
];

export default async function ShopPage() {
  return (
    <main className="space-y-6">
      <SectionHeader title={"TrustNest Shop"} linkName={"shop"} />
      <DynamicProductDisplay products={products} />
    </main>
  );
}
