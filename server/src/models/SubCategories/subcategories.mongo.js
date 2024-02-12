const mongoose = require('mongoose');

const subCategories = new mongoose.Schema({
    type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('SubCategory', subCategories);