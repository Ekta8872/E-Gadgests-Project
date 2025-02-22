import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import IMAGES from "../../theme/Images";
import "./styles.css";
import Checkbox from "@mui/material/Checkbox";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import Footer from "../../components/Footer";
import { productCheckOutData } from "../../mockData/Home";
import { useDispatch } from "react-redux";
import { addItem } from "../../reducer/cartSlice";
import { addFavorite } from "../../reducer/wishSlice";
const ProductDetails = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <NavBar />

      <div className="containerP">
        <div className="imgContainer">
          <div className="imgParaContainer">
            <div className="imgTextDiv">
              <h3>Get and Extra 50% off</h3>
              <p>SHOP NOW</p>
            </div>
            <img className="imgProduct" src={IMAGES.laptopPImg} />
          </div>
          <div className="imgParaContainer">
            <div className="imgTextDiv">
              <h3>Get and Extra 50% off</h3>
              <p>SHOP NOW</p>
            </div>
            <img className="imgProduct" src={IMAGES.phone} />
          </div>
          <div className="imgParaContainer">
            <div className="imgTextDiv">
              <h3>40% discount on speakers</h3>
              <p>SHOP NOW</p>
            </div>
            <img className="imgProduct" src={IMAGES.headphoneProduct} />
          </div>
        </div>

        <div className="shippingDiv">
          <div className="shippingIconDiv">
            <img className="shippingImg" src={IMAGES.shipping} />
            <div className="shippingTextDiv">
              <h4 className="shippingTextHeading">Worldwide Shipping</h4>
              <p className="shippingTextPara">Order Above $100</p>
            </div>
          </div>
          <div className="shippingIconDiv">
            <img className="shippingImg" src={IMAGES.recycle} />
            <div className="shippingTextDiv">
              <h4 className="shippingTextHeading">Easy 30 Day Returns</h4>
              <p className="shippingTextPara">Back Returns in 7 Days</p>
            </div>
          </div>
          <div className="shippingIconDiv">
            <img className="shippingImg" src={IMAGES.moneyBack} />
            <div className="shippingTextDiv">
              <h4 className="shippingTextHeading">Money Back Guarantee</h4>
              <p className="shippingTextPara">Guarantee With In 30-Days</p>
            </div>
          </div>
          <div className="shippingIconDiv">
            <img className="shippingImg" src={IMAGES.headphonesShip} />
            <div className="shippingTextDiv">
              <h4 className="shippingTextHeading">Easy Online Support</h4>
              <p className="shippingTextPara">24/7 Any Time Support</p>
            </div>
          </div>
        </div>

        {/* checkout products */}
        <h1 className="storeHeading">CheckOut Gadgets Store</h1>
        <div className="storeProductsDiv">
          {productCheckOutData.map?.((item) => {
            return (
              <div className="storeimgTextDiv">
                <div
                  onClick={() => dispatch(addFavorite(item))}
                  className="favImgDiv"
                >
                  <Checkbox
                    className="favoriteImg"
                    icon={<FavoriteBorder />}
                    // color="warning"
                    checkedIcon={<Favorite sx={{ color: "red" }} />}
                  />
                </div>
                <img className="storeImg" src={item.image} />
                <p className="storeHeading">{item.name}</p>
                <p>
                  {item.price}
                  <s className="strikePrice">{item.actualPrice}</s>
                </p>
                <button
                  className="cartBtn"
                  onClick={() => dispatch(addItem(item))}
                >
                  {item.btn}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ProductDetails;
