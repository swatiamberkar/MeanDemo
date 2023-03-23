var express = require('express')
var router = express.Router()
var projectSchema = require('../models/projectSchema')

router.post('/createProject', async (req, res) => {
    const project = await projectSchema.create(req.body)
    res.send(project)
    console.log(project)
})

router.get('/readProject', async(req, res )=> {
    const project = await (projectSchema.find())
    res.send(project)
    console.log(project) 
})

module.exports = router