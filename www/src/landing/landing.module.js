/**
 * Developer: Shahnawaz Ali
 * Company: Codenvoi
 * Website: http://www.codenvoi.com
 */

(function(){

  'use strict';

  angular
    .module('app.landing', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
      .state('Landing', {
        url:'/',
        cache: false,
        templateUrl:'src/landing/landing.html',
        controller: 'LandingCtrl as vm',
        title: 'Academia Solution'
      }
    )

  }

}());
