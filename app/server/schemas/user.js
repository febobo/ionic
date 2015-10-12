var mongoose = require('mongoose');

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
  if(this.isNew){
    this.meta.createAt = this.meta.updateAt = Date.now();
  }else{
    this.meta.updateAt = Date.now();
  }
})

UserSchema.statics = {
  fetch : function(cb){
    return this.find({}).sort('mate.createAt').exec(cb);
  },
  findById : function(id , cb){
    return this.findOne({_id : id}).exec(cb);
  }
}

module.exports = UserSchema;
