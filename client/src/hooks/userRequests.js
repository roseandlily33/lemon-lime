const API_URL = 'http://localhost:8000';

//Gets all of the users recipes
// async function httpGetUserRecipes(id){
//     const response = await fetch(`${API_URL}/user/${id}`);
//     let allRecipes = await response.json();
//     return allRecipes[0];
// }
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
      }
    })
  } catch(err){
    return {
      ok: false,
    };
  }
}
//Allows the user to add a favorite recipe
async function httpAddFavoriteRecipe(userId, recipeId){
  console.log('ADDING HTTP FAVE RECIPE', userId, recipeId)
  try{
    return await fetch(`${API_URL}/user/favorites`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        recipeId
      })
    })
  } catch(err){
    console.log('HTTP ERROR', err);
    return {
      ok: false,
    };
  }
}

//Gets all the favorited recipes for a user
async function httpGetUsersFavoriteRecipes(userId){
  const response = await fetch(`${API_URL}/user/favorites/${userId}`);
  let allFavorites = await response.json();
  console.log('Returned http all favorites', allFavorites)
  return allFavorites;
}

// async function httpGetFavoritesForMainPage(userId){
//   const response = await fetch(`${API_URL}/user/main/favorites/${userId}`);
//   let allFavorites = await response.json();
//   return allFavorites;
// }

// Delete a favorited recipe for a user
async function httpDeleteFavoriteRecipe(userId, recipeId){
  try{
    return await fetch(`${API_URL}/user/favorites`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userId, recipeId})
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

//Gets the users comments 
// async function httpGetUserComments(id){
//   try{
//     const response = await fetch(`${API_URL}/user/comments/${id}`);
//     let allUserComments = await response.json();
//     return allUserComments;
//   }catch(err){
//     return {
//       ok: false,
//     };
//   }
// }



export {
    httpAddFavoriteRecipe,
    httpCreateRecipe,
    httpDeleteRecipe,
    httpEditUserRecipe,
    //httpGetUserRecipes,
    //httpGetUserComments,
    httpGetUsersFavoriteRecipes,
    httpDeleteFavoriteRecipe,
   // httpGetFavoritesForMainPage
}