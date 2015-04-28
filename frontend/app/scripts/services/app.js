'use strict';

/**
 * @ngdoc service
 * @name wongoApp.app
 * @description
 * # app
 * Service in the wongoApp.
 */
angular.module('wongoApp')
    .service('app', function() {

        function ConnectionUrl(opts) {
            if (typeof opts === 'string') {
                // parse
            } else {
                this.host = opts.host || 'localhost';
                this.port = opts.port || 27017;
                this.databaseName = opts.databaseName || 'test';
            }
        }
        ConnectionUrl.prototype.toString = function() {
            return this.host + ':' + this.port + '/' + this.databaseName;
        }
        ConnectionUrl.prototype.getHost = function() {
            return this.host;
        }
        ConnectionUrl.prototype.getPort = function() {
            return this.port;
        }
        ConnectionUrl.prototype.getDatabaseName = function() {
            return this.databaseName;
        }

        function Collection(opts) {
            this.name = opts.name;
            this.connectionUrl = opts.connectionUrl;
        }
        Collection.prototype.getPage = function() {

        }
        Collection.prototype.getConnectionUrl = function() {
            return this.connectionUrl;
        }
        Collection.prototype.getSchema = function(sampleData) {
            throw new Error('to-implement');
        }

        function App() {}
        App.prototype.setCurrentConnectionUrl = function(connectionUrl) {
            this.currentConnectionUrl = connectionUrl;
        }
        App.prototype.setCurrentCollection = function(collection) {
            this.currentCollection = collection;
        }

        var app;

        app = new App();
        return {
            get: function() {
                return app;
            },
            createCollection: function(opts) {
                return new Collection(opts);
            },
            createConnectionUrl: function(opts) {
                return new ConnectionUrl(opts);
            }
        }

    });