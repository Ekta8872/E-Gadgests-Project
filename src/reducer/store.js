import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favoriteReducer from "./wishSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    Favorite: favoriteReducer,
  },
});
export default store;
