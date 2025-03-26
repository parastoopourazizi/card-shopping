import { createContext, useState } from "react";

export const shopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === itemId);
      return itemExists
        ? prevItems.map((item) =>
            item.id === itemId ? { ...item, count: item.count + 1 } : item
          )
        : [...prevItems, { id: itemId, count: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};