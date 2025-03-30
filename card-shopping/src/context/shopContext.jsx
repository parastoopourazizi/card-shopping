import { createContext, useState } from "react";

export const shopContext = createContext();

export const shopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === itemId);
      if (itemIndex === -1) {
        // Item is not in cart yet, add it
        return [...prevItems, { id: itemId, count: 1 }];
      } else {
        // Item already exists, increment count
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].count += 1;
        return updatedItems;
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) =>
          item.id === itemId ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0);
      return updatedItems;
    });
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};
