var http = require('http');
var express = require('express')
var app = express()
var serverless = require('serverless-http')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors')
const path = require('path');
const { MongoClient, ServerApiVersion } = require('mongodb');
var appRoutes = require('./Routes/appRoutes')
var userRoutes = require('./Routes/userRoutes')
var employeeRoutes = require('./Routes/employeeRoutes')
var projectRoutes = require('./Routes/projectRoutes')
var taskRoutes = require('./Routes/taskRoutes')
var timesheetRoutes = require('./Routes/timesheetRoutes')


var port = process.env.PORT || 3000
var database_url= process.env.DATABASE_URL || 'mongodb+srv://swatiamberkar29:GuxDayuDz3T1UDJ2@cluster0.rnjeiyd.mongodb.net/test';

mongoose.connect(database_url)
console.log('Database connection');

const client = new MongoClient(database_url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/', appRoutes);
app.use('/', userRoutes);
app.use('/', employeeRoutes);
app.use('/', projectRoutes);
app.use('/', taskRoutes);
app.use('/', timesheetRoutes);
app.use('/', express.static(path.join(__dirname, '.././MeanFrontend/dist/mean-frontend')));

http.createServer(app).listen(port)
console.log('Backend running on port', port);

const handler = serverless(app);
module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};