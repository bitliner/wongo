'use strict';

/**
 * @ngdoc service
 * @name wongoApp.collectionResource.js
 * @description
 * # collectionResource.js
 * Service in the wongoApp.
 */
angular.module('wongoApp')
    .service('Collection', function($resource) {

        var host;
        host = 'localhost:27017/test';

        return $resource('http://localhost:3000/api/' + host + '/collections', {}, {
            'update': {
                method: 'PUT'
            }
        });
        // return $resource('/api/collections/:userId', {userId:'@_id'});

    });