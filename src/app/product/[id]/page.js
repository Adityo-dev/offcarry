import ProductImagesGallery from "./_component/ProductImagesGallery";
import ProductDetails from "./_component/ProductDetails";
import ProductTabs from "./_component/ProductTabs";
import ChatNow from "./_component/ChatNow";
import RelatedProducts from "@/components/relatedProducts/RelatedProducts";

const productImages = [
  { id: 1, src: "/images/products3.png" },
  { id: 2, src: "/images/products1.png" },
  { id: 3, src: "/images/products2.png" },
  { id: 4, src: "/images/products4.png" },
  { id: 5, src: "/images/products1.png" },
  { id: 6, src: "/images/products1.png" },
  { id: 7, src: "/images/products1.png" },
];

const SingleProductPage = () => {
  return (
    <div className="container mx-auto px-4 pt-6 space-y-16">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-full lg:col-span-6 xl:col-span-5 space-y-7">
          <ProductImagesGallery productImages={productImages} />
          <ChatNow />
        </div>
        <div className="col-span-full lg:col-span-6 xl:col-span-7">
          <ProductDetails />
        </div>
      </div>
      <ProductTabs />
      <RelatedProducts />
    </div>
  );
};

export default SingleProductPage;
