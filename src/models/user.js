const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    googleId: {
        type: String
    },
    access_token: {
        type: String
    },
    refresh_token: {
        type: String
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User
