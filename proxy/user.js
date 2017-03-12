var User = require('../model').User;

exports.createUser = function(name,password,callback){
	var user = new User({
		username:name,
		password:password
	});

	user.save(callback);
}

exports.getUser = function(name,callback){
	User.findOne({username:name},callback);
};