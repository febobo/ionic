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

// 用户列表o
exports.user_list = function(req , res){
  console.log(req)
  var page = parseInt(req.body.currentPage) || 0;
  var count = parseInt(req.body.page) || 10 ;
  var inx = page * count ;
  User.fetch(function(err , users){
    if(err){
      console.log(err);
    }
    var users = users.slice(inx , inx + count);
    res.send({
      status : 0,
      lists : users
    })
  })
}

// 删除用户
exports.delete_user = function(req , res){
  User.findOne({_id : name} , function(err , user){
    if(err){
      console.log(err);
    }
    if(!user.name){
      return res.send({
        status : 0,
        msg : '用户不存在'
      })
    }
    User.remove({name : name} , function(err , docs){
      res.send({
        status : 0,
        msg : '删除成功'
      })
    })

  })
}
