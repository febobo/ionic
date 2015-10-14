var User = require('../models/user');

//注册
exports.signup = function(req, res) {
  var _user = req.body;
  User.find({
    name: _user.name
  }, function(err, user) {
    if (err) {
      console.log(err);
    };

    if (user.length && user[0].name) {
      return res.send({
        status: 0,
        msg: '账号已存在'
      })
    }

    var user = new User(_user);
    user.save(function(err, user) {
      if (err) {
        console.log(err);
      }
      res.send({
        status: 0,
        msg: '恭喜您，注册成功',
      })
    })
  })
}

// 登陆
exports.signin = function(req, res) {
  var _user = req.body;
  var name = _user.name;
  var password = _user.password;
  User.findOne({
    name: name
  }, function(err, user) {
    if (err) {
      console.log(err);
    }
    if (!user) {
      return res.send({
        status: 0,
        msg: '抱歉，账号不存在'
      })
    }

    if (user.comparePassword(password)) {
      return res.send({
        status: 0,
        msg: '登陆成功',
        cb : 1
      })
    }

    return res.send({
      status: 0,
      msg: '密码错误，请重新输入！'
    })
  })
}
