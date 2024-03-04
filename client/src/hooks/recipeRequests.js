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

async function httpSearchRecipes(searchText){
   let recipes =  await fetch(`${API_URL}/home/search/${searchText}`);
   let foundRecipes = await recipes.json();
   console.log('HTTP FOUND THESE RECIPES', foundRecipes);
   return foundRecipes;
}

export {
    httpGetAllRecipes,
    httpGetFullRecipeWithDetails,
    httpGetFullRecipeWithDetailsEditPage,
    httpGetPopularRecipes,
    httpSearchRecipes
}