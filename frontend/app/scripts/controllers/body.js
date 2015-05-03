'use strict';

/**
 * @ngdoc function
 * @name wongoApp.controller:BodyCtrl
 * @description
 * # BodyCtrl
 * Controller of the wongoApp
 */
angular.module('wongoApp')
    .controller('BodyCtrl', function($scope, $log, $location, KeyboardManager, Collection, DataStore) {


        $scope.KeyboardManager = KeyboardManager;

        $scope.mongodbConnectionUrls = DataStore.getMongodbConnectionUrls();

        $log.info('BodyCtrl', '$scope.mongodbConnectionUrls', $scope.mongodbConnectionUrls);


        // if ($scope.mongodbConnectionUrls.length === 0 && $location.path() !== '/signin') {
        //     return $location.path('/connection');
        // }




    });