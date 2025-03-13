import DynamicProductDisplay from "@/components/dynamicProductDisplay/DynamicProductDisplay";
import SectionHeader from "@/components/sectionHeader/SectionHeader";

export default async function Electronics() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/shop/products`,
    {
      cache: "no-cache",
    }
  );
  const data = await response.json();
  const productsData = data?.products || [];

  const electronicsProducts = productsData.filter(
    (product) =>
      product?.category?.toLowerCase() === "electronics".toLocaleLowerCase()
  );

  return (
    <main className="space-y-6 pt-14 xl:pt-0">
      <SectionHeader title={"Off Carry Electronics"} linkName={"electronics"} />
      <DynamicProductDisplay products={electronicsProducts} />
    </main>
  );
}
