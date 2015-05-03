'use strict';

/**
 * @ngdoc function
 * @name wongoApp.controller:QueryEditorCtrl
 * @description
 * # QueryEditorCtrl
 * Controller of the wongoApp
 */
angular.module('wongoApp')
    .controller('QueryEditorCtrl', function($scope, $log, QueryEditorView, MongodbCommandParser) {
        $scope.setNewQuery = function(query) {
            // $log.info('new query', query)
        };
        $scope.QueryEditorView = QueryEditorView;

        $scope.parserError = '';
        $scope.parserResult = '';

        function parseQuery(q) {
            var res = {};
            if (q.properties) {
                q.properties.forEach(function(prop) {
                    if (prop.value.type !== 'ObjectExpression') {
                        res[prop.key.name] = prop.value.value;
                    } else if (prop.value.type !== 'ArrayExpression') {
                        res[prop.key.name] = parseQuery(prop.value);
                    } else {
                        res[prop.key.name] = parseQuery(prop.value);
                    }
                });
            } else if (q.elements) {
                $log.info(q.elements);
                q.elements.forEach(function(prop) {

                });
            }

            return res;
        }


        $scope.runCommand = function(str) {
            MongodbCommandParser.parse(str).then(function(parserResult) {
                var res = {};
                var program;

                if (parserResult.type === 'Program' && parserResult.body && parserResult.body.length === 1) {
                    program = parserResult.body[0].expression;
                    if (program.callee) {
                        res.collectionName = program.callee.object.property.name;
                        res.op = program.callee.property.name;
                    }
                    if (program.arguments && program.arguments.length >= 1) {
                        res.query = program.arguments[0];
                        res.query = parseQuery(res.query);
                    }
                    if (program.arguments && program.arguments.length > 1) {
                        res.fields = program.arguments[1];
                        res.fields = parseQuery(res.fields);
                    }
                }

                // res.collectionName=


                $scope.parserResult = res;
            }, function(err) {
                $scope.parserError = err;
            });
        };
    });