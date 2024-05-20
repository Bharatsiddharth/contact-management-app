const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    username:String,
    contact:String,
    email:String,
    address:String
})

module.exports = mongoose.model('user', userschema)