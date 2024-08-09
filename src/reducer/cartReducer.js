export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, ...payload };
    case "REMOVE_FROM_CART":
      return { ...state, ...payload };
    default:
      throw new Error("No Case Found in cartReducer");
  }
}