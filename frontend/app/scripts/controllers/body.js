'use strict';

/**
 * @ngdoc function
 * @name wongoApp.controller:BodyCtrl
 * @description
 * # BodyCtrl
 * Controller of the wongoApp
 */
angular.module('wongoApp')
    .controller('BodyCtrl', function($scope, KeyboardManager) {
        $scope.KeyboardManager = KeyboardManager;

    });