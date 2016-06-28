//USER - CONTROLLER
//dependencies
var express		= require('express');
var router		= express.Router();
var User 		= require('../models/users.js');
var Topic		= require('../models/topic.js');
var bcrypt		= require('bcrypt');

//GET, INDEX - sign up page
router.get('/index', function(req, res) {
	res.render('users/index.ejs')
})

//POST, INDEX - allows form post with password encryption and salting
router.post('/', function(req, res) {
	req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
	User.create(req.body, function(err, data) {
		req.session.loggedInUsername = data.username;
		res.redirect('/');
	})
})

//GET, NEW - new topic create page
router.get('/new', function(req, res) {
	req.session.loggedInUsername;
	res.render('users/new.ejs', {
		user: req.session.loggedInUsername
		}
	)
})

//POST, NEW - New topic and body to HOME
router.post('/new', function(req, res) {
	req.session.loggedInUsername;
	Topic.create(req.body, function(err, topic) {
		res.redirect('/')
	})
})

//GET, SHOW - topic comment show page
router.get('/show', function(req, res) {
	res.render('users/show.ejs')
})

//allows router use
module.exports 	= router;