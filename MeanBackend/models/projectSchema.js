var mongoose = require('mongoose')

var projectSchema = mongoose.Schema({
    name : { type: String},
    description : {type: String}
})

module.exports = mongoose.model('project', projectSchema)