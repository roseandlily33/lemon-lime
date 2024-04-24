const Comment = require('../../models/comments.mongo');
const User = require('../../models/user.mongo');
const Recipe = require('../../models/recipes.mongo');

//Adds a comment under a post - should be good
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
        return res.status(201).json(newComment);
    } catch(err){
        console.log('Errr' ,err)
        return res.status(404).json({msg: "Unable to add a comment"})
    }
}

//Delete a comment from a post
async function httpDeleteComment(req, res){
    console.log('Deleting a comment')
    try{
    const id = req.params.id;
    let deletedComment = await Comment.findOneAndDelete({_id: id});
    //This needs to be verified 
    await User.findOneAndUpdate({_id: id}, {$pull: {comments: deletedComment}})
    console.log('Deleted Comment', deletedComment);
        return res.status(200).json(deletedComment);
    } catch(err){
        return res.status(404).json({msg: "Unable to delete a comment"})
    }
}


async function httpEditRecipe(req, res){
    try{
        console.log('Editing a recipe');
        res.status(201).json({msg: 'Edited the recipe'})
    } catch(err){
        return res.status(404).json({msg: "Unable to edit a comment"})
    }
}

module.exports = {
    httpAddComment,
    httpDeleteComment,
    httpEditRecipe
}