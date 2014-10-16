'use strict';

angular.module('studygroupClientApp')
  .directive('sessioncard', function (StateService) {
    return {
      templateUrl: 'scripts/directives/sessioncard.html',
      restrict: 'E',
      scope: {
        courseName:'=',
        startTime: '=',
        endTime: '=',
        coordinatorName: '=',
        locationName: '=',
        roomNumber: '=',
        joinText: '=',
        id: '@',
        attendees: '=',
      },
      controller: ['$scope', function($scope) {
        $scope.Math = window.Math;

        $scope.joinOrLeaveSession = function(sessionID) {
          StateService.joinOrLeaveSession(parseInt(sessionID));
        }

        $scope.addSessionToCalendar = function(sessionID) {
          StateService.addToCalendar(parseInt(sessionID));
          console.log($scope.startTime.toLocaleDateString());
          StateService.iCalObj = ics();
          StateService.iCalObj.addEvent($scope.courseName, 'This is thirty minut event', $scope.locationName, $scope.startTime, $scope.endTime);
          return StateService.iCalObj.download();


        }

      }],
    };
  });
