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
  const [selectedItems, setSelectedItems] = useState(() => {
    return loadFromLocalStorage("selectedItems") || [];
  });

  const prevCartRef = useRef([]);

  useEffect(() => {
    saveToLocalStorage("selectedItems", selectedItems);
    setSelectedItems1(selectedItems);
  }, [selectedItems]);

  useEffect(() => {
    if (cart.length === 0) {
      setSelectedItems([]);
      prevCartRef.current = [];
      return;
    }

    setSelectedItems((prevSelectedItems) => {
      return prevSelectedItems
        .map((selectedItem) => {
          const updatedItem = cart.find(
            (item) =>
              item.id === selectedItem.id &&
              item.variationId === selectedItem.variationId
          );
          return updatedItem ? updatedItem : selectedItem;
        })
        .filter((selectedItem) =>
          cart.some(
            (cartItem) =>
              cartItem.id === selectedItem.id &&
              cartItem.variationId === selectedItem.variationId
          )
        );
    });

    prevCartRef.current = [...cart];
  }, [cart]);

  const handleSelectItem = (item) => {
    setSelectedItems((prevSelectedItems) => {
      const isAlreadySelected = prevSelectedItems.some(
        (selected) =>
          selected.id === item.id && selected.variationId === item.variationId
      );

      let newSelectedItems;
      if (isAlreadySelected) {
        newSelectedItems = prevSelectedItems.filter(
          (selected) =>
            !(
              selected.id === item.id &&
              selected.variationId === item.variationId
            )
        );
      } else {
        newSelectedItems = [...prevSelectedItems, item];
      }
      return newSelectedItems;
    });
  };

  const handleSelectAll = () => {
    if (selectedItems.length === cart.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems([...cart]);
    }
  };

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
            key={`${item.id}-${item.variationId}`}
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
