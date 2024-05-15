const{ mongoose, Schema } = require('mongoose');

const recipesSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        required: true,
        trim: true
    },
    images: [{
       type: Schema.Types.Mixed
    }],
    prepTime: {
        type: String,
        required: true
    },
    cookTime: {
        type: String,
        required: true
    },
    totalTime: {
        type: Schema.Types.Mixed,
    },
    ingredients: [{
        type: Schema.Types.Mixed,
        required: true
    }],
    instructions: [{
        type: Schema.Types.Mixed,
        required: true
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    subCategory: {
        type: String,
        required: true
    },
    favorites: {
        type: Number,
        default: 0
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    authorName: {
        type: String,
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
});

module.exports = mongoose.model('Recipe', recipesSchema);