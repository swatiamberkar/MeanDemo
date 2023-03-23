var mongoose = require('mongoose')

var employeeSchema = mongoose.Schema({
    name : { type: String},
    emailid : {type: String},
    username : {type: String},
    password : {type : String}
})

module.exports = mongoose.model('employee', employeeSchema)