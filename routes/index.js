module.exports = function(app) {
	app.use('/', require('./user.js'));
	app.use('/blog',require('./blog.js'));
}