var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicCategorySchema = new Schema({
	author_id: {type:String},
	category_name: {type:String}
});

mongoose.model('TopicCategory',TopicCategorySchema);