(function() {
  'use strict';

  angular
    .module('h5')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, hello) {
    var vm = this;
    vm.title = 'wn518';
    vm.service = hello;


  }
})();
