//USER - MODEL
//dependencies
var mongoose = require('mongoose')

//USER schema
var userSchema = mongoose.Schema({
	username: { type: String, unique: true },
	password: String
})

//USER schema in controller
var User = mongoose.model('User', userSchema);

//allows router
module.exports = User