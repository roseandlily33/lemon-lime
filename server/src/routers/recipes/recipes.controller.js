
function httpGetAllRecipes(req, res){
    console.log('Getting all the recipes');
    return res.status(200).json({
        msg: 'Got the recipes'
    })
};

module.exports = {
    httpGetAllRecipes
}