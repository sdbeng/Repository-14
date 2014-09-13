'use strict';

/**
 * @ngdoc function
 * @name repo14App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the repo14App
 */
angular.module('repo14App')
  .controller('ContactCtrl', function ($scope) {
    $scope.contactForm = {};

    $scope.send = function() {
    	console.log('submit button clicked');
    };
  });