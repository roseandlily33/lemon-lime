import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    newestRecipes: [],
    popularRecipes: [],
    isLoading: false,
    status: '',
    error: null
};
const URL = 'http://localhost:8000';

//Gets the popular recipes for the main page
export const fetchPopular = createAsyncThunk(
    'recipes/fetchPopular',
    async () => {
        const res = await fetch(`${URL}/home/popular`);
        const data = await res.json();
        return data;
    }
);

//Gets the most recent recipes for the main page
export const fetchRecent = createAsyncThunk(
    'recipes/fetchNewest', 
    async() => {
        const res = await fetch(`${URL}/home/recipes`);
        const data = await res.json();
        return data;
    }
)

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        //For Popular Recipes
        .addCase(fetchPopular.pending, (state, action) => {
            state.status = 'loading';   
        })
        .addCase(fetchPopular.fulfilled, (state, action) => {
            state.status = 'success';
            state.popularRecipes = action.payload;
        })
        .addCase(fetchPopular.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        //For Newest Recipes
        .addCase(fetchRecent.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(fetchRecent.fulfilled, (state, action) => {
            state.isLoading = false;
            state.newestRecipes = action.payload;
        })
        .addCase(fetchRecent.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

    }
})

//Any reducers go in here:
//export const {} = recipeSlice.actions;

export default recipeSlice.reducer;
