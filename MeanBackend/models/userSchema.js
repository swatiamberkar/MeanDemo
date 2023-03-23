var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    name : { type: String},
    emailid : {type: String},
    username : {type: String},
    password : {type : String}
})

module.exports = mongoose.model('user', userSchema)