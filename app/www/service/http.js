'use strict';
// 封装请求
angular
  .module('starter.controllers')
  .factory('http', ['$http', '$q', '$location',   function($http, $q, $location) {
    return {
      // 对http服务封装
      load : function(url, method, postData) {
        var $this   = this,
            defered = $q.defer();
        if(method == undefined) {
          method = 'POST';
        };
        $http({
          url             : url + '?r=' + Math.random(),
          method          : method,
          cache           : false,
          withCredentials : true,
          data            : postData,
          headers         : {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        })
        .success(function(data) {
          if(data && data.status === -100) { // 未登录
            defered.reject('您还未登录，请先登录。');
            $this.redirect('/user/login', $this.refer);
          } else if(data && data.status === 0) {
            defered.resolve(data);
          } else if(data && data.status !== 0) {
            defered.reject(data.msg);
          } else {
            defered.reject('请求失败，请检查网络。');
          }
        })
        .error(function(err) {
          defered.reject(err);
        });
        return defered.promise;
      },
      init: $location,
      refer:'/',
      redirect : function(url, ref) {
        if(ref != undefined ) {
          this.refer = ref;
        } else if(url == '') {
          $location.path(this.refer);
        }
        $location.path(url);
        return false;
      }
    }
}]);
