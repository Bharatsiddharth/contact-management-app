const { name } = require('ejs');
const mongoose = require('mongoose');

const plm = require('passport-local-mongoose')

const userSchema = mongoose.Schema({
    name1:String,
    username1:String,
    email1:String,
    password:String
})

userSchema.plugin(plm);


const user = mongoose.model("user", userSchema);

module.exports = user;