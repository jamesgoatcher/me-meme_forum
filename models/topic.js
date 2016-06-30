//TOPIC - MODEL
//dependencies
var mongoose = require('mongoose')
var User 	 = require('./users.js')
var Comments = require('./comments.js')

//TOPIC schema
var topicSchema = mongoose.Schema({
	topic: String,
	body: String,
	time: String,
	user: String,
	likes: Number,
	comments: [Comments.schema]
})

//TOPIC schema in controller
var Topic = mongoose.model('Topic', topicSchema);

//allows router
module.exports = Topic