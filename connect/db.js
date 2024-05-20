const mongoose = require('mongoose')

mongoose.connect("mongodb://0.0.0.0/usercontact")
    .then(() => {console.log('db connected')})
    .catch((err) => console.log(err))