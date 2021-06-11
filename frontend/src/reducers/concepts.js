import { createSlice } from "@reduxjs/toolkit";

const concepts = createSlice({
  name: "concepts",
  initialState: {
    conceptItem: [],
    descriptionItem: [],
  },
  reducers: {
    setErrors: (store, action) => {
      store.errors = action.payload;
    },
    setConcept: (store, action) => {
      const addItem = action.payload;
      store.conceptItem.push(addItem);
    },
    addDescription: (store, action) => {
      const addItem = action.payload;
      store.descriptionItem.push(addItem);
    },
  },
});

export default concepts;
