import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  visitorRecipes: [],
  visitorFavorites: [],
  isLoading: false,
  error: null,
};

const URL = process.env.REACT_APP_API_URL;

export const fetchUserRecipes = createAsyncThunk(
  "visitor/recipes",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`${URL}/user/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch user");
      }
      const data = await res.json();
      return data[0];
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchUsersFavoriteRecipes = createAsyncThunk(
  "visitor/favorites",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`${URL}/favorites/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch user");
      }
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const visitorSlice = createSlice({
  name: "visitor",
  initialState,
  reducers: {
    clearState: (state) => {
      state.visitorFavorites = [];
      state.visitorRecipes = [];
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserRecipes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.visitorRecipes = action.payload.recipes;
      })
      .addCase(fetchUserRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUsersFavoriteRecipes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsersFavoriteRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.visitorFavorites = action.payload.favoriteRecipes;
      })
      .addCase(fetchUsersFavoriteRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearState } = visitorSlice.actions;

export default visitorSlice.reducer;
