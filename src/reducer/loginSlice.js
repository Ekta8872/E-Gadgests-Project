import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    name: "",
  },
  reducers: {
    addLogin: (state, action) => {
      state.name = action.payload.name;
    },
  },
});

export const { addLogin } = loginSlice.actions;
export default loginSlice.reducer;
