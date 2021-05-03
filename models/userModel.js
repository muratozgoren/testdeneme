const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const UserSchema = new Schema({

    firsName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 50,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    pass: {
        type: String,
        required: true,
        trim: true,
    }

}, { collection: 'Users', timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;