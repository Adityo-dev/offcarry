"use client";

import { Filter } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DynamicFilter from "./DynamicFilter";
import ProductDisplay from "./ProductDisplay";

const ProductSection = ({
  filterData,
  checkedItems,
  handleToggle,
  minPrice,
  maxPrice,
  handleMinPriceChange,
  handleMaxPriceChange,
  handleSortChange,
  displayedProducts,
}) => {
  return (
    <section className="w-full grid-cols-none col-span-10">
      <div className=" p-2.5 md:p-4 mb-5 flex justify-between items-center gap-6 border border-custom-border rounded-lg">
        <p className="text-lg font-medium hidden xl:block"></p>
        <div className="xl:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="bg-custom-border px-4  h-7 flex items-center gap-2 justify-center rounded-md">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </SheetTrigger>
            <SheetContent className="w-screen overflow-x-auto z-[50000] max-w-[320px] ">
              <DynamicFilter
                filterData={filterData}
                checkedItems={checkedItems}
                handleToggle={handleToggle}
                minPrice={minPrice}
                maxPrice={maxPrice}
                handleMinPriceChange={handleMinPriceChange}
                handleMaxPriceChange={handleMaxPriceChange}
              />
            </SheetContent>
          </Sheet>
        </div>

        {/* Sort By */}
        <div className="flex items-center gap-6 text-sm md:text-base">
          <div className="sm:flex gap-2 items-center min-w-full">
            <p className="font-medium">Sort By:</p>
            <div className="relative inline-block w-48">
              <select
                onChange={handleSortChange}
                className="block w-full h-7 px-3 py-1 text-sm border border-custom-border bg-white rounded shadow-sm outline-none cursor-pointer"
              >
                <option value="default">Default</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <ProductDisplay displayedProducts={displayedProducts} />
    </section>
  );
};

export default ProductSection;
