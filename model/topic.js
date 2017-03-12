var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new Schema({
	author_id: {type:String},
	content: {type:String},
	crate_at: {type:Date,default:Date.now},
	catogry_name: {type:String}
})

mongoose.model('Topic',TopicSchema);