import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import recipeSlice from "./recipeSlice";
import userSlice from "./userSlice";
import userCommentsSlice from "./userCommentsSlice";
import visitorSlice from "./visitorSlice";
import favoritesSlice from "./favoritesSlice";
import singleRecipeSlice from "./singleRecipeSlice";
import searchSlice from "./searchSlice";
import { crudRecipeSlice } from "./crudRecipeSlice";

export const store = configureStore({
  reducer: {
    recipes: recipeSlice,
    userComments: userCommentsSlice,
    user: userSlice,
    favorites: favoritesSlice,
    visitor: visitorSlice,
    singleRecipe: singleRecipeSlice,
    search: searchSlice,
    crudRecipes: crudRecipeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
