'use strict';

angular
  .module('h5').factory('hello', function(){

     var title = 'wn518 service';
     return {
       title : title
     }
  });
