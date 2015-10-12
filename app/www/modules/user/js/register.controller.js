angular.module('starter.controllers')
  .controller('registerController', function($scope, $ionicModal, modal, $http , $resource , List) {
    
    $scope.user = {};

    $scope.confirm = function(from){
      $http.post('user/login' , { name : 'zhangbo' , password : '123456'}).then(function(res){
        console.log(res)
      })

      if(!from) return ;
      if(from.$invalid){
        return modal.alert({
          message : '信息不符合，请按提示信息认真填写！'
        })
      }
      if($scope.user.password != $scope.user.repeatPassword){
        return modal.alert({
          message : '两次密码输入不一致，请重新输入！'
        })
      }

    }


  })
