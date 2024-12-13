const Comment = require('../../models/comments.mongo');
const User = require('../../models/user.mongo');
const Recipe = require('../../models/recipes.mongo');


// GET: Gets the users comments 
async function httpGetUserComments(req,res){
    try{
        console.log('Getting users comments')
      //let userId = req.params.id;
      const commentsForUser = await User.findOne({authId: req.params.id}, {'email': 0, 'recipes': 0, '__v': 0, 'favorites': 0 }).populate('comments');
      if(!commentsForUser){ 
        return res.status(404).json({msg: 'Could not find comments'})
      }
     // const recipes = await Recipe.find({})
     console.log('Returning', commentsForUser);
      return res.status(200).json(commentsForUser);
    } catch(err){
        console.log('ERROR', err)
      return res.status(500).json({msg: 'An error has occured, could not find comments'})
    }
  };

  
// PUT: Adds a comment under a post 
async function httpAddComment(req, res){
    try{
        console.log('Adding a comment')
        console.log('Req body', req.body);

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
        console.log('New comment complete', newComment);
        return res.status(201).json(newComment);
    } catch(err){
        console.log('ERROR', err)
        return res.status(500).json({msg: "An error has occured, unable to add a comment"})
    }
};

//PUT: Edits the comment for a user
async function httpEditComment(req, res){
    try{
        const commentId = req.params.id;
        console.log('COMMENT ID', commentId);
        console.log('REQ BODY', req.body);
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
        console.log('ERROR', err)
        return res.status(500).json({msg: "An error has occured, unable to edit a comment"})
    }
};

//DELETE: Delete a comment from a post 
async function httpDeleteComment(req, res){
    try{
        const id = req.params.id; 
        console.log("Deleting this comment", id);
        if (!id) {
            return res.status(400).json({ msg: 'Invalid id' });
        }
        const deletedComment = await Comment.findOneAndDelete({_id: id});
        console.log("Deleted comment", deletedComment);
        if(!deletedComment){
            return res.status(404).json({msg: "Comment could not be deleted"})
        }
        const userUpdated = await User.findOneAndUpdate({_id: deletedComment.author}, {$pull: {comments: deletedComment._id}});
        console.log("User updated");
        if(!userUpdated){
            return res.status(404).json({msg: "User has not been updated"})
        }
        const recipeUpdated = await Recipe.findOneAndUpdate({_id: deletedComment.recipe}, {$pull: {comments: deletedComment._id}});
        console.log("Recipe updated", recipeUpdated);
        if(!recipeUpdated){
            return res.status(404).json({msg: "Recipe has not been updated"})
        }
        console.log('Deleted commnet', deletedComment)
        return res.status(200).json(deletedComment);
    } catch(err){
        console.log('ERROR', err)
        return res.status(404).json({msg: "Unable to delete a comment"})
    }
}



module.exports = {
    httpAddComment,
    httpDeleteComment,
    httpEditComment,
    httpGetUserComments
}