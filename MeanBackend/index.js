var http = require('http');
var express = require('express')
var port = process.env.PORT || 3000
var app = express()
var appRoutes = require('./Routes/appRoutes')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors')

mongoose.connect('mongodb://localhost:27017/meanDb')

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/', appRoutes);

const path = require('path');
app.use('/', express.static(path.join(__dirname, '../MeanFrontend/dist/mean-frontend')));


http.createServer(app).listen(port)
console.log('Backend running on port', port);