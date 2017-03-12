var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: {type:String},
	password: {type:String},
	crate_at: {type:Date,default:Date.now},
	signatrue: {type:String,default:"这家伙很懒，什么个性签名都没有留下。"},
});

UserSchema.pre('save', function(next){
  var now = new Date();
  this.update_at = now;
  next();
});

 mongoose.model('User',UserSchema);
