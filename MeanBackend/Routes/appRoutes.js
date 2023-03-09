var express = require('express');
var router = express.Router()
var Country = require('./models/dataSchema')

router.post('/create', async (req, res) => {
    const user = await Country.create(req.body)
    res.send(user)
})

router.get('/read', async (req, res) => {
    const user = await Country.find()
    res.send(user)
})

router.get('/find/:id', async (req, res) => {
    const user = await Country.findById(req.params.id)
    res.send(user)
})

router.put('/update/:id', async (req, res) => {
    const user = await Country.findByIdAndUpdate(req.params.id, req.body)
    const updatedUser = await Country.findById(req.params.id)
    res.send(updatedUser)
})

router.delete('/delete/:id', async (req, res) => {
    const user = await Country.findByIdAndDelete(req.params.id)
    res.send(user)
})

module.exports = router;