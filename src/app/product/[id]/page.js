import ProductImagesGallery from "./_component/ProductImagesGallery";
import ProductDetails from "./_component/ProductDetails";
import ProductTabs from "./_component/ProductTabs";
import ChatNow from "./_component/ChatNow";
import RelatedProducts from "@/components/relatedProducts/RelatedProducts";
import Video from "./_component/Video";

const productImages = [
  { id: 1, src: "/images/product6.jpg" },
  { id: 2, src: "/images/product8.jpg" },
  { id: 3, src: "/images/product9.jpg" },
  { id: 4, src: "/images/product10.jpg" },
  { id: 5, src: "/images/product11.jpg" },
  { id: 6, src: "/images/product5.jpg" },
  { id: 7, src: "/images/product7.jpg" },
];

const SingleProductPage = () => {
  return (
    <div className="container mx-auto px-4 pt-16 xl:pt- space-y-16 ">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-full lg:col-span-6 xl:col-span-5 space-y-7">
          <ProductImagesGallery data={{ src: productImages }} />
          <ChatNow />
        </div>
        <div className="col-span-full lg:col-span-6 xl:col-span-7">
          <ProductDetails />
        </div>
      </div>
      <ProductTabs />
      <Video />
      <RelatedProducts />
    </div>
  );
};

export default SingleProductPage;
