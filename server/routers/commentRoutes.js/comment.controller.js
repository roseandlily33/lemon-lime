const Comment = require('../../models/comments.mongo');
const User = require('../../models/user.mongo');
const Recipe = require('../../models/recipes.mongo');

//Adds a comment under a post - should be good
async function httpAddComment(req, res){
    try{
        const authId = req.body.author;
        if(!authId){
            return res.status(404).json({msg: "An author is required"});
        }
        const authorId =  await User.findOne({authId : authId});
        if(!authorId){
            return res.status(404).json({msg: "Could not find the author"})
        }
        const newComment = await Comment.create({...req.body, author: authorId});
        if(!newComment){
            return res.status(404).json({msg: "Could nto create the comment"})
        }
        const updatedUser = await User.findOneAndUpdate({
            _id: authorId.id}, {
              $addToSet: {comments: newComment.id}
            }
        );
        if(!updatedUser){
            return res.status(404).json({msg: "User has not been updated"})
        }
        const updatedRecipe = await Recipe.findOneAndUpdate({
            _id: newComment.recipe
        }, {
            $addToSet: {comments: newComment.id}
        })
        if(!updatedRecipe){
            return res.status(404).json({msg: "Recipe has not been updated"})
        }
        return res.status(201).json(newComment);
    } catch(err){
        return res.status(500).json({msg: "An error has occured, unable to add a comment"})
    }
}

//Delete a comment from a post - Finished
async function httpDeleteComment(req, res){
    try{
        const id = req.params.id; 
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: 'Invalid id' });
        }
        const deletedComment = await Comment.findOneAndDelete({_id: id});
        if(!deletedComment){
            return res.status(404).json({msg: "Comment could not be deleted"})
        }
        const userUpdated = await User.findOneAndUpdate({_id: deletedComment.author}, {$pull: {comments: deletedComment._id}});
        if(!userUpdated){
            return res.status(404).json({msg: "User has not been updated"})
        }
        const recipeUpadted = await Recipe.findOneAndUpdate({_id: deletedComment.recipe}, {$pull: {comments: deletedComment._id}})
        if(!recipeUpadted){
            return res.status(404).json({msg: "Recipe has not been updated"})
        }
        return res.status(200).json(deletedComment);
    } catch(err){
        return res.status(404).json({msg: "Unable to delete a comment"})
    }
}

//Edits the comment for a user - Finished
async function httpEditComment(req, res){
    try{
        const commentId = req.params.id;
        if(!commentId){
            return res.status(404).json({msg: "Comments id is needed"})
        }
        const body = req.body;
        if(!body){
            return res.status(404).json({msg: "Body of a comment is required"})
        }
        const updatedComment =  await Comment.findOneAndUpdate({_id: commentId}, body, {upsert: true} )
        if(!updatedComment){
            return res.status(404).json({msg: "Comment has not been updated"})
        }
        return res.status(201).json({msg: 'Comment has been updated'})
    } catch(err){
        return res.status(500).json({msg: "An error has occured, unable to edit a comment"})
    }
}

module.exports = {
    httpAddComment,
    httpDeleteComment,
    httpEditComment
}