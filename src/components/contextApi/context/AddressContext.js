"use client";
import { createContext, useContext, useReducer, useEffect } from "react";
import { addressReducer } from "../reducer/AddressReducer";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "@/utils/LocalStorageUtils";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addresses, dispatch] = useReducer(addressReducer, [], () => {
    return loadFromLocalStorage("addresses") || [];
  });

  useEffect(() => {
    saveToLocalStorage("addresses", addresses);
  }, [addresses]);

  const addAddress = (newAddress) => {
    dispatch({ type: "ADD_ADDRESS", payload: newAddress });
  };

  const updateAddress = (index, updatedAddress) => {
    dispatch({
      type: "UPDATE_ADDRESS",
      payload: { index, updatedAddress },
    });
  };

  const deleteAddress = (index) => {
    dispatch({ type: "DELETE_ADDRESS", payload: index });
  };

  return (
    <AddressContext.Provider
      value={{ addresses, addAddress, updateAddress, deleteAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
