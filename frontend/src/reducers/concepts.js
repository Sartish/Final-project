import { createSlice } from "@reduxjs/toolkit";

const concepts = createSlice({
  name: "concepts",
  initialState: {
    items: [],
  },
  reducers: {
    setDescription: (store, action) => {
      store.items = action.payload;
    },
    setErrors: (store, action) => {
      store.errors = action.payload;
    },
    addDescription: (store, action) => {
      const addItem = action.payload;
      store.items.push(addItem);
    },
  },
});

export default concepts;
