//modules import
const express = require ('express');
const { extend } = require('jquery');
const morgan = require ('morgan')
const cors = require ('cors')
const app = express()

//Enviroment variables
app.set('port', process.env.PORT || 4000);

//Setting up deps
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//Main routes goes here
app.use("/api/employees", require('./routes/employee.routes'))
app.use("/api/users", require('./routes/user.routes'))


module.exports = app 