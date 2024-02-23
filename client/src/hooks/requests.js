const API_URL = 'http://localhost:8000';

//Recipes endpoints
//This works
async function httpGetAllRecipes(){
    const response = await fetch(`${API_URL}/home/recipes`);
    let allRecipes = await response.json();
    console.log('Returned all recipes');
    return allRecipes;
}
//This Works
async function httpGetPopularRecipes(){
    const response = await fetch(`${API_URL}/home/popular`);
    let allRecipes = await response.json();
    return allRecipes;
}
//This Works
async function httpGetFullRecipeWithDetails(id){
    const response = await fetch(`${API_URL}/home/${id}`);
    let oneRecipe = await response.json();
    return oneRecipe[0];
}

//User endpoints
async function httpGetUserRecipes(id){
    const response = await fetch(`${API_URL}/user/${id}`);
    let allRecipes = await response.json();
    return allRecipes[0];
}

//This works - still need to add the user to it
async function httpCreateRecipe(user, recipe){
    console.log('HTTP CREATE RECIPE', recipe, 'FOR', user);
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

async function httpEditUserRecipe(id, info){
  console.log('HTTP EDIT CREATE RECIPE', id);
    try {
        return await fetch(`${API_URL}/user/recipe/${id}`, {
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
    httpGetUserRecipes,
    httpCreateRecipe,
    httpEditUserRecipe
    // httpCreateNewUser,
    // httpLoginUser
}