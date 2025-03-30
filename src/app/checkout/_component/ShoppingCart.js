import { useState, useEffect, useRef } from "react";
import CheckoutItemsCart from "./CheckoutItemsCart";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart } from "@/components/contextApi/context/CartContext";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "@/utils/LocalStorageUtils";

export default function ShoppingCart({ setSelectedItems1 }) {
  const { cart, removeFromCart } = useCart();

  // Load selected items from localStorage
  const [selectedItems, setSelectedItems] = useState(() => {
    return loadFromLocalStorage("selectedItems") || [];
  });

  // Use a ref to track the previous cart state
  const prevCartRef = useRef([]);

  // Save selected items to localStorage when they change
  useEffect(() => {
    saveToLocalStorage("selectedItems", selectedItems);
    setSelectedItems1(selectedItems);
    console.log("Selected Items Updated:", selectedItems);
  }, [selectedItems]);

  // Sync selectedItems with cart and auto-select only the latest new item
  useEffect(() => {
    console.log("Current Cart:", cart);
    console.log("Previous Cart:", prevCartRef.current);

    if (cart.length === 0) {
      setSelectedItems([]);
      prevCartRef.current = [];
      console.log("Cart is empty, cleared selected items");
      return;
    }

    // First render - Sync with localStorage but do not auto-select anything
    if (prevCartRef.current.length === 0 && cart.length > 0) {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) =>
          cart.some((cartItem) => cartItem.id === item.id)
        )
      );
      prevCartRef.current = [...cart];
      return;
    }

    // Detect only newly added items
    const newItems = cart.filter(
      (cartItem) =>
        !prevCartRef.current.some((prevItem) => prevItem.id === cartItem.id)
    );

    console.log("New Items Detected:", newItems);

    if (newItems.length > 0) {
      const lastNewItem = newItems[newItems.length - 1]; // Latest added item
      console.log("Last New Item:", lastNewItem);

      // Auto-select ONLY the latest new item
      setSelectedItems((prevSelectedItems) => {
        const filteredPrevItems = prevSelectedItems.filter((item) =>
          cart.some((cartItem) => cartItem.id === item.id)
        );
        return [...filteredPrevItems, lastNewItem]; // Only add latest new item
      });
      console.log("Auto-selected the latest new item:", lastNewItem);
    } else {
      // No new items, just sync existing selections
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) =>
          cart.some((cartItem) => cartItem.id === item.id)
        )
      );
      console.log("No new items, synced selected items with cart");
    }

    // Update previous cart reference
    prevCartRef.current = [...cart];
    console.log("Updated Previous Cart:", prevCartRef.current);
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

  // Reverse the cart array to show the latest item at the top (index 0)
  const displayedCart = [...cart].reverse();

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

      <div className="space-y-2 pt-4">
        {displayedCart.map((item, ind) => (
          <CheckoutItemsCart
            key={ind}
            item={item}
            removeFromCart={removeFromCart}
            handleSelectItem={handleSelectItem}
            selectedItems={selectedItems}
          />
        ))}
      </div>
    </div>
  );
}
