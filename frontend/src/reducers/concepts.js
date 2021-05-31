import { createSlice } from "@reduxjs/toolkit";

const concepts = createSlice({
  name: "concepts",
  initialState: {
    items: [],
    errors: null,
  },
  reducers: {
    setDescription: (store, action) => {
      store.items = action.payload;
    },
    setErrors: (store, action) => {
      store.errors = action.payload;
    },
  },
});

export default concepts;
