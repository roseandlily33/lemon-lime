import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  favoriteRecipes: [],
  isLoading: false,
  alert: "",
  success: false,
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

//Adds a favorite recipe
export const addFavorites = createAsyncThunk(
  "favorites/addFavorite",
  async ({ userId, recipeId }, { rejectWithValue }) => {
    console.log("Hitting fave handler");
    console.log("Adding Fave Handler", userId, recipeId);
    try {
      const response = await fetch(`${URL}/favorites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, recipeId }),
      });
      if (!response.ok) {
        throw new Error("Failed to add fave recipe");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Delete a favorite recipe
export const deleteFavorites = createAsyncThunk(
  "favorites/deleteFavorite",
  async ({ userId, recipeId }, { rejectWithValue }) => {
    console.log("Deleting Fave Handler", userId, recipeId);
    try {
      const response = await fetch(`${URL}/favorites`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, recipeId }),
      });
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
// Go through these later and delete the error
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
    clearState: (state) => {
      state.isLoading = false;
      state.alert = "";
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //For Favorite Recipes
      .addCase(fetchFavorites.pending, (state) => {
        state.isLoading = true;
        state.alert = "";
        state.success = false;
        state.error = null;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.success = true;
        state.isLoading = false;
        state.error = null;
        state.alert = "Favorites fetched";
        state.favorites = action.payload.favorites;
        state.favoriteRecipes = action.payload.favoriteRecipes;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.success = "failed";
        state.isLoading = false;
        state.error = action.error.message;
      })
      // Add Favorite
      .addCase(addFavorites.pending, (state) => {
        state.success = false;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addFavorites.fulfilled, (state) => {
        state.success = true;
        state.isLoading = false;
        state.error = true;
      })
      .addCase(addFavorites.rejected, (state, action) => {
        state.success = true;
        state.isLoading = false;
        state.error = action.error.message;
      })
      // Delete Favorite
      .addCase(deleteFavorites.pending, (state) => {
        state.success = false;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteFavorites.fulfilled, (state) => {
        state.success = true;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(deleteFavorites.rejected, (state) => {
        state.success = true;
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { addFavorite, removeFavorite, clearState } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
