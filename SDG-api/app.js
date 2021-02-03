var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var collection1Router = require('./routes/collection1');
var collection2Router = require('./routes/collection2');
var collection3Router = require('./routes/collection3');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/coll1', collection1Router);
app.use('/coll2', collection2Router);
app.use('/coll3', collection3Router);

module.exports = app;
