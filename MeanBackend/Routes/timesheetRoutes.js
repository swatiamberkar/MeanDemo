var express = require('express')
var router = express.Router()
var timesheetSchema = require('../models/timesheetSchema')

router.post('/addTimesheet', async (req, res) => {
    const timesheet = await timesheetSchema.create(req.body)
    res.send(timesheet)
    console.log(timesheet)
})

router.get('/timesheetReport', async(req, res )=> {
    const timesheet = await (timesheetSchema.find())
    res.send(timesheet)
    console.log(timesheet) 
})

module.exports = router