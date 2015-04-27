'use strict';

/**
 * @ngdoc service
 * @name wongoApp.mongodbUtils
 * @description
 * # mongodbUtils
 * Service in the wongoApp.
 */
angular.module('wongoApp')
    .service('MongodbUtils', function() {
        return {
            parseMongodbConnectionUrl: function(url) {
                var tmp;
                tmp = /([A-z0-9]+):([0-9]+)\/([A-z0-9]+)/gi.exec(url);
                if (!tmp) {
                    return null;
                }
                return {
                    host: tmp[1],
                    port: tmp[2],
                    databaseName: tmp[3]
                };
            },
            createMongodbConnectionUrl: function(connectionUrlComponents) {
                return connectionUrlComponents.host + ':' + connectionUrlComponents.port + '/' + connectionUrlComponents.databaseName;
            }
        }
    });