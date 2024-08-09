import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
  cartList: [],
  total: 0,
}

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    const updatedCartList = [...state.cartList, product];
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        total: state.total + product.price,
        cartList: updatedCartList
      }
    });
  }

  const removeFromCart = (product) => {
    const updatedCartList = state.cartList.filter(cart => cart.id !== product.id);
    console.log(updatedCartList);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        total: state.total - product.price,
        cartList: updatedCartList
      }
    });
  }

  // const updateTotal = useMemo(() => state.cartList.reduce((total, value) => total += value.price, 0), [state.cartList]);

  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);