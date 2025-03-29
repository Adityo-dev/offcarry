"use client";
import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducer/CartReducer";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "@/utils/LocalStorageUtils";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    return loadFromLocalStorage("cart") || [];
  });

  useEffect(() => {
    saveToLocalStorage("cart", cart);
  }, [cart]);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const updateQuantity = (productId, amount) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, amount } });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
