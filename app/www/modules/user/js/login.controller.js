angular.module('starter.controllers')
  .controller('loginController', function($scope, $ionicModal, modal , http , $resource , $window , List , loading) {

    $scope.user = {};
    $scope.confirm = function(form){
      console.log($scope.user)
      if(!form) return ;
      if(!form.$valid){
        return modal.alert({
          message : '请输入必填项再提交！'
        })
      }

      http.load('user/signin' , 'POST' , {name : $scope.user.name , password : $scope.user.password }).then(function(res){
        if(res.cb){
          var cb = function(){
            http.redirect('/page');
          }
        }
        modal.alert({
          message : res.msg,
          cb : cb
        })
      })

    }



  })
