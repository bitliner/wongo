'use strict';

/**
 * @ngdoc overview
 * @name wongoApp
 * @description
 * # wongoApp
 *
 * Main module of the application.
 */
angular
    .module('wongoApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.codemirror',
        'ui.bootstrap'
    ])
    .config(function($routeProvider) {
        $routeProvider
        // .when('/', {
        //   templateUrl: 'views/main.html',
        //   controller: 'MainCtrl'
        // })
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
        // .when('/collection', {
        //     templateUrl: 'views/collection.html',
        //     controller: 'CollectionCtrl'
        // })
        .when('/connection', {
            templateUrl: 'views/connection.html',
            controller: 'ConnectionCtrl'
        })
            .when('/collections', {
                templateUrl: 'views/collections.html',
                controller: 'CollectionsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });