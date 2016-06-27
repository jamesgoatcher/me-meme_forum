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

router.post('/', function(req, res) {
	User.findOne({username: req.body.username}, function(err, foundUser) { //searches for username and returns foundUser
		if(foundUser && bcrypt.compareSync(req.body.password, foundUser.password)){ //compares typed password to stored encrypted
			req.session.loggedInUsername = foundUser.username; //asigns foundUser.username to the req.session.loggedIn variable in server
			res.redirect('/') //redirect
		} else {
			res.redirect('/login/new') //fail
		}
	})
})

//allows router use
module.exports = router;