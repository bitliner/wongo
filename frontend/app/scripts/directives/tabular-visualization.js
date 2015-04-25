'use strict';

/**
 * @ngdoc directive
 * @name wongoApp.directive:tabularVisualization
 * @description
 * # tabularVisualization
 */
angular.module('wongoApp')
    .directive('tabularVisualization', function() {
        return {
            templateUrl: 'views/directives/tabular-visualization.html',
            restrict: 'E',
            scope: {
                data: '=',
                schema: '='
            },
            link: function postLink(scope, element, attrs) {

                scope.title = 'Welcome 2 Wongo!';
                scope.readField = function readField(obj, fieldName) {
                    var parent,
                        child,
                        tmp;

                    if (fieldName.indexOf('.') > 0) { //TODO: i should check for other points...on tmp[2] because in case...slice().join('.')
                        tmp = fieldName.split('.');
                        parent = tmp[0];
                        child = tmp[1];
                        // debugger
                        return readField(obj[parent], child);
                    }
                    return obj[fieldName];


                };

                // scope.$apply();

                // element.html();
            }
        };
    });