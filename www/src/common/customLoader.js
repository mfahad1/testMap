/**
 * Created by Fahad on 3/24/2016.
 */

(function() {

  'use strict';

  angular
    .module('app.common')
    .factory('customLoader', customLoader);

  function customLoader($ionicLoading){

    var isIOS = ionic.Platform.isIOS();
    var isAndroid = ionic.Platform.isAndroid();

    return {
      showDeviceLoader: showDeviceLoader,
      hideDeviceLoader: hideDeviceLoader
    };

    function whichDevice(){
      if(isIOS) return 'ios';
      else if(isAndroid) return 'android';
      else return 'ripple';
    }

    function showDeviceLoader(){
      $ionicLoading.show({
        template: "<ion-spinner class='spinner-positive' icon={{whichDevice()}}></ion-spinner>"
      });
    }

    function hideDeviceLoader(){
      $ionicLoading.hide();
    }

  }

})();
