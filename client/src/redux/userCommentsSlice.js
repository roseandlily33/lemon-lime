import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    userComments: [],
    isLoading: false,
    error: null
};

const URL = 'http://localhost:8000';

export const fetchUserComments = createAsyncThunk(
    'userComments/comments',
    async (id) => {
        const res = await fetch(`${URL}/user/comments/${id}`);
        const data = await res.json();
        console.log('COMMENTS', data);
        return data;
    }
);

export const userCommentsSlice = createSlice({
    name: 'userComments',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUserComments.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(fetchUserComments.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.userComments = action.payload;
        })
        .addCase(fetchUserComments.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
});

export default userCommentsSlice.reducer;