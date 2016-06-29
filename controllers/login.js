//LOGIN - CONTROLLER
//dependencies
var express 	= require('express');
var router  	= express.Router();
var User    	= require('../models/users.js');
var bcrypt  	= require('bcrypt');

//GET - Log In page
router.get('/index', function(req, res) {
	res.render('login/index.ejs');
});

//POST - Log In page
router.post('/', function(req, res) {
	User.findOne({username: req.body.username}, function(err, foundUser) { //searches for username and returns foundUser
		if(foundUser && bcrypt.compareSync(req.body.password, foundUser.password)){ //compares typed password to stored encrypted
			req.session.loggedInUsername = foundUser.username; //asigns foundUser.username to the req.session.loggedIn variable in server
			res.redirect('/') //redirect
		} else {
			res.redirect('login/error-p') //fail
		}
	})
})

//GET - title page
router.get('/title', function(req, res) {
	res.render('login/title.ejs');
});

//GET - error page, username
router.get('/error-u', function(req, res) {
	res.render('login/error-u');
});

//GET - error page, password
router.get('/error-p', function(req, res) {
	res.render('login/error-p');
});

//allows router use
module.exports = router;