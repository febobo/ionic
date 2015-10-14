(function() {
  'use strict';

  angular
    .module('h5')
    .controller('vipController', vipController);

  /** @ngInject */
  function vipController($timeout, hello, http, $scope) {
    var vm = this;
    $scope.conf = {
      currentPage : 1,
      itemPageLimit : 10
    }
    vm.getUserList = function(conf) {

      http.load('http://localhost:3002/user/user_list', 'POST' , {currentPage : $scope.conf.currentPage}).then(function(res) {
        console.log(res)
        vm.userList = res.lists;
        $scope.conf = {
          total: res.lists.length,
          currentPage: $scope.conf.currentPage,
          itemPageLimit: 10,
          // 是否显示一页选择多少条
          isSelectPage: false,
          // 是否显示快速跳转
          isLinkPage: false
        }
      })
    }
    vm.getUserList();

    $scope.$watch('conf.currentPage + conf.itemPageLimit', function(news) {

      // 把你的http请求放到这里
    })


  }
})();
