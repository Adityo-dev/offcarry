const RangeProduct = ({ priceRange, setPriceRange }) => {
  return (
    <div className="border-b pb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">Price Range</h3>
      </div>
      <input
        type="range"
        min="0"
        max="200"
        value={priceRange}
        onChange={(e) => setPriceRange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="text-sm text-gray-500 mt-2">Max Price: ${priceRange}</div>
    </div>
  );
};

export default RangeProduct;
