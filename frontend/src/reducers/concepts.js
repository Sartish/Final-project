import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const concepts = createSlice({
  name: "concepts",
  initialState: {
    conceptList: [
      {
        id: "concept1",
        concept: "API",
        descriptions: ["description1", "description2"],
      },
      {
        id: "concept2",
        concept: "Styling",
        descriptions: ["description3", "description4"],
      },
    ],
    descriptions: [
      {
        text: "",
        likes: 5,
        id: "desc1",
        conceptId: "concept1",
      },
    ],
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
