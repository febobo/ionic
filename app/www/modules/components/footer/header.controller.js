angular.module('starter.controllers')
  .controller('footerController', ['$scope', '$state', function($scope, $state) {
    //返回上一页
    $scope.back = function() {
      window.history.back();
    }

    $scope.$state = $state;
  }])
