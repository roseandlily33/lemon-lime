
async function httpGetAllRecipes(req, res){
    console.log('HTTP GET ALL RECIPES')
    let allRecipes = await recipes.find();
    console.log('All Recipes', allRecipes);
    return allRecipes
    // console.log('Getting all the recipes');
    // return res.status(200).json({
    //     msg: 'Got the recipes'
    // })
};

module.exports = {
    httpGetAllRecipes
}