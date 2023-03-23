var express = require('express')
var router = express.Router()
var userSchema = require('../models/userSchema')
const jwt = require('jsonwebtoken');

const secret = 'secret_key';

router.post('/createUser', async (req, res) => {
    const user = await userSchema.create(req.body)
    res.send(user)
    console.log(user)
})

router.get('/readUser', async (req, res) => {
    const user = await (userSchema.find())
    res.send(user)
    console.log(user)
})

router.post('/login', async (req, res) => {
   // const { username, password } = req.body;
    const user = await (userSchema.findOne( { username: req.body.username, password: req.body.password}))
    console.log(user)
    if (user) {
        const token = jwt.sign({ sub: user.id }, secret);
        res.send({ token });
        console.log(token)
    } else {
        res.status(401).send({ message: 'Invalid login credentials' });
        //res.send(error);
    }
})

module.exports = router