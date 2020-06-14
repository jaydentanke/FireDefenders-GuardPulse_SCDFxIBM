var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const moment = require('moment')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


CASES = [
  {
    id: '1001',
    time: moment().subtract(1, 'hours'),
    severity: 'high',
  },
  {
    id: '1002',
    time: moment().subtract(1, 'hours'),
    severity: 'low',
  },
]

app.get('/', function(req, res, next) {
  res.render('index', { cases: CASES });
});


app.get('/cases/:caseId', function (req, res) {
  var p = ["1","2"];
  var c = ["High", "low"];
  var i = ["heart attack", "fall"];
  var plan = ["ambulance  & CFR enroute", "CFR enroute"];
  var r = ["patient not responsive", "patient is fine"];
  var x =  Math.floor(Math.random()*2);
  
    res.render('case_info', {
      caseId: req.params['caseId'],
      priority: p[x],
      confidenceInterval: c[x],
      location: "HDB Blk 123",
      illness: i[x],
      plan: plan[x],
      report: r[x]
    });
  })
app.get('/cases/:caseId', function (req, res) {
  res.render('case_info', { 
    caseId: req.params['caseId'],
    severity: 'high'
  });
})

app.use('/',express.static(__dirname+'/node_modules/admin-lte'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
