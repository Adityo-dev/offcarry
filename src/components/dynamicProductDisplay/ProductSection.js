"use client";

import { Filter } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DynamicFilter from "./DynamicFilter";
import ProductDisplay from "./ProductDisplay";
import Pagination from "./Pagination";

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
  // Pagination
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  return (
    <section className="w-full grid-cols-none col-span-10">
      <div className=" p-2.5 md:p-4 mb-5 flex justify-between items-center gap-6 border border-custom-border rounded-lg">
        <p className="text-lg font-medium hidden xl:block"></p>
        <div className="xl:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="bg-custom-border flex items-center gap-2 justify-center rounded-md">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </SheetTrigger>
            <SheetContent className="w-screen overflow-x-auto z-[50000] max-w-[350px]">
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

        <div className="flex items-center gap-6 text-sm md:text-base">
          <div className="flex gap-2 items-center justify-between">
            <p className="font-medium">Sort By:</p>
            <div className="relative inline-block sm:w-48">
              <select
                onChange={handleSortChange}
                className="block w-36 sm:w-full h-7 px-3 py-1 text-sm border border-custom-border bg-white rounded shadow-sm outline-none cursor-pointer"
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

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      )}
    </section>
  );
};

export default ProductSection;
