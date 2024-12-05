import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipe: [],
  comments: [],
  author: "",
  isLoading: false,
  error: null,
};

const URL = process.env.REACT_APP_API_URL;

export const fetchSingleRecipe = createAsyncThunk(
  "singleRecipe/fetchRecipe",
  async (id, { rejectWithValue }) => {
    console.log("FETCHING THE RECIPE FOR SINGLE RECIPE");
    console.log("FOR THE ID", id);
    try {
      const res = await fetch(`${URL}/recipes/${id}`);
      console.log("Res from getting a single recipe", res);
      if (!res.ok) {
        throw new Error("Failed to fetch recipe");
      }
      const data = await res.json();
      console.log("Single recipe data", data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const singleRecipeSlice = createSlice({
  name: "singleRecipe",
  initialState,
  reducers: {
    clearRecipe: (state) => {
      state.recipe = null;
      state.comments = [];
      state.author = "";
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleRecipe.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSingleRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("ACTION PAYLOAD FROM SINGLE RECIPE", action.payload);
        // state.recipe = action.payload.foundRecipe[0];
        // state.author = action.payload.authorOfRecipe;
      })
      .addCase(fetchSingleRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearRecipe } = singleRecipeSlice.actions;

export default singleRecipeSlice.reducer;
