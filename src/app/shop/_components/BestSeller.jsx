import Image from "next/image";

const BestSeller = ({ filteredProducts }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Best Seller</h3>
      </div>
      <div className="space-y-4">
        {filteredProducts?.slice(0, 3).map((product) => (
          <div
            key={product.id}
            className="flex gap-3 p-2 border rounded-lg hover:shadow-sm transition-shadow"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-md">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="w-16 h-16 object-cover rounded-lg"
              />
            </div>
            <div>
              <p className="text-sm font-medium">{product.name}</p>
              <p className="text-sm text-blue-500">
                ${product.price.toFixed(2)}
              </p>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </div>
                <span className="text-xs text-gray-500 ml-1">
                  ({product.reviews})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
