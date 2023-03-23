var mongoose = require('mongoose')

var taskSchema = mongoose.Schema({
    name : { type: String},
    description : {type: String}
})

module.exports = mongoose.model('task', taskSchema)