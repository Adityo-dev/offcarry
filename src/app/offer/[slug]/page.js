import ProductCart from "@/components/productCarts/productsCart/ProductCart";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
const OfferProduct = [
  {
    id: 1,
    name: "Product 1",
    currentPrice: 100,
    image: "/images/product6.jpg",
    title: "Men’s full sleeve Jacket",
    oldPrice: "0",
    stock: 10,
    filters: [
      { filterName: "Availability", value: "in stock" },
      { filterName: "brand", value: "Brand A" },
      { filterName: "storage", value: "64GB" },
    ],
  },
  {
    id: 2,
    name: "Product 2",
    currentPrice: 120,
    image: "/images/product7.jpg",
    title: "Women’s winter coat",
    oldPrice: "150.00",
    stock: 5,
    filters: [
      { filterName: "Availability", value: "low stock" },
      { filterName: "brand", value: "Brand B" },
      { filterName: "storage", value: "128GB" },
    ],
  },
  {
    id: 3,
    name: "Product 3",
    currentPrice: 80,
    image: "/images/product8.jpg",
    title: "Kids’ rain jacket",
    oldPrice: "100.00",
    stock: 15,
    filters: [
      { filterName: "Availability", value: "in stock" },
      { filterName: "brand", value: "Brand C" },
      { filterName: "storage", value: "32GB" },
    ],
  },
  {
    id: 4,
    name: "Product 4",
    currentPrice: 200,
    image: "/images/product10.jpg",
    title: "Men’s leather jacket",
    oldPrice: "250.00",
    stock: 8,
    filters: [
      { filterName: "Availability", value: "in stock" },
      { filterName: "brand", value: "Brand D" },
      { filterName: "storage", value: "256GB" },
    ],
  },
  {
    id: 5,
    name: "Product 5",
    currentPrice: 150,
    image: "/images/product9.jpg",
    title: "Women’s summer dress",
    oldPrice: "180.00",
    stock: 12,
    filters: [
      { filterName: "Availability", value: "in stock" },
      { filterName: "brand", value: "Brand E" },
      { filterName: "storage", value: "64GB" },
    ],
  },
  {
    id: 6,
    name: "Product 6",
    currentPrice: 90,
    image: "/images/product6.jpg",
    title: "Men’s casual shirt",
    oldPrice: "110.00",
    stock: 20,
    filters: [
      { filterName: "Availability", value: "in stock" },
      { filterName: "brand", value: "Brand F" },
      { filterName: "storage", value: "128GB" },
    ],
  },
  {
    id: 7,
    name: "Product 7",
    currentPrice: 70,
    image: "/images/product7.jpg",
    title: "Women’s formal blouse",
    oldPrice: "90.00",
    stock: 18,
    filters: [
      { filterName: "Availability", value: "in stock" },
      { filterName: "brand", value: "Brand G" },
      { filterName: "storage", value: "32GB" },
    ],
  },
  {
    id: 8,
    name: "Product 8",
    currentPrice: 300,
    image: "/images/product8.jpg",
    title: "Men’s winter coat",
    oldPrice: "350.00",
    stock: 6,
    filters: [
      { filterName: "Availability", value: "low stock" },
      { filterName: "brand", value: "Brand H" },
      { filterName: "storage", value: "512GB" },
    ],
  },
  {
    id: 9,
    name: "Product 9",
    currentPrice: 110,
    image: "/images/product9.jpg",
    title: "Women’s casual top",
    oldPrice: "130.00",
    stock: 14,
    filters: [
      { filterName: "Availability", value: "in stock" },
      { filterName: "brand", value: "Brand I" },
      { filterName: "storage", value: "64GB" },
    ],
  },
  {
    id: 10,
    name: "Product 10",
    currentPrice: 180,
    image: "/images/product10.jpg",
    title: "Men’s formal suit",
    oldPrice: "200.00",
    stock: 9,
    filters: [
      { filterName: "Availability", value: "in stock" },
      { filterName: "brand", value: "Brand J" },
      { filterName: "storage", value: "256GB" },
    ],
  },
  {
    id: 11,
    name: "Product 11",
    currentPrice: 95,
    image: "/images/product11.jpg",
    title: "Women’s winter jacket",
    oldPrice: "120.00",
    stock: 7,
    filters: [
      { filterName: "Availability", value: "low stock" },
      { filterName: "brand", value: "Brand K" },
      { filterName: "storage", value: "128GB" },
    ],
  },
  {
    id: 12,
    name: "Product 12",
    currentPrice: 130,
    image: "/images/product110.jpg",
    title: "Men’s casual pants",
    oldPrice: "150.00",
    stock: 11,
    filters: [
      { filterName: "Availability", value: "in stock" },
      { filterName: "brand", value: "Brand L" },
      { filterName: "storage", value: "64GB" },
    ],
  },
  {
    id: 13,
    name: "Product 13",
    currentPrice: 85,
    image: "/images/product9.jpg",
    title: "Women’s summer skirt",
    oldPrice: "100.00",
    stock: 16,
    filters: [
      { filterName: "Availability", value: "in stock" },
      { filterName: "brand", value: "Brand M" },
      { filterName: "storage", value: "32GB" },
    ],
  },
  {
    id: 14,
    name: "Product 14",
    currentPrice: 220,
    image: "/images/product6.jpg",
    title: "Men’s leather shoes",
    oldPrice: "250.00",
    stock: 4,
    filters: [
      { filterName: "Availability", value: "low stock" },
      { filterName: "brand", value: "Brand a" },
      { filterName: "storage", value: "512GB" },
    ],
  },
  {
    id: 15,
    name: "Product 15",
    currentPrice: 160,
    image: "/images/product8.jpg",
    title: "Women’s winter boots",
    oldPrice: "180.00",
    stock: 13,
    filters: [
      { filterName: "Availability", value: "in stock" },
      { filterName: "brand", value: "Brand a" },
      { filterName: "storage", value: "128GB" },
    ],
  },
  {
    id: 16,
    name: "Product 16",
    currentPrice: 75,
    image: "/images/product10.jpg",
    title: "Men’s casual shoes",
    oldPrice: "90.00",
    stock: 19,
    filters: [
      { filterName: "Availability", value: "in stock" },
      { filterName: "brand", value: "Brand a" },
      { filterName: "storage", value: "64GB" },
    ],
  },
  {
    id: 17,
    name: "Product 17",
    currentPrice: 140,
    image: "/images/product7.jpg",
    title: "Women’s formal dress",
    oldPrice: "160.00",
    stock: 10,
    filters: [
      { filterName: "Availability", value: "in stock" },
      { filterName: "brand", value: "Brand Q" },
      { filterName: "storage", value: "256GB" },
    ],
  },
  {
    id: 18,
    name: "Product 18",
    currentPrice: 95,
    image: "/images/product8.jpg",
    title: "Men’s winter gloves",
    oldPrice: "110.00",
    stock: 17,
    filters: [
      { filterName: "Availability", value: "in stock" },
      { filterName: "brand", value: "Brand R" },
      { filterName: "storage", value: "32GB" },
    ],
  },
  {
    id: 19,
    name: "Product 19",
    currentPrice: 200,
    image: "/images/product9.jpg",
    title: "Women’s summer hat",
    oldPrice: "220.00",
    stock: 8,
    filters: [
      { filterName: "Availability", value: "low stock" },
      { filterName: "brand", value: "Brand S" },
      { filterName: "storage", value: "128GB" },
    ],
  },
  {
    id: 20,
    name: "Product 20",
    currentPrice: 110,
    image: "/images/product10.jpg",
    title: "Men’s casual hat",
    oldPrice: "130.00",
    stock: 14,
    filters: [
      { filterName: "Availability", value: "in stock" },
      { filterName: "brand", value: "Brand T" },
      { filterName: "storage", value: "64GB" },
    ],
  },
];

function OfferDetails() {
  return (
    <main className="space-y-6 pt-14 xl:pt-0">
      <SectionHeader title={"Offer Details"} linkName={"offer details"} />
      <header className="container mx-auto px-2 text-center">
        <h4 className="text-3xl">চলছে স্টার টেক ১৮ বর্ষপূর্তি Mega Deal!!</h4>
        <p className="text-lg mt-4">
          স্টার টেকের ১৮তম বর্ষপূর্তিতে দারুণ অফার! যেকোনো প্রযুক্তি পণ্যে থাকছে
          নিশ্চিত মূল্যছাড়, বিকাশ পেমেন্টে ১০% ইনস্ট্যান্ট ক্যাশব্যাক এবং ফ্রি
          ডেলিভারি! এছাড়াও, Laptop কিনে Laptop, Desktop কিনে Monitor সহ জিতে নিন
          Gym Bag, Smartwatch ও ২,০০০ টাকা গিফট ভাউচারসহ আকর্ষণীয় পুরস্কার!
          এছাড়াও লাকি কুপনে জিতে নিন iPhone 16, Laptop, Monitor সহ ১৮টি মেগা
          পুরস্কার!
        </p>
        <h4 className="text-2xl mt-6">অফারের শর্তাবলী</h4>
        <ul className="mt-2">
          <li>এই অফার প্রযুক্তি পণ্যের জন্য প্রযোজ্য</li>
          <li>এই অফার শুধুমাত্র অনলাইনে প্রযোজ্য</li>
          <li>এই অফার প্রযুক্তি পণ্যের জন্য প্রযোজ্য</li>
          <li>এই অফার শুধুমাত্র অনলাইনে প্রযোজ্য</li>
        </ul>
        <p className="mt-4">ENDING IN</p>
        <span>10 days 20 hours 30 minutes 40 seconds</span>
      </header>

      <section className="container mx-auto px-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
        {OfferProduct.map((OfferProduct, ind) => (
          <ProductCart product={OfferProduct} key={ind} />
        ))}
      </section>
    </main>
  );
}

export default OfferDetails;
