import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  newestRecipes: [],
  popularRecipes: [],
  isLoadingNewest: false,
  isLoadingPopular: false,
  errorNewest: null,
  errorPopular: null,
};
const URL = process.env.REACT_APP_API_URL;

//Gets the popular recipes for the main page
export const fetchPopular = createAsyncThunk(
  "recipes/fetchPopular",
  async () => {
    try {
      const res = await fetch(`${URL}/recipes/popular`);
      if (!res.ok) {
        throw new Error("Failed to fetch popular recipes");
      }
      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error("Failed to fetch popular recipes");
    }
  }
);

//Gets the most recent recipes for the main page
export const fetchRecent = createAsyncThunk("recipes/fetchNewest", async () => {
  try {
    const res = await fetch(`${URL}/recipes`);
    if (!res.ok) {
      throw new Error("Failed to fetch recent recipes");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error("Failed to fetch recent recipes");
  }
});

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //For Popular Recipes
      // Took out action from params
      .addCase(fetchPopular.pending, (state) => {
        state.isLoadingPopular = true;
        state.errorPopular = null;
      })
      .addCase(fetchPopular.fulfilled, (state, action) => {
        state.isLoadingPopular = false;
        state.popularRecipes = action.payload;
      })
      .addCase(fetchPopular.rejected, (state, action) => {
        state.isLoadingPopular = false;
        state.error = action.error.message;
      })
      //For Newest Recipes
      .addCase(fetchRecent.pending, (state) => {
        state.isLoadingNewest = true;
        state.errorNewest = null;
      })
      .addCase(fetchRecent.fulfilled, (state, action) => {
        state.isLoadingNewest = false;
        state.newestRecipes = action.payload;
      })
      .addCase(fetchRecent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default recipeSlice.reducer;
