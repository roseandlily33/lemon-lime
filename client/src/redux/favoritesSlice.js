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
  async (userId) => {
    const res = await fetch(`${URL}/user/favorites/${userId}`);
    const data = await res.json();
    console.log("Fetched Favorites", data);
    return data;
  }
);

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //For Favorite Recipes
      // Took out action from params
      .addCase(fetchFavorites.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.status = "success";
        // console.log('Fetchied Faves', action.payload.favorites, action.payload.favoriteRecipes)
        state.favorites = action.payload.favorites;
        state.favoriteRecipes = action.payload.favoriteRecipes;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default favoritesSlice.reducer;
