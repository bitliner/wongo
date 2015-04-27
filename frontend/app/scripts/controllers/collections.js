/* global alert */
'use strict';

/**
 * @ngdoc function
 * @name wongoApp.controller:CollectionsCtrl
 * @description
 * # CollectionsCtrl
 * Controller of the wongoApp
 */
angular.module('wongoApp')
    .controller('CollectionsCtrl', function($scope, $location, $http, MongodbUtils) {

        var search,
            connectionUrlComponents;

        search = ($location.search());
        connectionUrlComponents = MongodbUtils.parseMongodbConnectionUrl(search.connectionUrl);


        $http
            .get('http://localhost:3000/api/' + MongodbUtils.createMongodbConnectionUrl(connectionUrlComponents) + '/collections')
            .success(function(data) {
                $scope.collections = data.map(function(el) {
                    return el.replace(/^[^\.]+\./i, '');
                });
            })
            .error(function(err) {
                alert(JSON.stringify(err, null, 4));
            });
    });