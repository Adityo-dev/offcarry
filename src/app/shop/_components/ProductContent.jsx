import ProductCart from "@/components/productCarts/productsCart/ProductCart";
import NoProductsFound from "./NotFound";

const ProductContent = ({ filteredProducts }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div className="mb-4 sm:mb-0">
          <span className="text-md font-bold">Showing 1–12 of 76 results</span>
        </div>
        <div className="flex items-center">
          <span className="text-md mr-2">Sort by</span>

          <span className="text-md bg-slate-200 py-2 px-4 rounded-full cursor-pointer">
            Default
          </span>
        </div>
      </div>
      <hr className="my-6" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 lg:gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, ind) => (
            <ProductCart key={ind} product={product} />
          ))
        ) : (
          <NoProductsFound />
        )}
      </div>
    </div>
  );
};

export default ProductContent;
