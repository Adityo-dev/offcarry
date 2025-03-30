import { useCart } from "@/components/contextApi/context/CartContext";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash, X } from "lucide-react";
import Image from "next/image";

function CheckoutItemsCart({
  item,
  removeFromCart,
  handleSelectItem,
  selectedItems,
}) {
  const { updateQuantity } = useCart();
  const isSelected = selectedItems.some(
    (selected) => selected?.id === item?.id
  );
  console.log(item, "item in checkout cart");

  return (
    <div className="bg-[#FAFAFA] flex flex-col sm:flex-row gap-4 items-center justify-between border p-4 rounded-lg relative">
      <Checkbox
        id={`select-${item?.id}`}
        className="w-4 h-4"
        checked={isSelected}
        onCheckedChange={() => handleSelectItem(item)}
      />

      <div className="flex items-center gap-4 w-full">
        <div className="w-20 h-20 bg-white rounded-lg overflow-hidden">
          <Image
            src={item?.image}
            width={400}
            height={400}
            alt={`${item?.name} - ${item?.size} Size | ${item?.category} | $${item?.price}`}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <p className="font-medium text-sm">
            {`${item?.name || "Unknown Product"} ${
              item?.color ? `- ${item.color}` : ""
            } ${item?.size ? `- ${item.size} Size` : ""}`}
          </p>

          <p className="text-sm text-gray-500 mt-1">{item?.category}</p>
        </div>
      </div>
      {/*  */}
      <div className="w-full sm:flex items-center justify-between mt-4 sm:mt-0">
        <div className="flex items-center justify-between pb-2.5 sm:pb-0">
          <p className="sm:hidden">Price</p>
          <p className="font-medium">৳{item?.price}</p>
        </div>
        <div className="flex items-center justify-between border-y border-dotted py-2.5 sm:py-0 sm:border-none">
          <p className="sm:hidden">Quantities</p>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              className="px-2 py-1"
              onClick={() => updateQuantity(item?.id, -1)}
            >
              -
            </button>
            <span className="px-4">{item?.quantity}</span>
            <button
              className="px-2 py-1"
              onClick={() => updateQuantity(item?.id, 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center pt-2.5 sm:pt-0 justify-between">
          <p className="sm:hidden">SubTotal</p>
          <p className="text-green-500 font-semibold">
            ৳{(item?.price * item?.quantity).toFixed(2)}
          </p>
        </div>
        <button
          onClick={() => removeFromCart(item?.id)}
          className="text-red-500 hover:text-red-700 ml-4 hidden md:block"
        >
          <Trash size={20} />
        </button>
        <button
          onClick={() => removeFromCart(item?.id)}
          className="absolute top-1.5 right-1.5 md:relative text-red-500 hover:text-red-700 ml-4 block md:hidden"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}

export default CheckoutItemsCart;
