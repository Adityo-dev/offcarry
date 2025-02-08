import ToggleIcon from "./ToggleIcon";

const CategoryFilter = ({
  selectedCategory,
  setSelectedCategory,
  products,
  isOpenCategory,
  setIsOpenCategory,
}) => {
  return (
    <div className="border-b pb-4">
      <div
        className="flex justify-between items-center mb-2 cursor-pointer"
        onClick={() => setIsOpenCategory(!isOpenCategory)}
      >
        <h3 className=" font-bold">Category</h3>
        <ToggleIcon isOpen={isOpenCategory} />
      </div>
      {isOpenCategory && (
        <div className="space-y-2">
          {["Outerwear", "Tops", "Bottoms", "Footwear"].map((category) => (
            <label
              key={category}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-4 h-4 text-blue-500"
              />
              <span className="flex-1">{category}</span>
              <span className="text-sm text-gray-500">
                ({products.filter((p) => p.category === category).length})
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
