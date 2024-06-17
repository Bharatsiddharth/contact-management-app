const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    contactname:String,
    contact:String,
    contactemail:String,
    address:String
})

module.exports = mongoose.model('user', userschema)