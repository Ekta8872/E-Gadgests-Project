import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import NavBar from "../../components/NavBar";
import { removeItem } from "../../reducer/cartSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <NavBar />
      {cart.length > 0 ? (
        <div className="storeProductsDiv">
          {cart.map((item) => (
            <div className="storeimgTextDiv" key={item.id}>
              <img className="storeImg" src={item.image} alt={item.name} />
              <p className="storeHeading">{item.name}</p>
              <p>
                {item.price}
                <s className="strikePrice">{item.actualPrice}</s>
              </p>
              <button
                className="cartBtn"
                onClick={() => dispatch(removeItem(item))}
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="emptyCartText">No items are in the cart</p>
      )}
    </div>
  );
};

export default ShoppingCart;
