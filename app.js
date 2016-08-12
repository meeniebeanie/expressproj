// app.js

var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var router = require("./config/routes");

app.set('views', './views');
app.set('view engine', 'ejs');

// Middleware
app.use(function(req, res, next){
  console.log('%s request to %s from %s', req.method, req.path, req.ip);

  next();
});

app.use('/',router);

app.set('port',(process.env.PORT || 7000));

app.listen(app.get('port'), function(){
  console.log('My express server is running at localhost', app.get('port'));
});

module.exports = app;
