import ProductImagesGallery from "./_component/ProductImagesGallery";
import ProductDetails from "./_component/ProductDetails";
import ProductTabs from "./_component/ProductTabs";
import ChatNow from "./_component/ChatNow";
import RelatedProducts from "@/components/relatedProducts/RelatedProducts";
import Video from "./_component/Video";

const SingleProductPage = async ({ params }) => {
  const searchParams = params?.id.split("-");
  const searchId = parseInt(searchParams.pop());

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/shop/products/${searchId}`
  );
  const singleProductData = await response.json();

  return (
    <div className="container mx-auto px-4 pt-16 xl:pt-6 space-y-16">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-full lg:col-span-6 xl:col-span-5 space-y-7">
          <ProductImagesGallery data={singleProductData?.variations} />
          <ChatNow />
        </div>
        <div className="col-span-full lg:col-span-6 xl:col-span-7">
          <ProductDetails productDetails={singleProductData} />
        </div>
      </div>
      <ProductTabs review={singleProductData?.Review} productId={searchId} />
      <Video />
      <RelatedProducts />
    </div>
  );
};

export default SingleProductPage;
