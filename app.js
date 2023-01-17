var express=require('express')
const con=require('./config/Db')
const _ =require('lodash');
var bodyparser=require('body-parser')
var app=express();
app.use(bodyparser.json())
require("dotenv").config();
var routes=require('./routes/routes')
app.use(routes)





app.listen(4000, function (req, res) {
    console.log('Server is created and running on port 4000')
});

