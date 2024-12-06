import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  recent: [],
  isLoading: false,
  error: null,
  alert: "",
};

const URL = process.env.REACT_APP_API_URL;
// prettier-ignore
export const fetchSearchedRecipes = createAsyncThunk(
  "search/fetchSearchRecipes",
  async ({ text, category }, { rejectWithValue }) => {
    try {
      const res = await fetch(`${URL}/recipes/search/${text}/${category}`);
      const data = await res.json();
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
      if (!state.recent.includes(action.payload)) {
        state.recent.push(action.payload);
        if (state.recent.length > 5) {
          state.recent.shift();
        }
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
        state.alert = "";
      })
      .addCase(fetchSearchedRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.results = action.payload;
        state.alert = "";
      })
      .addCase(fetchSearchedRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.alert = "Could not get the recipes";
        state.error = action.error.message;
      });
  },
});

export const { clearSearch, setRecent, setAlert } = searchSlice.actions;

export default searchSlice.reducer;
