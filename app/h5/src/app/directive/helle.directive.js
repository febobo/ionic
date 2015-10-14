'use strict';

angular
  .module('h5').directive('hello' , hello);
  function hello(){
    return {
      restrict : 'EA',
      template : '<div>wn518 directive</div>',
      replace : true
    }
  }
