angular.module('starter.services')

.factory('modal', function($ionicPopup) {

  var modal = {};
  modal.alert = function(config){
    var title = config.title ? config.title : '提示信息';
    var message = config.message ? config.message : '提交成功';
    $ionicPopup.alert({
      title : title,
      template : message
    })
  }
  return modal;
})
