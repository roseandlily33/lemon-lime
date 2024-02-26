const API_URL = 'http://localhost:8000';

//Gets all the recipes for the main page
async function httpGetAllRecipes(){
    const response = await fetch(`${API_URL}/home/recipes`);
    let allRecipes = await response.json();
    return allRecipes;
}
//Gets all the popular recipes for the main page
async function httpGetPopularRecipes(){
    const response = await fetch(`${API_URL}/home/popular`);
    let allRecipes = await response.json();
    return allRecipes;
}
//Gets the full recipe with details for a view page
async function httpGetFullRecipeWithDetails(id){
    const response = await fetch(`${API_URL}/home/${id}`);
    let oneRecipe = await response.json();
    return oneRecipe;
}
//Gets the full recipe details for the edit a recipe page
async function httpGetFullRecipeWithDetailsEditPage(id){
  const response = await fetch(`${API_URL}/user/edit/${id}`);
  let oneRecipe = await response.json();
  return oneRecipe[0];
}
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
//Allows a user to comment on a recipe
async function httpAddComment(user, comment){
  try{
    return await fetch(`${API_URL}/comments`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment)
    })
  } catch(err){
    return {
      ok: false,
    };
  }
}


//Some functionailty for maybe a login page
// async function httpCreateNewUser(info){
//     try {
//         let res = await fetch(`${API_URL}/user/create`, {
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(info),
//       });
//       console.log('CRAETING NEW USER', res);
//       return res;
//     } catch(err) {
//       return {
//         ok: false,
//       };
//     }
// }

// async function httpLoginUser(info){
//    try{
//     const response = await fetch(`${API_URL}/user/login`, {
//         method: "post",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(info)
//     });
//     let userJSON = await response.json();
//     console.log('HTTP RETURNED USER', userJSON)
//     return userJSON;
//    } catch(err){
//     return {
//       ok: false,
//     };
//    }
// }

export {
    httpGetAllRecipes,
    httpGetPopularRecipes,
    httpGetFullRecipeWithDetails,
    httpGetFullRecipeWithDetailsEditPage,
    httpGetUserRecipes,
    httpCreateRecipe,
    httpEditUserRecipe,
    httpAddFavoriteRecipe,
    httpDeleteRecipe
    // httpCreateNewUser,
    // httpLoginUser
}