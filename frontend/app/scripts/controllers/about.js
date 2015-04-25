'use strict';

/**
 * @ngdoc function
 * @name wongoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wongoApp
 */
angular.module('wongoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
