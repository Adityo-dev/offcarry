import DynamicProductDisplay from "@/components/dynamicProductDisplay/DynamicProductDisplay";
import SectionHeader from "@/components/sectionHeader/SectionHeader";

export default async function Brand({ params }) {
  const searchBrand = params?.id;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/shop/products`,
    {
      cache: "no-cache",
    }
  );
  const data = await response.json();
  const productsData = data?.products || [];

  const brandProducts = productsData.filter(
    (product) => product?.brand?.toLowerCase() === `${searchBrand}`
  );

  return (
    <main className="space-y-6 pt-14 xl:pt-0">
      <SectionHeader
        title={`Brand ${searchBrand}`}
        linkName={`${searchBrand}`}
      />
      <DynamicProductDisplay products={brandProducts} />
    </main>
  );
}
