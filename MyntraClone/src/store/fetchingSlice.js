import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetching",
  initialState: { currentlyFetching: false },
  reducers: {
    markFetchingStarted: (state, action) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state, action) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchingActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
