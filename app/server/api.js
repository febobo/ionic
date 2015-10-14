var User = require('./controllers/user');

module.exports = function(app){
  // 用户接口
  app.post('/user/signup' , User.signup);
  app.post('/user/signin' , User.signin);
}
