//LOGIN - CONTROLLER
//dependencies
var express 	= require('express');
var router  	= express.Router();
var User    	= require('../models/users.js');
var bcrypt  	= require('bcrypt');

//GET - login page
router.get('/new', function(req, res) {
	res.render('login/new.ejs');
});

//allows router use
module.exports = router;