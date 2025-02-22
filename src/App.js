import React from "react";
import DashBoard from "./screen/Dashboard";
import ProductDetails from "./screen/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./reducer/store";
import { Provider } from "react-redux";
import ShoppingCart from "./screen/Cart/cart";
import FavList from "./screen/WishList/wishList";
import Login from "./screen/Login/login";
import Footer from "./components/Footer";
// import ContextProvider from "./context/contextProvider";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
          <Route path="/ProductDetails" element={<ProductDetails />}></Route>
          <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>
          <Route path="/favList" element={<FavList />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
