/**
 * Developer: Shahnawaz Ali
 * Company: Codenvoi
 * Website: http://www.codenvoi.com
 */

(function(){

  'use strict';

  angular
    .module('app.landing')
    .controller('LandingCtrl', LandingCtrl);

  /* @ngInject */
  function LandingCtrl($scope,  $cordovaGeolocation,customLoader,$ionicPopup){
    var options = {timeout: 10000, enableHighAccuracy: true};
    $scope.getPosition =function () {
      customLoader.showDeviceLoader();
      $cordovaGeolocation.getCurrentPosition(options).then(function (position) {
        customLoader.hideDeviceLoader();
        console.log("podiotion", position);
        $scope.pos ={
          lat:position.coords.latitude,
          long:position.coords.longitude
        }
        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        var mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

        google.maps.event.addListenerOnce($scope.map, 'idle', function () {

          var marker = new google.maps.Marker({
            map: $scope.map,
            animation: google.maps.Animation.DROP,
            position: latLng
          });

          var infoWindow = new google.maps.InfoWindow({
            content: "Here I am!"
          });

          google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open($scope.map, marker);
          });

        });

      }, function (error) {
        customLoader.hideDeviceLoader();
        $ionicPopup.alert({
          title: 'Alert',
          content: "GPRS or GPS is turned off !"
        }).then(function(res) {
          // console.log('Test Alert Box');
          $scope.exit();
        });
        console.log("Could not get location");
      });

    }
    $scope.getPosition();
    $scope.exit = function(){
      ionic.Platform.exitApp();
    }
  }

}());
