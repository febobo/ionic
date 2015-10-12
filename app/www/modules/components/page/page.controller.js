angular.module('starter.controllers' , ['ngResource'])
  .controller('pageController', function($scope, $ionicModal, $http , $resource , List) {
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


  })
