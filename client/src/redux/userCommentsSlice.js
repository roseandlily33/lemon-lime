import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userComments: [],
  isLoading: false,
  isRecipeLoading: false,
  error: null,
};

const URL = process.env.REACT_APP_API_URL;

export const fetchUserComments = createAsyncThunk(
  "userComments/comments",
  async (id) => {
    const res = await fetch(`${URL}/user/comments/${id}`);
    const data = await res.json();
    return data;
  }
);

export const userCommentsSlice = createSlice({
  name: "userComments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userComments = action.payload;
      })
      .addCase(fetchUserComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default userCommentsSlice.reducer;
