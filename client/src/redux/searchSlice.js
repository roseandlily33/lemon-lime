import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  recent: [],
  isLoading: false,
  error: null,
  alert: "",
};

const URL = process.env.REACT_APP_API_URL;

export const fetchSearchedRecipes = createAsyncThunk(
  "search/fetchRecipes",
  async ({ text, category }, { rejectWithValue }) => {
    try {
      const res = await fetch(`${URL}/recipes/search/${text}/${category}`);
      if (!res.ok) {
        throw new Error("Failed to fetch user");
      }
      const data = await res.json();
      console.log("SEARCH DATA RETURNED", data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.alert = action.payload;
    },
    setRecent: (state, action) => {
      state.recent = action.payload;
      if (state.recent.length > 5) {
        state.recent.shift();
      }
    },
    clearSearch: (state) => {
      state.results = [];
      state.isLoading = false;
      state.error = null;
      state.alert = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchedRecipes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSearchedRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.results = action.payload;
        if (action.payload.length === 0) {
          state.alert = "No Recipes Found";
        }
      })
      .addCase(fetchSearchedRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearSearch, setRecent, setAlert } = searchSlice.actions;

export default searchSlice.reducer;
