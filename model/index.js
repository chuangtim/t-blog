var mongoose = require('mongoose');
var config   = require('../config');

exports.connect = function(){
	mongoose.connect(config.db, {
	  server: {poolSize: 20}
	}, function (err) {
	  if (err) {
	    // logger.error('connect to %s error: ', config.db, err.message);
	    console.log('connect to mognodb error:'+err.message);
	    process.exit(1);
	  }
	});
}

// models
require('./user');
require('./topic');
require('./topic_category')

exports.User          = mongoose.model('User');
exports.Topic         = mongoose.model('Topic');
exports.TopicCategory = mongoose.model('TopicCategory');

