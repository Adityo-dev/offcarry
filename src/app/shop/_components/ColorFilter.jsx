import ToggleIcon from "./ToggleIcon";

const ColorFilter = ({
  selectedColor,
  setSelectedColor,
  products,
  isOpenColor,
  setIsOpenColor,
}) => {
  return (
    <div className="border-b pb-4">
      <div
        className="flex justify-between items-center mb-2 cursor-pointer"
        onClick={() => setIsOpenColor(!isOpenColor)}
      >
        <h3 className="font-bold">Color</h3>
        <ToggleIcon isOpen={isOpenColor} />
      </div>
      {isOpenColor && (
        <div className="space-y-2">
          {["Blue", "Red", "Green", "Gray"].map((color) => (
            <label
              key={color}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="color"
                value={color}
                checked={selectedColor === color}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-4 h-4 text-blue-500"
              />
              <span className="flex-1">{color}</span>
              <span className="text-sm text-gray-500">
                ({products.filter((p) => p.color === color).length})
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorFilter;
