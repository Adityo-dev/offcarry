import DynamicProductDisplay from "@/components/dynamicProductDisplay/DynamicProductDisplay";
import SectionHeader from "@/components/sectionHeader/SectionHeader";

export default async function New() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/shop/products`,
    {
      cache: "no-cache",
    }
  );
  const products = await response.json();

  const filterProducts = products?.products.filter(
    (product) => product?.isNew === true
  );

  return (
    <main className="space-y-6 pt-14 xl:pt-0">
      <SectionHeader title={"New Products"} linkName={"New"} />
      <DynamicProductDisplay products={filterProducts} />
    </main>
  );
}
