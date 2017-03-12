var userProxy = require('../proxy').User;
var util = require('util');
var _util = require('../common/util');

exports.signup = function(req, res, next) {
  var body = req.body;
  // console.log(util.inspect(req.body, { showHidden: true, depth: 2 }));
  if (!body.username) {
        res.render('user/signup', { error: '用户名不能为空.' });
        return;
    }

    if (!body.password) {
        res.render('user/signup', { error: '用户密码不能为空.' });
        return;
    }

    if (body.password != body.confirmPassword) {
        res.render('user/signup', { error: '用户密码确认不正确.' });
        return;
    }

    userProxy.createUser(body.username, body.password, function(err, data) {
        if (err) {
            res.render('user/signup', { error: err.message });
        } else {
            res.render('user/signup', { success: '注册成功,请进行登录.' });
        }
    });
};

exports.signin = function(req, res, next) {
    var body = req.body;
    var session = req.session;
    // console.log('login now');
    // console.log(util.inspect(req.body, { showHidden: true, depth: 2 }));
    if (!body.username) {
        // res.render('signin', { error: '用户名不能为空.' });
        _util.render(req, res, 'user/signin', { error: '用户名不能为空.' });
        return;
    }

    if (!body.password) {
        _util.render(req, res, 'user/signin', { error: '用户密码不能为空.' });
        return;
    }

    userProxy.getUser(body.username, function(err, user) {
        if (err) {
            _utils.render(req, res, 'user/signin', { error: err.message });
        } else {
            if (user) {
                if (user.password === body.password) {
                    session.login = true;
                    res.redirect('/blog');
                } else {
                    _util.render(req, res, 'user/signin', { error: '用户不存在或密码不正确.' });
                }

            } else {
                _util.render(req, res, 'user/signin', { error: '用户不存在.' });
            }
        }
    });
};

exports.signout = function(req,res,next) {  
  req.session.destroy();
  // res.clearCookie(config.auth_cookie_name, { path: '/' });
  res.redirect('/');
};