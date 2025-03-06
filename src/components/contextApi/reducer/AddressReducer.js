"use client";
export const addressReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return [...state, action.payload];
    case "UPDATE_ADDRESS":
      return state.map((address, index) =>
        index === action.payload.index ? action.payload.updatedAddress : address
      );
    case "DELETE_ADDRESS":
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};
