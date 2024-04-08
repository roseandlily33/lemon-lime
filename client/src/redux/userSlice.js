import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    userRecipes: [],
    //May take out userComments and userFavorites 
    userComments: [],
    userFavorites: [],
    isLoading: false,
    error: null
};

const URL = 'http://localhost:8000';

export const fetchUserRecipes = createAsyncThunk(
    'user/recipes',
    async(id) => {
        const res = await fetch(`${URL}/user/${id}`);
        const data = await res.json();
        return data[0];
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUserRecipes.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(fetchUserRecipes.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userRecipes = action.payload.recipes;
            state.userComments = action.payload.comments;
            state.favorites = action.payload.favorites;
        })
        .addCase(fetchUserRecipes.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
});

export default userSlice.reducer;