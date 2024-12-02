import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
    favoriteRecipes: [],
    isLoading: false,
    status: '',
    error: null
};
const URL = process.env.REACT_APP_API_URL;

//Gets the users favorite recipes
export const fetchFavorites = createAsyncThunk(
    'favorites/fetchFavorites',
    async (userId, {rejectWithValue}) => {
        try {
            const response = await fetch(`${URL}/user/favorites/${userId}`);
            if (!response.ok) {
              throw new Error('Failed to fetch favorites');
            }
            const data = await response.json();
            console.log('Fetched Favorites', data);
            return data;
          } catch (error) {
            return rejectWithValue(error.message);
          }
    }
);

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
          },
          removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(
              (favorite) => favorite.id !== action.payload.id
            );
          }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchFavorites.pending, (state, action) => {
            state.isLoading = true;
            state.status = 'loading';
            state.error = null;  
        })
        .addCase(fetchFavorites.fulfilled, (state, action) => {
            state.isLoading = false;
            state.status = 'succeeded';
            state.favorites = action.payload;
        })
        .addCase(fetchFavorites.rejected, (state, action) => {
            state.isLoading = false;
            state.status = 'failed';
            state.error = action.payload;
        })
    }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;