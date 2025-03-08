import React from "react";
import { PRODUCTS } from "../../data/products";
import Product from "./product";

const Shop = () => {
  return (
    <React.Fragment>
      <h1>shop</h1>
      <div className="row">
        {PRODUCTS.map((productData) => {
          return <Product data={productData} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Shop;
