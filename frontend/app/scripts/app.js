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
        'ui.codemirror'
    ])
    .config(function($routeProvider) {
        $routeProvider
        // .when('/', {
        //   templateUrl: 'views/main.html',
        //   controller: 'MainCtrl'
        // })
        .when('/', {
            templateUrl: 'views/tabular-visualization.html',
            controller: 'TabularVisualizationCtrl'
        })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });