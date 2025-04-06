import ProductCart from "@/components/productCarts/productsCart/ProductCart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

async function BestSellers() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/shop/products`,
    {
      cache: "no-cache",
    }
  );
  const data = await response.json();
  const productsData = data?.products || [];

  const bestSellerProducts = productsData.filter(
    (product) => product.isBestSeller
  );

  const categories = [
    ...new Set(
      bestSellerProducts.map((product) => product.category.toLowerCase())
    ),
  ];

  return (
    <section className="container mx-auto px-2">
      <Tabs defaultValue={categories[0] || ""} className="w-full">
        {/* TITLE AND TABS LIST */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mb-5 md:mb-7">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
            Best Sellers
          </h2>
          <TabsList className="space-x-4 md:space-x-5 lg:space-x-7">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:text-primary capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* TABS CONTAINER */}
        {categories.map((category) => (
          <TabsContent key={category} value={category} className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
              {bestSellerProducts
                .filter(
                  (product) => product.category.toLowerCase() === category
                )
                .map((product, index) => (
                  <ProductCart product={product} key={index} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

export default BestSellers;
