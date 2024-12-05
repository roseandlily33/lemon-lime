import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipe: [],
  comments: [],
  author: "",
  isLoading: false,
  isRecipeLoading: false,
  error: null,
};

const URL = process.env.REACT_APP_API_URL;

export const fetchRecipeComments = createAsyncThunk(
  "singleRecipe/comments",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`${URL}/comments/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch comments");
      }
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchSingleRecipe = createAsyncThunk(
  "singleRecipe/recipe",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`${URL}/home/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch recipe");
      }
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const singleRecipeSlice = createSlice({
  name: "singleRecipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeComments.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRecipeComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload;
      })
      .addCase(fetchRecipeComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(fetchSingleRecipe.pending, (state, action) => {
        state.isRecipeLoading = true;
        state.error = false;
      })
      .addCase(fetchSingleRecipe.fulfilled, (state, action) => {
        state.isRecipeLoading = false;
        console.log(
          "ACTION PAYLOAD",
          action.payload,
          action.payload.foundRecipe[0]
        );
        state.recipe = action.payload.foundRecipe[0];
        state.author = action.payload.authorOfRecipe;
      })
      .addCase(fetchSingleRecipe.rejected, (state, action) => {
        state.isRecipeLoading = false;
        state.error = action.error.message;
      });
  },
});

export default singleRecipeSlice.reducer;
