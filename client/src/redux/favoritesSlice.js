import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  favoriteRecipes: [],
  isLoading: false,
  status: "",
  error: null,
};
const URL = process.env.REACT_APP_API_URL;

//Gets the users favorite recipes
export const fetchFavorites = createAsyncThunk(
  "favorites/fetchFavorites",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${URL}/favorites/${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch favorites");
      }
      const data = await response.json();
      console.log("Fetched Favorites", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      //For Favorite Recipes
      .addCase(fetchFavorites.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.status = "success";
        state.isLoading = false;
        state.favorites = action.payload.favorites;
        state.favoriteRecipes = action.payload.favoriteRecipes;
        console.log("FAVORITES FROM STSTAE", state.favorites);
        console.log("FAVE RECIPES FROM STATE", state.favoriteRecipes);
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.status = "failed";
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
