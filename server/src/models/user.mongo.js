const{ mongoose, Schema} = require('mongoose');
//const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    authId: {
        type: String
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        // trim: true,
        unique: true,
        // match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    // password: {
    //     type: String,
    //     required: true,
    //     minlength: 5
    // },
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
});

// userSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//         const saltRound = 10;
//         this.password = await bcrypt.hash(this.password, saltRound);
//     }
// });

// userSchema.methods.isCorrectPassword = async function (password) {
//     return bcrypt.compare(password, this.password);
// };

module.exports = mongoose.model('User', userSchema);