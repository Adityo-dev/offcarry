import DynamicProductDisplay from "@/components/dynamicProductDisplay/DynamicProductDisplay";
import SectionHeader from "@/components/sectionHeader/SectionHeader";

export default async function TShirt() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/shop/products`,
    {
      cache: "no-cache",
    }
  );
  const data = await response.json();
  const productsData = data?.products || [];

  const tShirtProducts = productsData.filter(
    (product) =>
      product?.category.toLowerCase() === "t-shirts".toLocaleLowerCase()
  );

  return (
    <main className="space-y-6 pt-14 xl:pt-0">
      <SectionHeader title={"Off Carry T-Shirt"} linkName={"t-shirt"} />
      <DynamicProductDisplay products={tShirtProducts} />
    </main>
  );
}
