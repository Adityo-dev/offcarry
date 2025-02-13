import SectionHeader from "@/components/sectionHeader/SectionHeader";
import ProductFilters from "./_components/ProductFilter";

export default function ShopPage() {
  return (
    <>
      <SectionHeader title={"TrustNest Shop"} linkName={"shop"} />
      <ProductFilters />
    </>
  );
}
