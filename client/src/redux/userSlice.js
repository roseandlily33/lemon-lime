import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userRecipes: [],
  //May take out userComments and userFavorites
  userComments: [],
  userFavorites: [],
  isLoading: false,
  error: null,
};

const URL = process.env.REACT_APP_API_URL;

export const fetchUserRecipes = createAsyncThunk(
  "user/recipes",
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

// Create a recipe
export const submitRecipe = createAsyncThunk(
  "recipes/submitRecipe",
  async (recipeData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${URL}/recipes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeData),
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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    logOut: (state) => {
      state.user = null;
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
        state.userRecipes = action.payload.recipes;
        state.userComments = action.payload.comments;
        state.userFavorites = action.payload.favorites;
      })
      .addCase(fetchUserRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const { setUser, updateUser, logOut } = userSlice.actions;

export default userSlice.reducer;
