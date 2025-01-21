import React, { useState } from "react";
import IMAGES from "../theme/Images";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const handleNavigation = (name) => {
    setActive(name);
    const paths = {
      Home: "/",
      Products: "/productDetails",
      Cart: "/ShoppingCart",
      WishList: "/FavList",
      Login: "/login",
    };

    navigate(paths[name]);
    console.log("first", name);
  };
  return (
    <div style={Styles.navBarDiv}>
      <div style={Styles.logoImgDiv}>
        <img style={Styles.logoImg} src={IMAGES.logoImg} />
        <p style={Styles.navParaLogo}>E-Gadgets</p>
      </div>
      {/* <div style={Styles.navBarDivPara}>
        <p
          // to="/"
          onClick={() => handleNavigation("Home")}
          //  style={Styles.navPara}
          style={{
            ...Styles.navPara,
            color: active === "Home" ? "blue" : "white",
          }}
        >
          Home
        </p>

        <p
          onClick={() => handleNavigation("Products")}
          // style={Styles.navPara}
          style={{
            ...Styles.navPara,
            color: active === "Products" ? "yellow" : "white",
          }}
        >
          Products
        </p>
        <p
          onClick={() => handleNavigation("Cart")}
          //  style={Styles.navPara}
          style={{
            ...Styles.navPara,
            color: active === "Cart" ? "blue" : "white",
          }}
        >
          Cart
        </p>
        <p
          onClick={() => handleNavigation("wishList")}
          // style={Styles.navPara}
          style={{
            ...Styles.navPara,
            color: active === "wishList" ? "blue" : "white",
          }}
        >
          {" "}
          WishList{" "}
        </p>
        <p
          onClick={() => handleNavigation("Login")}
          //  style={Styles.navPara}
          style={{
            ...Styles.navPara,
            color: active === "Login" ? "blue" : "white",
          }}
        >
          Login
        </p>
      </div> */}
      <div style={Styles.navBarDivPara}>
        {["Home", "Products", "Cart", "WishList", "Login"].map((name) => (
          <p
            key={name}
            onClick={() => handleNavigation(name)}
            style={{
              ...Styles.navPara,
              color: active === name ? "blue" : "white",
            }}
          >
            {name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
const Styles = {
  navBarDiv: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "space-between",
    position: " Sticky",
    zIndex: 11111,
    top: "0",
    left: "0",
  },
  navBarDivPara: {
    // gap: "5vmin",
    justifyContent: "flex-end",
    width: "100vw",
    height: "10vh",
    display: "flex",
    alignItems: "center",
  },
  logoImg: {
    width: "5vw",
  },
  navPara: {
    // color: "white",
    display: "flex",
    gap: "9vmin",
    cursor: "pointer",
    paddingRight: "5vmin",
    textDecoration: "none",
    // justifyContent: "center",
  },
  // navPara: active::{},
  navParaLogo: {
    color: "white",
    justifyContent: "flex-start",
    paddingLeft: "5vmin",
    alignItems: "center",
    width: "10vw",
    fontSize: "20px",
  },
  logoImgDiv: {
    display: "flex",
  },
};
