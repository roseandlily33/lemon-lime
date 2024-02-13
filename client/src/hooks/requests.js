const API_URL = 'http://localhost:8000';

//Recipes endpoints
//This works
async function httpGetAllRecipes(){
    const response = await fetch(`${API_URL}/recipes`);
    let allRecipes = await response.json();
    return allRecipes;
}

async function httpGetPopularRecipes(){
    const response = await fetch(`${API_URL}/recipes/popular`);
    let allRecipes = await response.json();
    return allRecipes;
}

async function httpGetFullRecipeWithDetails(id){
    const response = await fetch(`${API_URL}/recipes/${id}`);
    let allRecipes = await response.json();
    return allRecipes;
}

//User endpoints
async function httpGetUserRecipes(id){
    const response = await fetch(`${API_URL}/user/${id}`);
    let allRecipes = await response.json();
    return allRecipes;
}

async function httpDeleteUserRecipe(id){
    try {
        return await fetch(`${API_URL}/user/${id}`, {
          method: "delete",
        });
      } catch(err) {
        console.log(err);
        return {
          ok: false,
        };
      }
}
//This works
async function httpCreateRecipe(recipe){
    console.log('HTTP CREATE RECIPE', recipe);
    try {
        return await fetch(`${API_URL}/user`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      });
    } catch(err) {
      return {
        ok: false,
      };
    }
}

async function httpCreateNewUser(info){
    try {
        return await fetch(`${API_URL}/user/create`, {
        method: "post",
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

async function httpLoginUser(info){
   try{
    const response = await fetch(`${API_URL}/user/login`, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(info)
    });
    let userJSON = await response.json();
    return userJSON;
   } catch(err){
     console.log(err)
   }
}

export {
    httpGetAllRecipes,
    httpGetPopularRecipes,
    httpGetFullRecipeWithDetails,
    httpGetUserRecipes,
    httpDeleteUserRecipe,
    httpCreateRecipe,
    httpCreateNewUser,
    httpLoginUser
}