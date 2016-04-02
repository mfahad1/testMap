/**
 * Developer: Shahnawaz Ali
 * Company: Codenvoi
 * Website: http://www.codenvoi.com
 */

(function(){

  'use strict';

  angular.module('app.core')
    .config(configuration)
    .run(routingEvents);

  /* @ngInject */
  function configuration($urlRouterProvider){

    $urlRouterProvider.otherwise('/');

  }

  /* @ngInject */
  function routingEvents($rootScope, $state, $ionicPopup){

    // put those states here which do not require authentication and authorization
    var publicStates = ['Landing'];

    //on routing error
    $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){
      //do some logging and toasting
      console.log("state not found");
      $state.go('Landing');
    });

    // on state change start
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

/*      if(auth.isAuthenticated()){
        if(toState.name === 'Landing'){
          event.preventDefault();
          auth.redirectUser();
        }
        else if(toState.name === 'Logout'){
          event.preventDefault();
          auth.signout();
        }
        else if(toState !== 'Landing'){
          if(!auth.isAuthorized(toState.data.authorizedRole)){
            event.preventDefault();
            $ionicPopup.alert({
              title: 'Authorization Failed',
              template: 'You are not authorized to access this resource.'
            }).then(function(res) {
              $state.go($state.current, {}, {reload: true});
            });
          }
        }
      }
      else{
        if(publicStates.indexOf(toState.name) < 0){
          event.preventDefault();
          $ionicPopup.alert({
            title: 'Authenticated Failed',
            template: 'You need to login first.'
          }).then(function(res) {
            $state.go('Landing');
          });
        }
      }*/

    });

    //on routing error
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      //do some title setting
      $rootScope.pageTitle = toState.title || 'Fixt';
    });
  }

}());
