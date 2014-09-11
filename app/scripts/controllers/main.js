'use strict';

/**
 * @ngdoc function
 * @name repo14App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the repo14App
 */
angular.module('repo14App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
