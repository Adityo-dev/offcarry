"use client";

import { Frown } from "lucide-react";
import ProductCart from "../productCarts/productsCart/ProductCart";

const ProductDisplay = ({ displayedProducts }) => {
  return (
    <div className="grid grid-cols-6 gap-6">
      {displayedProducts.length > 0 ? (
        displayedProducts.map((data, ind) => (
          <div key={ind}>
            <ProductCart product={data} />
          </div>
        ))
      ) : (
        <div className="col-span-5 ">
          <div className="flex flex-col h-[50vh] justify-center items-center text-custom-secondary">
            <span className="w-20 h-20 text-4xl text-custom-white bg-custom-primary flex items-center justify-center rounded-full p-5">
              <Frown className="w-10 h-10" />
            </span>
            <p className="mt-4 mb-2 font-medium">Sorry! No Product Founds</p>
            <p>Please try searching for something else</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;
