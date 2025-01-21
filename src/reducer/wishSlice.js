import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "Favorite",
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});
export const { addFavorite } = wishSlice.actions;
export default wishSlice.reducer;
