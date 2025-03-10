import { useState, useEffect } from "react";
import CheckoutItemsCart from "./CheckoutItemsCart";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart } from "@/components/contextApi/context/CartContext";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "@/utils/LocalStorageUtils";

export default function ShoppingCart() {
  const { cart, removeFromCart } = useCart();

  // Load selected items from localStorage
  const [selectedItems, setSelectedItems] = useState(() => {
    return loadFromLocalStorage("selectedItems") || [];
  });

  // Save selected items to localStorage when they change
  useEffect(() => {
    saveToLocalStorage("selectedItems", selectedItems);
  }, [selectedItems]);

  // Check if any items are already selected on page load or after refreshing
  useEffect(() => {
    const storedItems = loadFromLocalStorage("selectedItems") || [];

    // If there are selected items in localStorage, set them
    if (storedItems.length > 0) {
      setSelectedItems(storedItems);
    } else {
      // If no selected items, keep selectedItems empty
      setSelectedItems([]);
    }
  }, [cart]);

  // Handle individual item selection
  const handleSelectItem = (item) => {
    setSelectedItems((prevSelectedItems) => {
      const isAlreadySelected = prevSelectedItems.some(
        (selected) => selected.id === item.id
      );

      let newSelectedItems;
      if (isAlreadySelected) {
        newSelectedItems = prevSelectedItems.filter(
          (selected) => selected.id !== item.id
        );
      } else {
        newSelectedItems = [...prevSelectedItems, item];
      }

      // Update localStorage with the new selection
      saveToLocalStorage("selectedItems", newSelectedItems);
      return newSelectedItems;
    });
  };

  // Handle select/deselect all items
  const handleSelectAll = () => {
    if (selectedItems.length === cart.length) {
      setSelectedItems([]); // Deselect all
    } else {
      setSelectedItems(cart); // Select all
    }
  };

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
              className="text-sm font-medium leading-none cursor-pointer"
            >
              Select All ({selectedItems.length} Items)
            </label>
          </div>
        </div>
        <button
          className="text-red-500 hover:underline"
          onClick={() => {
            setSelectedItems([]);
            saveToLocalStorage("selectedItems", []);
          }}
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
