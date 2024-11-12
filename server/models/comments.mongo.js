const{ mongoose, Schema } = require('mongoose');

const commentsSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        maxLength: 100,
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
        min: 1,
        max: 5,
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
        ref: 'User',
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
        required: true
    },
    recipeName: {
        type: String,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', commentsSchema);