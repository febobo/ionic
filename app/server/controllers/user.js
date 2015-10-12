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

    if (user.name) {
      return res.send({
        status: 0,
        msg: '账号已存在'
      })
    }

    var user = new User(_user);
    console.log(user)
    user.save(function(err, user) {
      console.log(err,user,1)
      if (err) {
        console.log(err);
      }
      res.send({
        status: 0,
        msg: '恭喜您，注册成功'
      })
    })
  })
}
