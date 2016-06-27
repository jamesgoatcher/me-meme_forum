//USER - CONTROLLER
//dependencies
var express		= require('express');
var router		= express.Router();
var User 		= require('../models/users.js');
var bcrypt		= require('bcrypt');

//GET - sign up page
router.get('/new', function(req, res) {
	res.render('users/new.ejs')
})

//allows form post with password encryption and salting
router.post('/', function(req, res) {
	req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
	User.create(req.body, function(err, data) {
		res.redirect('/');
	})
})

//allows router use
module.exports 	= router;