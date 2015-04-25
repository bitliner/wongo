'use strict';

/**
 * @ngdoc function
 * @name wongoApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the wongoApp
 */
angular.module('wongoApp')
    .controller('NavbarCtrl', function($scope, SchemaEditorView) {
        $scope.SchemaEditorView = SchemaEditorView;
    });