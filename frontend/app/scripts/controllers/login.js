'use strict';

/**
 * @ngdoc function
 * @name wongoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the wongoApp
 */
angular.module('wongoApp')
    .controller('LoginCtrl', function($scope, $auth) {
        $scope.authenticate = function(provider) {
            $auth.authenticate(provider);
        };
    });