const{ mongoose, Schema } = require('mongoose');

const recipesSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        required: true,
        trim: true,
        maxlength: [100, 'Recipe name must be under 100 characters']
    },
    description: {
        type: String,
        required: true,
        maxlength: [800, 'Recipe description must be under 800 characters']
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
        ref: 'User',
        required: true
    },
    authorName: {
        type: String,
        required: true,
        trim: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipesSchema);