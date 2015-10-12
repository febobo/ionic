// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  var baseUrl = 'modules';
  var comUrl = 'modules/components';
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('page', {
      url: '/',
      //  abstract: true,
      data: {
        title: '首页',
      },
      views: {
        '': {
          templateUrl: comUrl + '/page/page.html',
          controller: 'pageController',
        },
        '@page': {
          templateUrl: baseUrl + '/home/home.html',
          controller: 'pageController'
        }
      }
    })
    .state('page.register',{
      data: {
        title: '快速注册',
      },
      url: 'register',
      templateUrl: baseUrl + '/user/register.html',
      controller: 'registerController'
    })
    .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: baseUrl + '/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('page.login', {
      url: 'login',
      data : {
        title : '登陆'
      },
      templateUrl: baseUrl + '/user/login.html',
      controller: 'loginController'
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: baseUrl + '/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: baseUrl + '/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
