const{ mongoose, Schema} = require('mongoose');
//const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    authId: {
        type: String
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [2, 'Name must be over 2 characters long'],
        maxlength: [30, 'Name must be under 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: [true, 'Email must be unique'],
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    // password: {
    //     type: String,
    //     required: true,
    //     minlength: 5
    // },
    favorites: {
        type: Map,
        of: String,
        default: {}
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
}, {
    timestamps: true
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