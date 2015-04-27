'use strict';

/**
 * @ngdoc function
 * @name wongoApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the wongoApp
 */
angular.module('wongoApp')
    .controller('NavbarCtrl', function($scope, $log, $location, SchemaEditorView, Collection, DataStore, MongodbUtils) {
        $scope.SchemaEditorView = SchemaEditorView;

        function startup() {
            if ($scope.mongodbConnectionUrls.length === 0) {
                return $location.path('/connection');
            }

            $scope.databaseNames = DataStore.getMongodbConnectionUrls().map(MongodbUtils.parseMongodbConnectionUrl);

        }




        Collection.query(function(collections) {
            $scope.collections = collections.map(function(el) {
                return el.replace(/^[^\.]+\./i, '');
            });

            $log.info($scope.collections);
        }, function() {});

        $scope.goToCollection = function(collection) {
            $location.path('/collection').search({
                name: collection,
                databaseName: 'test1'
            });
        };
        $scope.goToDatabaseCollections = function(connection) {
            $location.path('/collections').search({
                connectionUrl: MongodbUtils.createMongodbConnectionUrl(connection)
            });
        };



        startup();


    });