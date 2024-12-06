const API_URL = process.env.REACT_APP_API_URL;

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
  httpDeleteRecipe,
  httpEditUserRecipe,
  httpDeleteFavoriteRecipe,
};
