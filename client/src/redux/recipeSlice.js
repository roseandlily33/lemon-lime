import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    newestRecipes: [],
    popularRecipes: [],
    isLoading: false,
    error: null
};
const URL = 'http://localhost:8000';

export const fetchPopular = createAsyncThunk(
    'recipes/fetchPopular',
    async () => {
        const res = await fetch(`${URL}/home/popular`);
        const data = await res.json();
        console.log('REDUX RES', data)
        return data;
    }
);

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPopular.pending, (state, action) => {
            state.status = 'loading';
            
        })
        .addCase(fetchPopular.fulfilled, (state, action) => {
            state.status = 'success';
            state.popularRecipes = action.payload;
            console.log('INSIDE REDUCERS', state.popularRecipes)
        })
        .addCase(fetchPopular.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

//Any reducers go in here:
//export const {} = recipeSlice.actions;

export default recipeSlice.reducer;
