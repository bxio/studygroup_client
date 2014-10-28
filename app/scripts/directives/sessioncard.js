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

        $scope.showSessionModal = function(sessionID){
          angular.element('#sessionModal').modal('show');
        }


        $scope.joinOrLeaveSession = function(sessionID) {
          StateService.joinOrLeaveSession(parseInt(sessionID));
        }

        $scope.addSessionToCalendar = function(sessionID) {
          return StateService.addEventToCalendar($scope.courseName, 'This is an event description from http://studypl.us', $scope.locationName+" Room: "+$scope.roomNumber, $scope.startTime, $scope.endTime);
        }

      }],
    };
  });
