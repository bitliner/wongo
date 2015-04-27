'use strict';

/**
 * @ngdoc function
 * @name wongoApp.controller:ConnectionCtrl
 * @description
 * # ConnectionCtrl
 * Controller of the wongoApp
 */
angular.module('wongoApp')
    .controller('ConnectionCtrl', function($scope, $location, DataStore, MongodbUtils) {

        $scope.connection = {
            host: 'localhost',
            port: 27017,
            databaseName: 'test'
        };
        $scope.connect = function(conn) {
            var host, port, databaseName;

            host = conn.host || 'localhost';
            port = conn.port || 27017;
            databaseName = conn.databaseName || 'test';

            DataStore.addMongodbConnectionUrl(MongodbUtils.createMongodbConnectionUrl({
                host: host,
                port: port,
                databaseName: databaseName
            }));
            DataStore.setCurrentConnectionUrl(MongodbUtils.createMongodbConnectionUrl({
                host: host,
                port: port,
                databaseName: databaseName
            }));
            // alert(JSON.stringify(conn))
            $location.path('/');
        };

    });