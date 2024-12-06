if (!process.env.REACT_APP_API_URL) {
  throw new Error(
    "REACT_APP_API_URL is not defined in the environment variables"
  );
}
const API_URL = process.env.REACT_APP_API_URL;

//Gets all the recipes for the main page
// async function httpGetAllRecipes(){
//     const response = await fetch(`${API_URL}/home/recipes`);
//     let allRecipes = await response.json();
//     return allRecipes;
// }
//Gets all the popular recipes for the main page
// async function httpGetPopularRecipes(){
//     const response = await fetch(`${API_URL}/home/popular`);
//     let allRecipes = await response.json();
//     return allRecipes;
// }

//GET: Gets the full recipe with details for a view page
async function httpGetFullRecipeWithDetails(id) {
  try {
    const response = await fetch(`${API_URL}/home/${id}`);
    const oneRecipe = await response.json();
    return oneRecipe;
  } catch (err) {
    return err;
  }
}

//GET: Gets the full recipe details for the edit a recipe page
async function httpGetFullRecipeWithDetailsEditPage(id) {
  try {
    const response = await fetch(`${API_URL}/user/edit/${id}`);
    const oneRecipe = await response.json();
    return oneRecipe[0];
  } catch (err) {
    return err;
  }
}

// // GET: Search for text and sub category
// async function httpSearchRecipes(searchText, subCategory) {
//   try {
//     const recipes = await fetch(
//       `${API_URL}/home/search/${searchText}/${subCategory}`
//     );
//     const foundRecipes = await recipes.json();
//     return foundRecipes;
//   } catch (err) {
//     return err;
//   }
// }

export {
  //httpGetAllRecipes,
  httpGetFullRecipeWithDetails,
  httpGetFullRecipeWithDetailsEditPage,
  // httpGetPopularRecipes,
  // httpSearchRecipes,
};
