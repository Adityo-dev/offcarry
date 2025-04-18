export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, quantity = 1 } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        return state.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity }];
      }
    }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);

    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.productId
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + action.payload.amount),
            }
          : item
      );

    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};
