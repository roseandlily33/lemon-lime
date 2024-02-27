const Comment = require('../../models/comments.mongo');
const User = require('../../models/user.mongo');
const Recipe = require('../../models/recipes.mongo');

//Adds a comment under a post
async function httpAddComment(req, res){
    try{
        let authorId =  await User.findOne({authId : req.body.author});
        let newComment = await Comment.create({...req.body, author: authorId});
        await User.findOneAndUpdate({
            _id: authorId.id}, {
              $addToSet: {comments: newComment.id}
            }
        );
        await Recipe.findOneAndUpdate({
            _id: newComment.recipe
        }, {
            $addToSet: {comments: newComment.id}
        })
        res.status(201).json(newComment);
    } catch(err){
        console.log('Errr' ,err)
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