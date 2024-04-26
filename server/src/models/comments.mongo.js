const{ mongoose, Schema } = require('mongoose');

const commentsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        requied: true,
        maxLength: 300,
        minLength: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: Number,
        required: true
    },
    
    // likes: {
    //     type: Number,
    //     default: 0
    // },
    // dislikes: {
    //     type: Number,
    //     default: 0
    // },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    authorName: {
        type: String,
        required: true
    },
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    },
    recipeName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Comment', commentsSchema);