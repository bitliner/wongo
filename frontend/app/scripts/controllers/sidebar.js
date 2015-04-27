'use strict';

/**
 * @ngdoc function
 * @name wongoApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the wongoApp
 */
angular.module('wongoApp')
    .controller('SidebarCtrl', function($scope, $log, $location, DataStore) {


        DataStore.getDatabaseCollectionsByConnectionUrl(DataStore.getCurrentConnectionUrl()).then(function(collections) {
            $scope.collections = collections;
        }, function() {

        });

        $scope.goToCollection = function(collection) {
            $location.path('/').search({
                collectionName: collection,
            });
        };
    });