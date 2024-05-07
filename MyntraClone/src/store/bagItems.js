import { createSlice } from "@reduxjs/toolkit";

const bagItems = createSlice({
  name: "bagItems",
  initialState: [],
  reducers: {
    addItems: (state, action) => {
      state.push(action.payload);
    },
    removeItems: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
  },
});

export const bagItemsActions = bagItems.actions;
export default bagItems;
