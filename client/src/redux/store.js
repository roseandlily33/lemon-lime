import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import recipeSlice from './recipeSlice';
import userSlice from './userSlice';
import userCommentsSlice from './userCommentsSlice';
//import singleRecipeSlice from '../components/SingleRecipe/singleRecipe.component';
import favoritesSlice from './favoritesSlice';
export const store = configureStore({
    reducer: {
        recipes: recipeSlice,
        userComments: userCommentsSlice,
        user: userSlice,
        favorites: favoritesSlice
        //singleRecipe: singleRecipeSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});