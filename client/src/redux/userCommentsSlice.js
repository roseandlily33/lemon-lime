import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// prettier-ignore
const initialState = {
  userComments: [],
  isLoading: false,
  isRecipeLoading: false,
  error: null,
};

const URL = process.env.REACT_APP_API_URL;

// Gets the user comments
export const fetchUserComments = createAsyncThunk(
  "userComments/comments",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`${URL}/user/comments/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch user comments");
      }
      const data = await res.json();
      return data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

// Add a comment for the user

export const addComment = createAsyncThunk(
  "userComments/addComment",
  async (comment, { rejectWithValue }) => {
    try {
      const response = await fetch(`${URL}/comments/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });
      if (!response.ok) {
        throw new Error("Failed to add comment");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
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
        state.error = null;
      })
      .addCase(fetchUserComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userComments = action.payload;
      })
      .addCase(fetchUserComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addComment.pending, (state) => {
        state.isRecipeLoading = true;
        state.error = null;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.isRecipeLoading = false;
        state.userComments = action.payload;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.isRecipeLoading = false;
        state.error = action.error.message;
      });
  },
});

export default userCommentsSlice.reducer;
