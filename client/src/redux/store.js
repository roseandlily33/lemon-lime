import {configureStore} from '@reduxjs/toolkit';
import recipeSlice from './recipeSlice';

export const store = configureStore({
    reducer: {
        recipes: recipeSlice
    }
})