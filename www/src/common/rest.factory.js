/**
 * Developer: Shahnawaz Ali
 * Company: Codenvoi
 * Website: http://www.codenvoi.com
 */

(function(){

  'use strict';

  angular
    .module('app.common')
    .factory('rest', rest);

  /* @ngInject */
  function rest(Restangular){

    Restangular.setBaseUrl('http://localhost:7040/api');

    return {

    };


  }

}());
