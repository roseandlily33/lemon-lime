import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// prettier-ignore
const initialState = {
  isLoading: false,
  error: null,
  alert: '',
};

const URL = process.env.REACT_APP_API_URL;

// Add a comment for the user
export const addComment = createAsyncThunk(
  "comments/addComment",
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

// Edit Comment
export const editComment = createAsyncThunk(
  "comments/editComment",
  async ({ id, comment }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${URL}/comments/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });
      if (!response.ok) {
        throw new Error("Failed to edit comment");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Delete Comment
export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${URL}/comments/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Delete comment response", response);
      if (!response.ok) {
        throw new Error("Failed to delete comment");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isLoading = false;
      state.alert = "";
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Add Comment
      .addCase(addComment.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.alert = "";
      })
      .addCase(addComment.fulfilled, (state) => {
        state.isLoading = false;
        state.alert = "Comment has been created";
        state.error = false;
      })
      .addCase(addComment.rejected, (state) => {
        state.isLoading = false;
        state.alert = "Comment has not been created";
        state.error = true;
      })
      //Edit Comment
      .addCase(editComment.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.alert = "";
      })
      .addCase(editComment.fulfilled, (state) => {
        state.isLoading = false;
        state.alert = "Comment has been editied";
        state.error = false;
      })
      .addCase(editComment.rejected, (state) => {
        state.isLoading = false;
        state.alert = "Comment has not been editied";
        state.error = true;
      })
      //Delete Comment
      .addCase(deleteComment.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.alert = "";
      })
      .addCase(deleteComment.fulfilled, (state) => {
        state.isLoading = false;
        state.alert = "Comment has been deleted";
        state.error = false;
      })
      .addCase(deleteComment.rejected, (state) => {
        state.isLoading = false;
        state.alert = "Comment has not been deleted";
        state.error = true;
      });
  },
});

export const { clearState } = commentsSlice.actions;

export default commentsSlice.reducer;
