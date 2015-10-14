var mongoose = require('mongoose');
var crypto = require('crypto');

var md5 = function(content){
  var sha1 = crypto.createHash('sha1');
  sha1.update(content);
  var v = sha1.digest('hex');
  return v;
}

//console.log(unMd5('011c945f30ce2cbafc452f39840f025693339c42'))
// 用户架构
var UserSchema = new mongoose.Schema({
  name : {
    unique : true,
    type : String
  },
  role : {
    type : Number,
    default : 0
  },
  password : String,
  meta : {
    createAt : {
      type : Date ,
      default : Date.now()
    },
    updateAt : {
      type : Date,
      default : Date.now()
    }
  }
})

UserSchema.pre('save' , function(next){
  var user = this;
  console.log(this)
  if(this.isNew){
    this.meta.createAt = this.meta.updateAt = Date.now();
  }else{
    this.meta.updateAt = Date.now();
  }
  if(user.password){
    user.password = md5(user.password);
  }
  next();
})

UserSchema.statics = {

  fetch : function(cb){
    return this.find({}).sort('mate.createAt').exec(cb);
  },
  findById : function(id , cb){
    return this.findOne({_id : id}).exec(cb);
  }
}

UserSchema.methods = {
  comparePassword : function(_password , cb){
    if(this.password == md5(_password)){
      return true;
    }
    return false ;
  }
}

module.exports = UserSchema;
