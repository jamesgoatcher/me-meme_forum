//TOPIC - MODEL
//dependencies
var mongoose = require('mongoose')
var User 	 = require('./users.js')

//TOPIC schema
var topicSchema = mongoose.Schema({
	topic: String,
	body: String,
	user: [User.schema]
})

//TOPIC schema in controller
var Topic = mongoose.model('Topic', topicSchema);

//allows router
module.exports = Topic