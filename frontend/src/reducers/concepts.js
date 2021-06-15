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
  // extraReducers: {
  //   [fetchConcepts.fulfilled]: (state, action) => {
  //     return action.payload;
  //   },
  // },
});

export default concepts;

// export const fetchConcepts = createAsyncThunk(
//   "concepts/fetchConcepts",
//   async (pageNumber) => {
//     if (store.concepts) {
//       return store.concepts;
//     }

//     const response = await fetch(
//       `http://localhost:8080/concepts?page=${pageNumber}`
//     );

//     return response;
//   }
// );

// export const fetchConcept = createAsyncThunk(
//   "concepts/fetchConceptDescriptions",
//   async (id) => {
//     if (store.concept.descriptions[id]) {
//       return store.concept.descriptions[id];
//     }

//     const response = await fetch(`http://localhost:8080/concepts/id`);

//     return response;
//   }
// );
