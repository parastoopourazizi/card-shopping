import { createContext, useState } from "react";

export const shopContext = createContext(null);

export const shopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    setCartItems([...cartItems, { id: itemId, count: 1 }]);
  };
  const removeFromCart = (itemId) => {
    setCartItems(
      cartItems.map((i) => {
        if (i.id === itemId) return { ...i, count: i.count - 1 };
      })
    );
  };
  const contextValue = { cartItems, addToCart, removeFromCart };
  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};
