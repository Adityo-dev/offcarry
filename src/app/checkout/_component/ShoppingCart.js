import { useState, useEffect } from "react";
import CheckoutItemsCart from "./CheckoutItemsCart";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart } from "@/components/contextApi/context/CartContext";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "@/utils/LocalStorageUtils";

export default function ShoppingCart() {
  const { cart, addToCart, removeFromCart } = useCart();

  // লোকাল স্টোরেজ থেকে সিলেক্টেড আইটেম লোড করুন
  const [selectedItems, setSelectedItems] = useState(() => {
    return loadFromLocalStorage("selectedItems") || [];
  });

  // সিলেক্টেড আইটেম আপডেট হলে লোকাল স্টোরেজে সংরক্ষণ করুন
  useEffect(() => {
    saveToLocalStorage("selectedItems", selectedItems);
  }, [selectedItems]);

  // নতুন আইটেম যোগ হলে সেটি সঠিকভাবে সিলেক্ট করা হবে
  useEffect(() => {
    if (cart.length > 0) {
      const newItems = cart.filter(
        (item) => !selectedItems.some((selected) => selected.id === item.id)
      );

      if (
        selectedItems.length > 0 ||
        loadFromLocalStorage("selectedItems").length > 0
      ) {
        // আগে যদি কিছু সিলেক্ট থাকে, তাহলে নতুন আইটেমগুলো সিলেক্ট হবে
        setSelectedItems([...selectedItems, ...newItems]);
      } else if (newItems.length > 0) {
        // সব আনসিলেক্টেড থাকলে, নতুন যোগ করা শুধু একাই সিলেক্ট হবে
        setSelectedItems([newItems[newItems.length - 1]]);
      }
    }
  }, [cart]);

  const handleSelectItem = (item) => {
    setSelectedItems((prevSelectedItems) => {
      const isAlreadySelected = prevSelectedItems.some(
        (selected) => selected.id === item.id
      );

      if (isAlreadySelected) {
        return prevSelectedItems.filter((selected) => selected.id !== item.id);
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedItems.length === cart.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cart);
    }
  };

  console.log("Selected Items Data:", selectedItems);

  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6 max-w-4xl">
      <div className="flex justify-between items-center border-b pb-4">
        <div className="space-y-2">
          <h2 className="text-lg text-[#38311F] font-semibold">
            {cart.length} Items In Cart
          </h2>
          <div className="flex items-center gap-2">
            <Checkbox
              id="selectAll"
              className="w-4 h-4"
              checked={selectedItems.length === cart.length && cart.length > 0}
              onCheckedChange={handleSelectAll}
            />
            <label
              htmlFor="selectAll"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Select All ({selectedItems.length} Items)
            </label>
          </div>
        </div>
        <button
          className="text-red-500 hover:underline"
          onClick={() => setSelectedItems([])}
        >
          Remove All
        </button>
      </div>

      {cart.map((item, ind) => (
        <CheckoutItemsCart
          key={ind}
          item={item}
          removeFromCart={removeFromCart}
          handleSelectItem={handleSelectItem}
          selectedItems={selectedItems}
        />
      ))}
    </div>
  );
}
