var express = require('express')
var router = express.Router()
var employeeSchema = require('../models/employeeSchema')

router.post('/createEmployee', async (req, res) => {
    const emp = await employeeSchema.create(req.body)
    res.send(emp)
    console.log(emp)
})

router.get('/readEmployee', async(req, res )=> {
    const emp = await (employeeSchema.find())
    res.send(emp)
    console.log(emp) 
})

module.exports = router