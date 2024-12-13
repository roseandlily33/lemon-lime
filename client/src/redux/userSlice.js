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
      console.log("ACTION PAYLOAD", action.payload);
      console.log("ADDING STATE", state.userFavorites);
      state.userFavorites.push(action.payload);
      console.log("AFTER ADDING STATE", state.userFavorites);
    },
    removeFavorite: (state, action) => {
      state.userFavorites = state.userFavorites.filter((fave) => {
        return fave !== action.payload;
      });
    },
    updateComment: (state, action) => {
      console.log("Incoming", action.payload);
      state.userComments = state.userComments.map((comment) => {
        if (comment._id === action.payload._id) {
          return action.payload;
        }
        return comment;
      });
      console.log("State comments after updated", state.userComments);
    },
    deleteCommentFromUser: (state, action) => {
      state.userComments = state.userComments.filter((comment) => {
        return comment._id !== action.payload;
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
        state.userFavorites = Object.keys(action.payload.favorites);
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

export const selectFilteredRecipes = (state, filter) => {
  return state.user.userRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(filter.toLowerCase())
  );
};

export const {
  setUser,
  updateUser,
  logOut,
  addFavorite,
  removeFavorite,
  updateComment,
  deleteCommentFromUser,
} = userSlice.actions;

export default userSlice.reducer;
