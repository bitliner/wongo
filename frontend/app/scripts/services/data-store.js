'use strict';

/**
 * @ngdoc service
 * @name wongoApp.dataStore
 * @description
 * # dataStore
 * Service in the wongoApp.
 */
angular.module('wongoApp')
    .service('DataStore', function($log, $q, Collection) {

        var DataStore;

        DataStore = {
            getDatabaseCollectionsByConnectionUrl: function(connectionUrl) {
                var def;

                def = $q.defer();
                if (DataStore.connectionUrl2collections[connectionUrl]) {
                    def.resolve(DataStore.connectionUrl2collections[connectionUrl]);
                    return def.promise;
                }

                Collection.query(function(collections) {
                    collections = collections.map(function(el) {
                        return el.replace(/^[^\.]+\./i, '');
                    });

                    $log.info('collections:', collections);
                    DataStore.connectionUrl2collections[connectionUrl] = collections;

                    def.resolve(collections);
                }, function(err) {
                    def.reject(err);
                });

                return def.promise;

            },
            currentConnectionUrl: null,
            mongodbConnectionUrls: [],
            connectionUrl2collections: {},
            getMongodbConnectionUrls: function() {
                return DataStore.mongodbConnectionUrls;
            },
            addMongodbConnectionUrl: function(connectionUrl) {
                DataStore.mongodbConnectionUrls.push(connectionUrl);
            },
            getConnectionUrl2Collections: function() {
                return DataStore.connectionUrl2collections;
            },
            setCurrentConnectionUrl: function(url) {
                DataStore.currentConnectionUrl = url;
            },
            getCurrentConnectionUrl: function() {
                return DataStore.currentConnectionUrl;
            }
        };

        return DataStore;

    });