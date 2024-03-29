// ./src/index.js
// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const bcrypt = require('bcrypt');
var multer = require("multer");
var upload = multer();

require('dotenv').config();

// const mongoString = process.env.DATABASE_URL

// mongoose.connect(mongoString);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }, () => {
	console.log("Connected to db successfully");
  });
const database = mongoose.connection

database.on('error', (error) => {
console.log(error);
});

database.once('connected', () => {
console.log('Database connected');
});

//defining the Express app
const app = express();
//defining the array to work as the database (temporary solution)
const ads = [{title: 'hello, hew (again)'}];

//adding Helmet to enhance your REST Api's security
app.use(helmet());

//using bodyParser to parse JSON bodies into JS objets
//app.use(bodyParser.json());
app.use(express.json())
//enabling CORS for all requests
app.use(cors());

//addding morgan to log HTTP requests 
app.use(morgan('combined'));
app.use(
	express.urlencoded({
	  extended: false,
	})
  );
// for parsing multipart/form-data
app.use(upload.array());

//Route Prefixes
//use Routes file
app.use('/v1/', routes);
//defining an endpoint to return all ads
app.get('/', (req, res) => {
	console.log("default hew");
	res.send(ads);
});



//starting the server
app.listen(process.env.PORT ||8080,() =>{console.log('listening 8080');});
