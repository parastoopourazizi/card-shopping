import React, { useContext } from "react";
import { PRODUCTS } from "../../data/products";
import Product from "../shop/product";
import { ShopContext } from "../../context/shopContext";
const card = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <React.Fragment>
      <h1>Your cart items</h1>
      <div className="row">
        {PRODUCTS.map((P) => {
          return <cartItems data={P}></cartItems>;
        })}
      </div>
    </React.Fragment>
  );
};
export default card;
