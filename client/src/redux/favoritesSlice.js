import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
    isLoading: false,
    status: '',
    error: null
};
const URL = 'http://localhost:8000';

//Gets the users favorite recipes
export const fetchFavorites = createAsyncThunk(
    'favorites/fetchFavorites',
    async (userId) => {
        const res = await fetch(`${URL}/user/main/favorites/${userId}`);
        const data = await res.json();
        console.log('Fetched Favorites', data);
        return data;
    }
);

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        //For Popular Recipes
        .addCase(fetchFavorites.pending, (state, action) => {
            state.status = 'loading';   
        })
        .addCase(fetchFavorites.fulfilled, (state, action) => {
            state.status = 'success';
            //console.log('Fetchied Faves', action.payload.favorites)
            state.favorites = action.payload;
        })
        .addCase(fetchFavorites.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export default favoritesSlice.reducer;