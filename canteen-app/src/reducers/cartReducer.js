export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }
    case "DECREASE_QUANTITY": {
      const existingItem = state.find((item) => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          return state.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          );
        } else {
          return state.filter((item) => item.id !== action.payload);
        }
      }
      return state;
    }
    case "INCREASE_QUANTITY": {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    }
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}
