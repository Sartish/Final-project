import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
    name: 'user',
    initialState: {
        username: null,
        accessToken: null,
        errors: null
    },
    // actions 
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload;
        },
        setAccessToken: (store, action) => {
            store.accessToken = action.payload;
        },
        setErrors: (store, action) => {
            store.errors = action.payload;
        },
        logout: (state, action) => {
            console.log("Logging out")
            state.accessToken = null;
            state.user = {}
        },
    }

});

export default user;

