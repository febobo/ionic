angular.module('starter.controllers')
  .controller('registerController', function($scope, $ionicModal, modal, http, $http, $resource, List) {

    $scope.user = {};

    $scope.confirm = function(from) {

      if (!from) return;
      if (from.$invalid) {
        return modal.alert({
          message: '信息不符合，请按提示信息认真填写！'
        })
      }
      if ($scope.user.password != $scope.user.repeatPassword) {
        return modal.alert({
          message: '两次密码输入不一致，请重新输入！'
        })
      }

      // 注册成功跳到登陆页
      http.load('user/signup', 'POST', {
        name: $scope.user.name,
        password: $scope.user.password
      }).then(function(res) {
        modal.alert({
          message: res.msg,
          cb: function() {
            http.redirect('login')
          }
        })
      })
    }
  })
