var express = require('express');
var path = require('path')
var port = process.env.PORT || 3000;
var app = express();
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
app.set('views', './views/pages'); //视图
app.set('view engine', 'jade'); //默认的模板引擎
app.use(bodyParser.urlencoded()); //表单数据的序列化
app.use(serveStatic('bower_components')); //路径
app.listen(port); //监听端口

console.log('imooc started on port' + port);

// index page,路由
app.get('/', function(req, res) {
	res.render('index', {
		title: 'imooc 首页'
	})
});

app.get('/admin', function(req, res) {
	res.render('list', {
		title: 'imooc 列表页'
	})
});

app.get('/movie/:id', function(req, res) {
	res.render('detail', {
		title: 'imooc 详情页'
	})
})

app.get('/admin/movie', function(req, res) {
	res.render('admin', {
		title: 'imooc 后台录入页'
	})
})