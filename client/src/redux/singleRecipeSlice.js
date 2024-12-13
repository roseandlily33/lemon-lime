import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { averageOfStars } from "../formatting-utils/average-of-stars";
const initialState = {
  recipe: [],
  comments: [],
  averageOfStars: 0,
  author: "",
  isLoading: false,
  error: null,
};

const URL = process.env.REACT_APP_API_URL;

export const fetchSingleRecipe = createAsyncThunk(
  "singleRecipe/fetchRecipe",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`${URL}/recipes/${id}`);
      const data = await res.json();
      return data[0];
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
    addCommentRecipe: (state, action) => {
      state.comments.push(action.payload);
    },
    incrementFave: (state) => {
      state.recipe.favorites += 1;
    },
    decrementFave: (state) => {
      if (state.recipe.favorites > 0) {
        state.recipe.favorites -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleRecipe.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSingleRecipe.fulfilled, (state, action) => {
        state.recipe = action.payload;
        state.comments = action.payload?.comments;
        state.author = action.payload?.authorName;
        state.averageOfStars = averageOfStars(action.payload?.comments);
        state.isLoading = false;
      })
      .addCase(fetchSingleRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearRecipe, addCommentRecipe, incrementFave, decrementFave } =
  singleRecipeSlice.actions;

export default singleRecipeSlice.reducer;
