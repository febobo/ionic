var User = require('./controllers/user');

module.exports = function(app){
  app.post('/user/login' , User.signup);
}
