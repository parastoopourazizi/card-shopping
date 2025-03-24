import { useContext } from "react";
import { shopContext } from "../../context/shopContext";

const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(shopContext);
  return (
    <div className="col-3">
      <img src={productImage} className="w-100" />
      <h5>{productName}</h5>
      <p>price : {price}$ </p>
      <button className="btn btn-info btn-sm" onClick={() => addToCart(id)}>
        +
      </button>
      <span className="mx-1">
        {cartItems.find((item) => item.id === id)?.count || 0}
      </span>

      <button
        className="btn btn-info btn-sm"
        onClick={() => removeFromCart(id)}
      >
        -
      </button>
    </div>
  );
};
export default Product;
