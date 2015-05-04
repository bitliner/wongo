'use strict';

/**
 * @ngdoc service
 * @name wongoApp.mongodbCommandParser
 * @description
 * # mongodbCommandParser
 * Service in the wongoApp.
 */
angular.module('wongoApp')
    .service('MongodbCommandParser', function($q, $log, JsParser) {
        function MongodbCommandParser() {}

        MongodbCommandParser.prototype._calculateMetaRepresentation = function(str) {
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
        // it should ne parseMetaRepresentationOfExrpession
        MongodbCommandParser.prototype._parseMetaRepresentationOfExrpession = function(q) {

            var res = {};
            var self = this;

            if (q.properties) {
                q.properties.forEach(function(prop) {
                    var type;
                    type = prop.value.type;

                    if (type === 'Literal') {
                        res[prop.key.name] = prop.value.value;
                    } else if (type === 'ArrayExpression') {
                        res[prop.key.name] = self._parseMetaRepresentationOfExrpession(prop.value);
                    } else if (type === 'ObjectExpression') {
                        res[prop.key.name] = self._parseMetaRepresentationOfExrpession(prop.value);
                    }
                });
            } else if (q.elements) {
                return q.elements.map(function(prop) {
                    return self._parseMetaRepresentationOfExrpession(prop);
                });
            }

            return res;

        };
        MongodbCommandParser.prototype.parse = function(str) {
            var self = this;
            var def = $q.defer();
            this._calculateMetaRepresentation(str).then(function(parserResult) {
                $log.info('metarepresentation', parserResult);
                var newRes = {};
                var program;

                if (parserResult.type === 'Program' && parserResult.body && parserResult.body.length === 1) {
                    program = parserResult.body[0].expression;
                    if (program.callee) {
                        newRes.collectionName = program.callee.object.property.name;
                        newRes.op = program.callee.property.name;
                    }
                    // this is for find
                    // there should be also distinct, and count
                    // and???
                    if (program.arguments && program.arguments.length >= 1) {
                        newRes.query = program.arguments[0];
                        newRes.query = self._parseMetaRepresentationOfExrpession(newRes.query);
                    }
                    if (program.arguments && program.arguments.length > 1) {
                        newRes.fields = program.arguments[1];
                        newRes.fields = self._parseMetaRepresentationOfExrpession(newRes.fields);
                    }
                }
                def.resolve(newRes);
            }, function(err) {
                def.reject(err);
            });
            return def.promise;
        };

        return new MongodbCommandParser();
    });