angular.module('starter.controllers')
  .controller('registerController', function($scope, $ionicModal, modal, $http , $resource , List) {
    $ionicModal.fromTemplateUrl('my-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    $scope.getList = function() {
      $scope.list = List.query();
    }
    $scope.user = {};

    $scope.confirm = function(from){
      if(!from) return ;

      console.log(from)
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
      $http.post('user/login' , { name : 'zhangbo' , password : '123456'}).then(function(res){
        console.log(res)
      })
    }


  })
