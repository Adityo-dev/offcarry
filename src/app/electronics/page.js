import DynamicProductDisplay from "@/components/dynamicProductDisplay/DynamicProductDisplay";
import SectionHeader from "@/components/sectionHeader/SectionHeader";

export default async function Electronics() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/shop/products`,
    {
      cache: "no-cache",
    }
  );
  const products = await response.json();

  const filtersProducts = products?.products
    .filter(
      (product) =>
        product?.category?.toLowerCase() === "electronics".toLocaleLowerCase()
    )
    .map((product) => product);

  return (
    <main className="space-y-6 pt-14 xl:pt-0">
      <SectionHeader title={"Off Carry Electronics"} linkName={"electronics"} />
      <DynamicProductDisplay products={filtersProducts} />
    </main>
  );
}
