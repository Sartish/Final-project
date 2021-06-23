import { createSlice } from "@reduxjs/toolkit";

const concepts = createSlice({
  name: "concepts",
  initialState: {
    pageNumber: "",
    searchField: "",
  },
  reducers: {
    setSearchField: (store, action) => {
      store.searchField = action.payload;
    },
    setPageNumber: (store, action) => {
      store.pageNumber = action.payload;
    },
  },
});

export default concepts;
