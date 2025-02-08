import BestSeller from "./BestSeller";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import RangeProduct from "./RangeProduct";
import Reset from "./Reset";
import SizeFilter from "./SizeFilter";

const Filter = ({
  resetFilters,
  selectedCategory,
  selectedSize,
  selectedColor,
  isOpenCategory,
  isOpenSize,
  isOpenColor,
  priceRange,
  setPriceRange,
  products,
  filteredProducts,
  setSelectedCategory,
  setSelectedSize,
  setSelectedColor,
  setIsOpenCategory,
  setIsOpenSize,
  setIsOpenColor,
}) => {
  return (
    <div className="border-r bg-white p-4 space-y-6 hidden sm:block">
      {/* Product Header */}
      <Reset resetFilters={resetFilters} />
      <hr />

      {/* Category Section */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        products={products}
        isOpenCategory={isOpenCategory}
        setIsOpenCategory={setIsOpenCategory}
      />

      {/* Size Section */}
      <SizeFilter
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        products={products}
        isOpenSize={isOpenSize}
        setIsOpenSize={setIsOpenSize}
      />

      {/* Color Section */}
      <ColorFilter
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        products={products}
        isOpenColor={isOpenColor}
        setIsOpenColor={setIsOpenColor}
      />

      {/* Price Range Section */}
      <RangeProduct priceRange={priceRange} setPriceRange={setPriceRange} />

      {/* Best Seller Section */}
      <BestSeller filteredProducts={filteredProducts} />
    </div>
  );
};

export default Filter;
