'use strict';

/**
 * @ngdoc function
 * @name repo14App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the repo14App
 */
angular.module('repo14App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
