import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItems: (state, action) => {
      return action.payload;
    },
  },
});

export const itemActions = itemSlice.actions;
export default itemSlice;
