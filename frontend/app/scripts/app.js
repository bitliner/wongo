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
        'ui.bootstrap',
        'satellizer',
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/connection', {
                templateUrl: 'views/connection.html',
                controller: 'ConnectionCtrl'
            })
            .when('/collections', {
                templateUrl: 'views/collections.html',
                controller: 'CollectionsCtrl'
            })
            .when('/signin', {
                templateUrl: 'views/signin.html',
                controller: 'ConnectionCtrl'
            })
            .when('/signed-in', {
                templateUrl: 'views/signed-in.html',
                controller: 'SignedInCtrl'
            })
            .otherwise({
                redirectTo: '/signin'
            });
    }).config(function($authProvider) {

        // var url = 'localhost:9000';

        // $authProvider.facebook({
        //     clientId: '1589781034644675',
        //     url: '/auth/facebook',
        //     authorizationEndpoint: 'https://www.facebook.com/v2.3/dialog/oauth',
        //     redirectUri: window.location.protocol + '//' + url + '/#/signed-in',
        //     scope: 'email',
        //     scopeDelimiter: ',',
        //     requiredUrlParams: ['display', 'scope'],
        //     display: 'popup',
        //     type: '2.0',

        //     // popupOptions: {
        //     //     width: 481,
        //     //     height: 269
        //     // }
        // });

        // $authProvider.google({
        //     clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com'
        // });

        // $authProvider.github({
        //     clientId: '0ba2600b1dbdb756688b'
        // });

        // $authProvider.linkedin({
        //     clientId: '77cw786yignpzj'
        // });

        // $authProvider.yahoo({
        //     clientId: 'dj0yJmk9dkNGM0RTOHpOM0ZsJmQ9WVdrOVlVTm9hVk0wTkRRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0wMA--'
        // });

        // $authProvider.live({
        //     clientId: '000000004C12E68D'
        // });

        // $authProvider.twitter({
        //     url: '/auth/twitter'
        // });

        // $authProvider.oauth2({
        //     name: 'foursquare',
        //     url: '/auth/foursquare',
        //     redirectUri: window.location.origin,
        //     clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
        //     authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
        // });
    });