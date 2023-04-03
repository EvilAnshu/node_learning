var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index'); //get,post
var usersRouter = require('./routes/users'); //get,post,put,patch
var app = express();
//app4
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json()); //express output response : json
app.use(express.urlencoded({ extended: false })); //url encoding
app.use(express.static(path.join(__dirname, 'public'))); //public 
//Router url
app.use('/', indexRouter);  //Resource
app.use('/users', usersRouter); //Resources

module.exports = app; //exports 


