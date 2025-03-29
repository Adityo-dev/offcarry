export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.productId
          ? {
              ...item,
              quantity: Math.max(
                1,
                (item.quantity || 1) + action.payload.amount
              ),
            }
          : item
      );
    default:
      return state;
  }
};
