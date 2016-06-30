//USER - MODEL
//dependencies
var mongoose = require('mongoose')
var Topic	 = require('./topic.js')

//USER schema
var commentsSchema = mongoose.Schema({
	comment: String,
	author: String
})

//USER schema in controller
var Comments = mongoose.model('Comments', commentsSchema);

//allows router
module.exports = Comments;