const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    age: Number
})

const User = mongoose.model('users', userSchema)

module.exports =  User