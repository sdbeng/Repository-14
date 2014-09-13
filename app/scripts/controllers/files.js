'use strict';

/**
 * @ngdoc function
 * @name repo14App.controller:FilesCtrl
 * @description
 * # FilesCtrl
 * Controller of the repo14App
 */
angular.module('repo14App')
  .controller('FilesCtrl', function ($scope,$http) {
   	$http.get('views/mydata.json').success(function(data) {
   		$scope.presenters = data;
   	});
  });
