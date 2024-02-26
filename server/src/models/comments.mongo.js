const{ mongoose, Schema } = require('mongoose');

const commentsSchema = new mongoose.Schema({
    comment: {
        type: String,
        requied: true,
        maxLength: 20,
        minLength: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
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
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }
});

module.exports = mongoose.model('Comment', commentsSchema);