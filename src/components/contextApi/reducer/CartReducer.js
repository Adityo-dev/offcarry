export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, variationId, quantity = 1, stock } = action.payload;

      const existingItem = state.find(
        (item) => item.id === id && item.variationId === variationId
      );

      if (existingItem) {
        const updatedQuantity = existingItem.quantity + quantity;

        // Stock exceed korle update korbe na
        if (updatedQuantity > stock) return state;

        return state.map((item) =>
          item.id === id && item.variationId === variationId
            ? { ...item, quantity: updatedQuantity }
            : item
        );
      } else {
        // Stock check korbo ager thekei
        if (quantity > stock) return state;

        return [...state, { ...action.payload, quantity }];
      }
    }

    case "REMOVE_FROM_CART":
      return state.filter(
        (item) =>
          !(
            item.id === action.payload.productId &&
            item.variationId === action.payload.variationId
          )
      );

    case "UPDATE_QUANTITY": {
      return state.map((item) => {
        if (
          item.id === action.payload.productId &&
          item.variationId === action.payload.variationId
        ) {
          const newQuantity = item.quantity + action.payload.amount;

          // Quantity কমপক্ষে 1 এবং সর্বোচ্চ stock এর সমান হতে হবে
          if (newQuantity >= 1 && newQuantity <= item.stock) {
            return { ...item, quantity: newQuantity };
          }
        }
        return item;
      });
    }

    default:
      return state;
  }
};
