import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./fetchingSlice";
import bagItems from "./bagItems";

const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetching: fetchStatusSlice.reducer,
    bagItems: bagItems.reducer,
  },
});

export default store;
