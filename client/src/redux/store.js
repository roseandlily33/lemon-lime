import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import recipeSlice from './recipeSlice';
import userSlice from './userSlice';
import userCommentsSlice from './userCommentsSlice';

export const store = configureStore({
    reducer: {
        recipes: recipeSlice,
        userComments: userCommentsSlice,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});