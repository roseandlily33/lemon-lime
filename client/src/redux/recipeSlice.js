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
      const res = await fetch(`${URL}/home/popular`);
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
    const res = await fetch(`${URL}/home/recipes`);
    if (!res.ok) {
      throw new Error("Failed to fetch recent recipes");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error("Failed to fetch recent recipes");
  }
});

// Create a recipe
export const submitRecipe = createAsyncThunk(
    'recipes/submitRecipe',
    async (recipeData, { rejectWithValue }) => {
      try {
        const response = await fetch(`${URL}/recipes`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(recipeData),
        });
        if (!response.ok) {
          throw new Error('Failed to submit recipe');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

export const recipeSlice = createSlice({
  name: "recipe",
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

//Any reducers go in here:
export const { addRecipe, updateRecipe, removeRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
