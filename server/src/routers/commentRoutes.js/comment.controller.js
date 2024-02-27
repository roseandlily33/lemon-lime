const Comment = require('../../models/comments.mongo');

//Adds a comment under a post
async function httpAddComment(req, res){
    console.log('Adding a comment');
    try{
        console.log('Adding', req.body);
    } catch(err){
        return res.status(404).json({msg: "Unable to add a comment"})
    }
}

//Delete a comment from a post
async function httpDeleteComment(req, res){
    console.log('Deleting a comment')
    try{

    } catch(err){
        return res.status(404).json({msg: "Unable to add a comment"})
    }
}

//Gets all the comments for a specfic post
async function httpGetAllCommentsForRecipe(req, res){
    console.log('Getting all comments for a post')
    try{

    } catch(err){
        return res.status(404).json({msg: "Unable to add a comment"})
    }
}

module.exports = {
    httpAddComment,
    httpDeleteComment,
    httpGetAllCommentsForRecipe
}