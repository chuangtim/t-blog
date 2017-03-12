var express = require('express');
var router = express.Router();
var user = require('../controller').user;
var _util = require('../common/util');

/* GET users listing. */
router.get('/', function(req, res, next) {
    _util.render(req, res, 'index');
});


router.get('/signin', function(req, res, next) {
    res.render('user/signin');
});

router.get('/signup', function(req, res, next) {
    res.render('user/signup');
});

router.post('/signup', user.signup);
router.post('/signin', user.signin);
router.get('/signout',user.signout);
// router.post('/signin',function(req,res,next){
//   console.log('success');
//   res.send('signin success');
//   res.end();
// });


module.exports = router;