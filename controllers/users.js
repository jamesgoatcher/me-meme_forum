//USER - CONTROLLER
//dependencies
var express		= require('express');
var router		= express.Router();
var User 		= require('../models/users.js');
var Topic		= require('../models/topic.js');
var Comments 	= require('../models/comments.js');
var bcrypt		= require('bcrypt');

//GET, INDEX - sign up page
router.get('/index', function(req, res) {
	res.render('users/index.ejs')
})

//POST, INDEX - allows form post with password encryption and salting
router.post('/', function(req, res) {
	req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
	User.create(req.body, function(err, data) {
		if(err) {
			console.log(err);
			res.redirect('/login/error-u')
		} else {
		req.session.loggedInUsername = data.username;
		res.redirect('/');
		}
	})
})

//GET, NEW - new topic create page
router.get('/new', function(req, res) {
	if(req.session.loggedInUsername !== undefined){
		res.render('users/new.ejs', {
			userLoggedIn: true,
			username: req.session.loggedInUsername
		})
	} else {
		res.render('users/new.ejs', {
			userLoggedIn: false,
	})}
})

//POST, NEW - New topic and body to HOME
router.post('/new', function(req, res) {
	req.session.loggedInUsername;
	Topic.create(req.body, function(err, topic) {
		res.redirect('/')
	})
})

//GET, SHOW - topic comment show page
router.get('/:id', function(req, res) {
	Topic.findById(req.params.id, function(err, topicFound) {
		req.session.loggedInUsername;
		res.render('users/show.ejs', {
			userLoggedIn: true,
			username: req.session.loggedInUsername,
			topic: topicFound,
		})
	})
})

//SHOW, POST - comment on topic show page
router.post('/:id', function(req, res) {
	Topic.findById(req.params.id, function(err, topicFound) {
		topicFound.comments.push(req.body)
		topicFound.save(function() {
			res.redirect('/users/' + topicFound._id)
		})
	})
})

//allows router use
module.exports 	= router;