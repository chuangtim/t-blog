var express = require('express');
var router = express.Router();
var blog = require('../controller').blog;
var _util = require('../common/util');

/* GET users listing. */
router.get('/', function(req, res, next) {
 	_util.render(req, res, 'blog/list');
});


module.exports = router;