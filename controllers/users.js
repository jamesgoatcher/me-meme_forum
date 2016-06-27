//USER - CONTROLLER
//dependencies
var express		= require('express');
var router		= express.Router();
var User 		= require('../models/users.js');
var bcrypt		= require('bcrypt');

//GET, INDEX - sign up page
router.get('/index', function(req, res) {
	res.render('users/index.ejs')
})

//allows form post with password encryption and salting
router.post('/', function(req, res) {
	req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
	User.create(req.body, function(err, data) {
		console.log(err);
		console.log('===');
		console.log(data);
		res.redirect('/');
	})
})

//GET, NEW - sign up page
router.get('/new', function(req, res) {
	res.render('users/new.ejs')
})

//GET, SHOW - sign up page
router.get('/show', function(req, res) {
	res.render('users/show.ejs')
})

//allows router use
module.exports 	= router;