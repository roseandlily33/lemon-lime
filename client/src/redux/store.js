import {configureStore} from '@reduxjs/toolkit';
import recipeSlice from './recipeSlice';
import userSlice from './userSlice';
import userCommentsSlice from './userCommentsSlice';

export const store = configureStore({
    reducer: {
        recipes: recipeSlice,
        userComments: userCommentsSlice,
        user: userSlice
    }
});