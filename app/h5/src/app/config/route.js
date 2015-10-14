(function() {
  'use strict';

  angular
    .module('h5')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    var baseUrl = 'app/modules/';
    var commonUrl = 'components/';
    $stateProvider
      .state('page', {
        url: '/',
        views: {
          '': {
            templateUrl: commonUrl + 'page/page.html',
          },
          '@page': {
            templateUrl: baseUrl + 'home/main.html',
            controller: 'MainController',
            controllerAs: 'home'
          }
        }
      })
      .state('detail', {
        url: '/detail',
        templateUrl: baseUrl + 'detail/detail.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('page.vip', {
        url: 'vip',
        templateUrl: baseUrl + 'vip/vip.html',
        controller: 'vipController',
        controllerAs: 'vip'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
