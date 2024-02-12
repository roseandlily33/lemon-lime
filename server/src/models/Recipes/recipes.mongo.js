const mongoose = require('mongoose');

const recipesSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        required: true,
        trim: true
    },
    // images: [{
    //     url: String
    // }],
    prepTime: {
        type: String,
        required: true
    },
    cookTime: {
        type: String,
        required: true
    },
    ingredients: [{
        type: String,
        required: true
    }],
    instructions: [{
        type: String,
        required: true
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    // author: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    // comments: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Comment'
    // }],
    // subCategories: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'SubCategory'
    // }]
});

module.exports = mongoose.model('Recipe', recipesSchema);