'use strict';

/**
 * @ngdoc function
 * @name wongoApp.controller:SignedInCtrl
 * @description
 * # SignedInCtrl
 * Controller of the wongoApp
 */
angular.module('wongoApp')
    .controller('SignedInCtrl', function($scope, $window) {
        alert('ciao')
        $window.close();
    });