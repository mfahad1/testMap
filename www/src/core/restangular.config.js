/**
 * Developer: Shahnawaz Ali
 * Company: Codenvoi
 * Website: http://www.codenvoi.com
 */

(function(){

  'use strict';

  angular.module('app.core')
    .config(configuration);

  /* @ngInject */
  function configuration(RestangularProvider){

    //RestangularProvider.setBaseUrl('/api');

  }

}());
