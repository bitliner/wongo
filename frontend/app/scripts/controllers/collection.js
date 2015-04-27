'use strict';

/**
 * @ngdoc function
 * @name wongoApp.controller:CollectionCtrl
 * @description
 * # CollectionCtrl
 * Controller of the wongoApp
 */
angular.module('wongoApp')
    .controller('CollectionCtrl', function($scope, $resource, $location, $log, $http, SchemaParser, SchemaEditorView) {

        function getResource(db, collectionName) {
            return $resource('http://localhost:3000/api/' + db + '/' + collectionName, {}, {
                'update': {
                    method: 'PUT'
                }
            });
        }

        var search;

        search = ($location.search());

        $scope.collectionName = search.name;
        $scope.databaseName = search.databaseName;
        $scope.SchemaEditorView = SchemaEditorView;

        // var Collection = getResource($scope.databaseName, $scope.collectionName);
        $http.get('http://localhost:3000/api/' + $scope.databaseName + '/' + $scope.collectionName).success(function(documents) {
            $log.info('documents', documents);
            $scope.data = documents;
            $scope.schema = SchemaParser.parse($scope.data);
        }).error();

        // Collection.query();
    });