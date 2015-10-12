angular.module('starter.services')

.factory('loading', function($ionicLoading) {
  var loading = {};

  loading.show = function() {
    $ionicLoading.show({
      template: 'loading...'
    })
  }
  loading.hide = function() {
    $ionicLoading.hide();
  }
  return loading;
})
