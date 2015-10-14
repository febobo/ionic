'use strict';

angular
  .module('h5').filter('hello', function(){
     return function(item){
       return item + ' filter';
     }
  });
