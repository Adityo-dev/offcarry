import ToggleIcon from "./ToggleIcon";

const SizeFilter = ({
  selectedSize,
  setSelectedSize,
  products,
  isOpenSize,
  setIsOpenSize,
}) => {
  return (
    <div className="border-b pb-4">
      <div
        className="flex justify-between items-center mb-2 cursor-pointer"
        onClick={() => setIsOpenSize(!isOpenSize)}
      >
        <h3 className="font-bold">Size</h3>
        <ToggleIcon isOpen={isOpenSize} />
      </div>
      {isOpenSize && (
        <div className="space-y-2">
          {["Large", "Medium", "Small"].map((size) => (
            <label
              key={size}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="size"
                value={size}
                checked={selectedSize === size}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-4 h-4 text-blue-500"
              />
              <span className="flex-1">{size}</span>
              <span className="text-sm text-gray-500">
                ({products.filter((p) => p.size === size).length})
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default SizeFilter;
