var express = require('express');
var router = express.Router();
var orm = require('orm');
var moment = require('moment');
var dbs = require('../dbs/dbs')(router);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/backstage', function(req, res, next) {
  res.render('backstage');
});

router.get('/baidunews', function(req, res, next) {
  res.render('baidunews');
});


//所有分类信息
router.get('/database',dbs.getUserBySort,function(req,res){
	res.send(res.locals.news);
});
//新闻信息
router.get('/datanews',dbs.getUserByNews,function(req,res){
	res.send(res.locals.news);
});
//图片信息
router.get('/dataimg',dbs.getUserByImg,function(req,res){
	res.send(res.locals.news);
});
//文字信息
router.get('/dataspan',dbs.getUserBySpan,function(req,res){
	res.send(res.locals.news);
});
//单条信息
router.post('/find', dbs.getUserById,function(req,res){
	res.send(res.locals.news);
});
// 新增数据
router.post('/insert',dbs.getInsert,function(req,res){
	res.send(res.locals.news);
});
//修改数据
router.post('/update',dbs.getUpdata,function(req,res){
	res.json(res.locals.news);
});
// 删除数据
router.post('/delete',dbs.getDelete,function(req,res){
	res.json(res.locals.news);
});

module.exports = router;