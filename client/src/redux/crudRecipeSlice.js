import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  success: false,
  error: null,
};

const URL = process.env.REACT_APP_API_URL;

export const createRecipe = createAsyncThunk(
  "crudRecipes/createRecipe",
  async ({ user, recipe }, { rejectWithValue }) => {
    console.log("SENDING", user, recipe);
    try {
      const response = await fetch(`${URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, recipe }),
      });
      if (!response.ok) {
        throw new Error("Failed to submit recipe");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editRecipe = createAsyncThunk(
  "crudRecipes/editRecipe",
  async ({ user, recipe, id }, { rejectWithValue }) => {
    console.log("Recipe id", recipe._id);
    try {
      const response = await fetch(`${URL}/user/edit/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, recipe }),
      });
      if (!response.ok) {
        throw new Error("Failed to submit recipe");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const crudRecipeSlice = createSlice({
  name: "crudRecipes",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isLoading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRecipe.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(createRecipe.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(createRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.error = action.error.message;
      })
      .addCase(editRecipe.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(editRecipe.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(editRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.error = action.error.message;
      });
  },
});

export const { clearState } = crudRecipeSlice.actions;

export default crudRecipeSlice.reducer;
