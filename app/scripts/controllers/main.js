'use strict';

angular.module('clientControllers', [])
  .controller('MainCtrl', function ($scope, $http, constants) {
    $scope.awesomeThings = [];
    $http.get(constants.serverName + 'users/').success(function(data) {
      $scope.awesomeThings.push(data.results[0].username);
    });
  })
  .directive('helloMaps', function () {
    return function (scope, elem, attrs) {
      var mapOptions,
        latitude = attrs.latitude,
        longitude = attrs.longitude,
        zoom = attrs.zoom,
        map;

      latitude = latitude && parseFloat(latitude, 10) || 48.4630959;
      longitude = longitude && parseFloat(longitude, 10) || -123.3121053;
      zoom = zoom && parseInt(zoom) || 10;

      mapOptions = {
        zoomControl: false,
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        zoom: zoom,
        center: new google.maps.LatLng(latitude, longitude)
      };

      map = new google.maps.Map(elem[0], mapOptions);
    };
  })
  .constant('constants', {
    serverName: 'http://localhost:8000/'
  });