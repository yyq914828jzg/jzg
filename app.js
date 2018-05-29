var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

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

app.use('/', indexRouter);
app.use('/users', usersRouter);
//添加接口
var apiRoutes = express.Router() 
app.use('/api', apiRoutes)  
// 跨域设置    
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8")
  next()
})

var data = require('./data.json')  
var dynamic = data.dynamic
var headline = data.headline
var message = data.message
var schedule = data.schedule
var detection = data.detection
var allQuotas = data.allQuotas
var budget = data.budget
var merit = data.merit
var performance = data.performance
var addmembers = data.addmembers
var doctorName = data.doctorName
var table = data.table
var route = data.route
var ratings = data.ratings
var info = data.info
var echarts = data.echarts
var list = data.list
var quota = data.quota
var trend = data.trend
var reportList = data.reportList;
var dynamicall = data.dynamicall;
var dynamicindex = data.dynamicindex;
var xiaoqing = data.xiaoqing;
var costing = data.costing;
var costingmore = data.costingmore;
var aa = data.aa;
var bb = data.bb;
var cc = data.cc;
var dd = data.dd;
var ee = data.ee;
var reason = data.reason   




  app.use('/api/dynamic', (req, res) => {
	res.json({
	  errno: 0,
	  data: dynamic
	})
  })
  app.use('/api/headline', (req, res) => {
	res.json({
	  errno: 0,
	  data: headline
	})
  })
  app.use('/api/message', (req, res) => {
	res.json({
	  errno: 0,
	  data: message
	})
  })
  app.use('/api/schedule', (req, res) => {
	res.json({
	  errno: 0,
	  data: schedule
	})
  })
  //指标监测关注指标
  app.use('/api/detection', (req, res) => {
	res.json({
	  errno: 0,
	  data: detection
	})
  }),
  // 指标列表页下半部分所有指标
  app.use('/api/allQuotas', (req, res) => {
	res.json({
	  errno: 0,
	  data: allQuotas
	})
  }),
  //指标详情页头部指标项
  app.use('/api/quota', (req, res) => {
	res.json({
	  errno: 0,
	  data: quota
	})
  }),
  //指标详情页趋势图
  app.use('/api/trend', (req, res) => {
	res.json({
	  errno: 0,
	  data: trend
	})
  }),
  //指标详情页原因树形图
  app.use('/api/reason', (req, res) => {
	res.json({
	  errno: 0,
	  data: reason
	})
  }),
  //指标详情页报告列表
  app.use('/api/reportList', (req, res) => {
	res.json({
	  errno: 0,
	  data: reportList
	})
  }),
  app.use('/api/ratings', (req, res) => {
	res.json({
	  errno: 0,
	  data: ratings
	})
  })
  app.use('/api/budget', (req, res) => {
	res.json({
	  errno: 0,
	  data: budget
	})
  })
  app.use('/api/merit', (req, res) => {
	res.json({
	  errno: 0,
	  data: merit
	})
  })
  app.use('/api/performance', (req, res) => {
	res.json({
	  errno: 0,
	  data: performance
	})
  })
  app.use('/api/addmembers', (req, res) => {
	res.json({
	  errno: 0,
	  data: addmembers
	})
  })
  app.use('/api/doctorName', (req, res) => {
	res.json({
	  errno: 0,
	  data: doctorName
	})
  })
  app.use('/api/table', (req, res) => {
	res.json({
	  errno: 0,
	  data: table
	})
  })
  app.use('/api/route', (req, res) => {
	res.json({
	  errno: 0,
	  data: route
	})
  })
  app.use('/api/info', (req, res) => {
	res.json({
	  errno: 0,
	  data: info
	})
  })
  app.use('/api/echarts', (req, res) => {
	res.json({
	  errno: 0,
	  data: echarts
	})
  })
  app.use('/api/list', (req, res) => {
	res.json({
	  errno: 0,
	  data: list
	})
  })
  app.use('/api/dynamicall', (req, res) => {
	res.json({
	  errno: 0,
	  data: dynamicall
	})
  })
  app.use('/api/dynamicindex', (req, res) => {
	res.json({
	  errno: 0,
	  data: dynamicindex
	})
  })
  app.use('/api/xiaoqing', (req, res) => {
	res.json({
	  errno: 0,
	  data: xiaoqing
	})  
  })
  app.use('/api/costing', (req, res) => {
	res.json({
	  errno: 0,
	  data: costing  
	})
  })
  app.use('/api/costingmore', (req, res) => {
	res.json({
	  errno: 0,
	  data: costingmore
	})
  })
  app.use('/api/aa', (req, res) => {
	res.json({
	  errno: 0,
	  data: aa
	})
  })
  app.use('/api/bb', (req, res) => {
	res.json({
	  errno: 0,
	  data: bb
	})
  })
  app.use('/api/cc', (req, res) => {
	res.json({
	  errno: 0,
	  data: cc
	})
  })
  app.use('/api/dd', (req, res) => {
	res.json({
	  errno: 0,
	  data: dd
	})
  })  
  app.use('/api/ee', (req, res) => {
	res.json({
	  errno: 0,
	  data: ee
	})
  })
  
  
  //////////////////////////////
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
