'use strict';

/**
 * @ngdoc function
 * @name wongoApp.controller:QueryEditorCtrl
 * @description
 * # QueryEditorCtrl
 * Controller of the wongoApp
 */
angular.module('wongoApp')
    .controller('QueryEditorCtrl', function($scope, $log, QueryEditorView, MongodbCommandParser) {
        $scope.setNewQuery = function(query) {
            // $log.info('new query', query)
        };
        $scope.QueryEditorView = QueryEditorView;

        $scope.parserError = '';
        $scope.parserResult = '';



        // db.c.distinct({a:{$in:[{a:1,b:2}]}})

        $scope.runCommand = function(str) {
            QueryEditorView.runCommand(str).then(function(parserResult) {
                $scope.parserResult = parserResult;
            }, function(err) {
                $scope.parserError = err;
            });
            // MongodbCommandParser.parse(str)
        };
    });