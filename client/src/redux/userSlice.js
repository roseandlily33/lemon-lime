import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  userRecipes: [],
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
    addFavorite: (state, action) => {
      state.userFavorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.userFavorites = state.userFavorites.filter((fave) => {
        return fave !== action.payload;
      });
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

export const selectCommentById = (state, commentId) =>
  state.user.userComments.find((comment) => comment._id === commentId);

export const selectRecipeById = (state, recipeId) =>
  state.user.userRecipes.find((recipe) => recipe._id === recipeId);

export const { setUser, updateUser, logOut, addFavorite, removeFavorite } =
  userSlice.actions;

export default userSlice.reducer;
