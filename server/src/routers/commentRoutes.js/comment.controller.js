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
    const id = req.params.id;
    let deletedComment = await Comment.findOneAndDelete({_id: id});
   // await User.findOneAndDelete({comment: deletedComment});
   console.log('Deleted Comment', deletedComment);
    res.status(200).json(deletedComment);
    } catch(err){
        return res.status(404).json({msg: "Unable to add a comment"})
    }
}

//Gets all the comments for a specfic post
async function httpGetAllCommentsForRecipe(req, res){
    console.log('Getting all comments for a post')
    try{
        console.log('Comments for ', req.params.id);
        const allComments = await Comment.find({recipe: req.params.id}).sort({createdAt: -1});
        console.log('All the comments', allComments);
        res.status(200).json(allComments);
    } catch(err){
        return res.status(404).json({msg: "Unable to add a comment"})
    }
}

module.exports = {
    httpAddComment,
    httpDeleteComment,
    httpGetAllCommentsForRecipe
}