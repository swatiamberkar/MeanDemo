var http = require('http');
var express = require('express')
var serverless = require('serverless-http')
var port = process.env.PORT || 3000
var app = express()
var appRoutes = require('./Routes/appRoutes')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

mongoose.connect('mongodb+srv://swatiamberkar29:GuxDayuDz3T1UDJ2@cluster0.rnjeiyd.mongodb.net/test')

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/', appRoutes);

const path = require('path');
app.use('/', express.static(path.join(__dirname, './dist/mean-frontend')));

http.createServer(app).listen(port)
console.log('Backend running on port', port);

//module.exports.handler = serverless

const handler = serverless(app);
module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};