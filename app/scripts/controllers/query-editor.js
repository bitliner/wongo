'use strict';

/**
 * @ngdoc function
 * @name wongoApp.controller:QueryEditorCtrl
 * @description
 * # QueryEditorCtrl
 * Controller of the wongoApp
 */
angular.module('wongoApp')
    .controller('QueryEditorCtrl', function($scope, $log, QueryEditorView) {
        $scope.setNewQuery = function(query) {
            $log.info('new query', query)
        }
        $scope.QueryEditorView = QueryEditorView;
    });