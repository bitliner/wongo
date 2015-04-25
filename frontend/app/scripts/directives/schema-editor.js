'use strict';

/**
 * @ngdoc directive
 * @name wongoApp.directive:schemaEditor
 * @description
 * # schemaEditor
 */
angular.module('wongoApp')
    .directive('schemaEditor', function() {
        return {
            templateUrl: 'views/directives/schema-editor.html',
            restrict: 'E',
            scope: {
                schema: '='
            },
            link: function postLink(scope, element, attrs) {



                scope.title = 'Editor';
                // element.text('this is the schemaEditor directive');
            }
        };
    });