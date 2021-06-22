import { createSlice } from "@reduxjs/toolkit";

// Reducer for loading state
export const ui = createSlice({
  name: "ui",
  initialState: {
    isLoading: true,
  },
  reducers: {
    setLoading: (store, action) => {
      store.isLoading = action.payload;
      console.log(store.ui)
    },
  },
});
