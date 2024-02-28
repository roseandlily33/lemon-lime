const API_URL = 'http://localhost:8000';

//Gets all of the users recipes
async function httpGetUserRecipes(id){
    const response = await fetch(`${API_URL}/user/${id}`);
    let allRecipes = await response.json();
    return allRecipes[0];
}
//Allows the user to create a recipe
async function httpCreateRecipe(user, recipe){
    try {
        return await fetch(`${API_URL}/user`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user,
          recipe
        }),
      });
    } catch(err) {
      return {
        ok: false,
      };
    }
}
//Allows the user to edit a recipe
async function httpEditUserRecipe(id, info){
  console.log('HTTP EDIT CREATE RECIPE', id, info);
    try {
        return await fetch(`${API_URL}/user/edit/${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });
    } catch(err) {
      return {
        ok: false,
      };
    }
}
//Allows the user to delete a recipe
async function httpDeleteRecipe(id){
  console.log('HTTP DELETE RECIPE', id);
  try{
    return await fetch(`${API_URL}/user/recipe/${id}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch(err){
    return {
      ok: false,
    };
  }
}
//Allows the user to add a favorite recipe
async function httpAddFavoriteRecipe(user, id){
  console.log('Adding a fave recipe for', user, id)
  try{
    return await fetch(`${API_URL}/user/favorites/${id}`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
  } catch(err){
    return {
      ok: false,
    };
  }
}

export  {
    httpAddFavoriteRecipe,
    httpCreateRecipe,
    httpDeleteRecipe,
    httpEditUserRecipe,
    httpGetUserRecipes,
}