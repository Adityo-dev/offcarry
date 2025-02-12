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
        title: "Apple Watch Series 8",
        image: "/images/products3.png",
        currentPrice: "50,000",
        oldPrice: "55,000",

        stock: "3",
      },
      {
        title: "TWS Loop Wireless Headphones with charging",
        image: "/images/product5.jpg",
        currentPrice: "1,30,000",
        oldPrice: "1,50,000",

        stock: "10",
      },
      {
        title: "iPhone 14 Pro Max",
        image: "/images/product6.jpg",
        currentPrice: "1,30,000",
        oldPrice: "1,50,000",

        stock: "5",
      },
      {
        title: "Dell XPS 15",
        image: "/images/product7.jpg",
        currentPrice: "2,20,000",
        oldPrice: "2,50,000",

        stock: "5",
      },
      {
        title: "HP Spectre x360",
        image: "/images/product8.jpg",
        currentPrice: "1,80,000",
        oldPrice: "2,00,000",

        stock: "10",
      },
      {
        title: "Samsung Galaxy S23 Ultra",
        image: "/images/product9.jpg",
        currentPrice: "1,20,000",
        oldPrice: "1,35,000",

        stock: "0",
      },
      {
        title: "Google Pixel 7 Pro",
        image: "/images/product10.jpg",
        currentPrice: "85,000",
        oldPrice: "95,000",

        stock: "20",
      },
      {
        title: 'MacBook Pro 16"',
        image: "/images/product11.jpg",
        currentPrice: "2,50,000",
        oldPrice: "2,80,000",

        stock: "0",
      },
      {
        title: "Dell XPS 15",
        image: "/images/products4.png",
        currentPrice: "2,20,000",
        oldPrice: "2,50,000",

        stock: "5",
      },
      {
        title: "Dell XPS 15",
        image: "/images/product10.jpg",
        currentPrice: "2,20,000",
        oldPrice: "2,50,000",

        stock: "5",
      },
      {
        title: "HP Spectre x360",
        image: "/images/product6.jpg",
        currentPrice: "1,80,000",
        oldPrice: "2,00,000",

        stock: "10",
      },
      {
        title: "Asus ZenBook Duo",
        image: "/images/products4.png",
        currentPrice: "1,70,000",
        oldPrice: "1,90,000",

        stock: "10",
      },
    ],
  },
  {
    value: "laptop",
    label: "Laptop",
    products: [
      {
        title: 'MacBook Pro 16"',
        image: "/images/product6.jpg",
        currentPrice: "2,50,000",
        oldPrice: "2,80,000",

        stock: "0",
      },
      {
        title: "Dell XPS 15",
        image: "/images/product11.jpg",
        currentPrice: "2,20,000",
        oldPrice: "2,50,000",

        stock: "5",
      },
      {
        title: "HP Spectre x360",
        image: "/images/product9.jpg",
        currentPrice: "1,80,000",
        oldPrice: "2,00,000",

        stock: "10",
      },
      {
        title: "Asus ZenBook Duo",
        image: "/images/product10.jpg",
        currentPrice: "1,70,000",
        oldPrice: "1,90,000",

        stock: "10",
      },
    ],
  },
  {
    value: "watch",
    label: "Watch",
    products: [
      {
        title: "Apple Watch Series 8",
        image: "/images/product7.jpg",
        currentPrice: "50,000",
        oldPrice: "55,000",

        stock: "3",
      },
      {
        title: "TWS Loop Wireless Headphones with charging",
        image: "/images/product5.jpg",
        currentPrice: "1,30,000",
        oldPrice: "1,50,000",

        stock: "10",
      },
      {
        title: "iPhone 14 Pro Max",
        image: "/images/product6.jpg",
        currentPrice: "1,30,000",
        oldPrice: "1,50,000",

        stock: "5",
      },
      {
        title: "Dell XPS 15",
        image: "/images/product11.jpg",
        currentPrice: "2,20,000",
        oldPrice: "2,50,000",

        stock: "5",
      },
      {
        title: "HP Spectre x360",
        image: "/images/product9.jpg",
        currentPrice: "1,80,000",
        oldPrice: "2,00,000",

        stock: "10",
      },
      {
        title: "Samsung Galaxy S23 Ultra",
        image: "/images/product7.jpg",
        currentPrice: "1,20,000",
        oldPrice: "1,35,000",

        stock: "0",
      },
      {
        title: "Google Pixel 7 Pro",
        image: "/images/product8.jpg",
        currentPrice: "85,000",
        oldPrice: "95,000",

        stock: "20",
      },
      {
        title: 'MacBook Pro 16"',
        image: "/images/product6.jpg",
        currentPrice: "2,50,000",
        oldPrice: "2,80,000",

        stock: "0",
      },
      {
        title: "Dell XPS 15",
        image: "/images/product11.jpg",
        currentPrice: "2,20,000",
        oldPrice: "2,50,000",

        stock: "5",
      },
      {
        title: "Dell XPS 15",
        image: "/images/product11.jpg",
        currentPrice: "2,20,000",
        oldPrice: "2,50,000",

        stock: "5",
      },
      {
        title: "HP Spectre x360",
        image: "/images/product9.jpg",
        currentPrice: "1,80,000",
        oldPrice: "2,00,000",

        stock: "10",
      },
      {
        title: "Asus ZenBook Duo",
        image: "/images/product10.jpg",
        currentPrice: "1,70,000",
        oldPrice: "1,90,000",

        stock: "10",
      },
    ],
  },
  {
    value: "accessories",
    label: "Accessories",
    products: [
      {
        title: "AirPods Pro",
        image: "/images/product5.jpg",
        currentPrice: "25,000",
        oldPrice: "30,000",

        stock: "10",
      },
    ],
  },
];

function BestSellers() {
  return (
    <section className="container mx-auto px-4">
      <Tabs defaultValue="smartphone" className="w-full">
        {/* TITLE AND TABS LIST */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-4xl">Best Sellers</h2>
          <TabsList className="space-x-4 sm:space-x-7">
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
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
