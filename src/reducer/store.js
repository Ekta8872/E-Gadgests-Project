import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favoriteReducer from "./wishSlice";
import LoginReducer from "./loginSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    Favorite: favoriteReducer,
    login: LoginReducer,
  },
});
export default store;
