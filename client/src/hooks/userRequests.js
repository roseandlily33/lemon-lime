if (!process.env.REACT_APP_API_URL) {
  throw new Error(
    "REACT_APP_API_URL is not defined in the environment variables"
  );
}
const API_URL = process.env.REACT_APP_API_URL;

//GET: Gets all of the users recipes
// async function httpGetUserRecipes(id) {
//   try {
//     const response = await fetch(`${API_URL}/user/${id}`);
//     const allRecipes = await response.json();
//     return allRecipes[0];
//   } catch (err) {
//     return err;
//   }
// }

//GET: Gets all the favorited recipes for a user
// async function httpGetUsersFavoriteRecipes(userId) {
//   try {
//     const response = await fetch(`${API_URL}/user/favorites/${userId}`);
//     const allFavorites = await response.json();
//     return allFavorites;
//   } catch (err) {
//     return err;
//   }
// }

//POST: Allows the user to create a recipe
async function httpCreateRecipe(user, recipe) {
  try {
    return await fetch(`${API_URL}/user`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
        recipe,
      }),
    });
  } catch (err) {
    return err;
  }
}

//PUT: Allows the user to edit a recipe
async function httpEditUserRecipe(id, info) {
  try {
    return await fetch(`${API_URL}/user/edit/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
  } catch (err) {
    return err;
  }
}

//PUT: Allows the user to add a favorite recipe
async function httpAddFavoriteRecipe(userId, recipeId) {
  try {
    return await fetch(`${API_URL}/user/favorites`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        recipeId,
      }),
    });
  } catch (err) {
    return err;
  }
}

//DELETE: Allows the user to delete a recipe
async function httpDeleteRecipe(id) {
  try {
    return await fetch(`${API_URL}/user/recipe/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return err;
  }
}

// DELETE: Delete a favorited recipe for a user
async function httpDeleteFavoriteRecipe(userId, recipeId) {
  try {
    return await fetch(`${API_URL}/user/favorites`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, recipeId }),
    });
  } catch (err) {
    return err;
  }
}

export {
  httpAddFavoriteRecipe,
  httpCreateRecipe,
  httpDeleteRecipe,
  httpEditUserRecipe,
  // httpGetUserRecipes,
  //httpGetUserComments,
  //httpGetUsersFavoriteRecipes,
  httpDeleteFavoriteRecipe,
  // httpGetFavoritesForMainPage
};
