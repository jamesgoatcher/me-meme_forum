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

//allows router use
module.exports 	= router;