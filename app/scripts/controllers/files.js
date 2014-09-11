'use strict';

/**
 * @ngdoc function
 * @name repo14App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the repo14App
 */
angular.module('repo14App')
  .controller('FilesCtrl', function ($scope) {
    $scope.presenters = [
      {
      	"name":"Jon Bon Jovi",
      	"title":"Innocents song"
      },
      {
      	"name":"Electric Light Orchestra",
      	"title":"Train to San Francisco"
      },
      {
      	"name":"Jimmy Hendrix",
      	"title":"Purple Haze"
      },
      {
      	"name":"Yes",
      	"title":"And You and I"
      }
    ];
  });
