'use strict';

/**
 * @ngdoc service
 * @name wongoApp.mongodbCommandParser
 * @description
 * # mongodbCommandParser
 * Service in the wongoApp.
 */
angular.module('wongoApp')
    .service('MongodbCommandParser', function($q, JsParser) {
        function MongodbCommandParser() {}

        MongodbCommandParser.prototype._parse = function(str) {
            var def = $q.defer();
            var res;

            try {
                res = JsParser.parse(str);
            } catch (e) {
                def.reject(e);
                return def.promise;
            }
            def.resolve(res);
            return def.promise;
        };
        MongodbCommandParser.prototype.parse = function(str) {
            var def = $q.defer();
            this._parse(str).then(function(res) {
                def.resolve(res);
            }, function(err) {
                def.reject(err);
            });
            return def.promise;
        };

        return new MongodbCommandParser();
    });