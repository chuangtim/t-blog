_ = require('lodash');

exports.render = function(req,res,view,data){
	var isLogin = req.session.login ? true : false;
	var renderData = {};

	if(typeof(data)!='undefined' && data){
		_.extend({logined:isLogin},data,renderData);
	}else{
		renderData = {logined:isLogin};
	}

	res.render(view,renderData);
}