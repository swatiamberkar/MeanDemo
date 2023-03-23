var express = require('express')
var router = express.Router()
var taskSchema = require('../models/taskSchema')

router.post('/createTask', async (req, res) => {
    const task = await taskSchema.create(req.body)
    res.send(task)
    console.log(task)
})

router.get('/readTask', async(req, res )=> {
    const task = await (taskSchema.find())
    res.send(task)
    console.log(task) 
})

module.exports = router