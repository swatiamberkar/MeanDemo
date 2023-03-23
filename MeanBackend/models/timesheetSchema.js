var mongoose = require('mongoose')

var timesheetSchema = mongoose.Schema({
    name : { type: String},
    entryDate : {type: String},
    taskDate : {type: String},
    project : {type : String},
    task : { type: String},
    description : {type: String},
    hoursInvested : {type: String}
})

module.exports = mongoose.model('timesheet', timesheetSchema)