import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  success: false,
  error: null,
  alert: "",
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

export const deleteRecipe = createAsyncThunk(
  "crudRecipes/deleteRecipe",
  async (id, { rejectWithValue }) => {
    console.log("Recipe id", id);
    try {
      const response = await fetch(`${URL}/user/recipe/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
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
      state.alert = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Creating the recipe
      .addCase(createRecipe.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.alert = "";
        state.error = null;
      })
      .addCase(createRecipe.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
        state.alert = "Recipe has been created";
        state.error = null;
      })
      .addCase(createRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.alert = "There was an error creating the recipe";
        state.success = false;
        state.error = action.error.message;
      })
      // Editing the recipe
      .addCase(editRecipe.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(editRecipe.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
        state.alert = "Recipe has been edited";
        state.error = null;
      })
      .addCase(editRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.alert = "There was an error editing the recipe";
        state.error = action.error.message;
      })
      // Deleting the recipe
      .addCase(deleteRecipe.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(deleteRecipe.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
        state.alert = "Recipe has been deleted";
        state.error = null;
      })
      .addCase(deleteRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.alert = "There was an error deleting the recipe";
        state.error = action.error.message;
      });
  },
});

export const { clearState } = crudRecipeSlice.actions;

export default crudRecipeSlice.reducer;
