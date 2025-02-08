// TABS COMPONENTS
import ProductCart from "@/components/productCart/ProductCart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// PRODUCTS DATA
const tabsData = [
  {
    value: "smartphone",
    label: "Smart Phone",
    products: [
      {
        name: "iPhone 14 Pro Max",
        image: "/images/products1.png",
        currentPrice: "1,30,000",
        oldPrice: "1,50,000",
      },
      {
        name: "iPhone 14 Pro Max",
        image: "/images/products1.png",
        currentPrice: "1,30,000",
        oldPrice: "1,50,000",
      },
      {
        name: "Samsung Galaxy S23 Ultra",
        image: "/images/products1.png",
        currentPrice: "1,20,000",
        oldPrice: "1,35,000",
      },
      {
        name: "Google Pixel 7 Pro",
        image: "/images/products1.png",
        currentPrice: "85,000",
        oldPrice: "95,000",
      },
      {
        name: "OnePlus 11R",
        image: "/images/products1.png",
        currentPrice: "65,000",
        oldPrice: "75,000",
      },
    ],
  },
  {
    value: "laptop",
    label: "Laptop",
    products: [
      {
        name: 'MacBook Pro 16"',
        image: "/images/products2.png",
        currentPrice: "2,50,000",
        oldPrice: "2,80,000",
      },
      {
        name: "Dell XPS 15",
        image: "/images/products2.png",
        currentPrice: "2,20,000",
        oldPrice: "2,50,000",
      },
      {
        name: "HP Spectre x360",
        image: "/images/products2.png",
        currentPrice: "1,80,000",
        oldPrice: "2,00,000",
      },
      {
        name: "Asus ZenBook Duo",
        image: "/images/products2.png",
        currentPrice: "1,70,000",
        oldPrice: "1,90,000",
      },
    ],
  },
  {
    value: "watch",
    label: "Watch",
    products: [
      {
        name: "Apple Watch Series 8",
        image: "/images/products2.png",
        currentPrice: "50,000",
        oldPrice: "55,000",
      },
    ],
  },
  {
    value: "accessories",
    label: "Accessories",
    products: [
      {
        name: "AirPods Pro",
        image: "/images/products2.png",
        currentPrice: "25,000",
        oldPrice: "30,000",
      },
    ],
  },
];

function BestSellers() {
  return (
    <section className="container mx-auto px-4">
      <Tabs defaultValue="smartphone" className="w-full">
        {/* TITLE AND TABS LIST */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl">Best Sellers</h2>
          <TabsList className="space-x-7">
            {tabsData.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* TABS CONTAINER */}
        {tabsData.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {tab.products.map((product, index) => (
                // PRODUCTS CART
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
