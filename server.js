//SERVER
//dependencies
var express        = require('express');
var bodyParser     = require('body-parser');
var mongoose	   = require('mongoose');
var session	  	   = require('express-session');
var methodOverride = require('method-override');
var User 		   = require('./models/users.js');
var Topic		   = require('./models/topic.js');

//app
var app 	   = express();

//body parser
app.use(bodyParser.urlencoded({extended: false}));
//method override
app.use(methodOverride('_method'));
//public
app.use(express.static('public'));

//session use
app.use(session({
	secret: 'machiavelli',
	resave: false,
	saveUninitialized: false
}));

//controllers
app.set('view engine', 'ejs')

var userController = require('./controllers/users.js');
app.use('/users', userController);

var loginController = require('./controllers/login.js')
app.use('/login', loginController)

//views
//session will go here
app.get('/', function(req, res) {
	Topic.find({}, function(err, data) {
		if(req.session.loggedInUsername !== undefined){
			res.render('home.ejs', {
				username: req.session.loggedInUsername,
				userLoggedIn: true,
				topic: data
			});
		} else {
			res.render('home.ejs', {
				userLoggedIn: false,
				topic: data
			});
		}
	})
})

//connects to mongo
mongoose.connect('mongodb://localhost:27017/mememe_forum');

//console logs me in mongo
mongoose.connection.once('open', function() {
	console.log('mongodb')
});

//port
app.listen(3000, function() {
	console.log('port 3000')
});