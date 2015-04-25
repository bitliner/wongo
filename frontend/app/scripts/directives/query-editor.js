'use strict';

/**
 * @ngdoc directive
 * @name wongoApp.directive:queryEditor
 * @description
 * # queryEditor
 */
angular.module('wongoApp')
    .directive('queryEditor', function($log, QueryEditorView) {
        return {
            templateUrl: 'views/directives/query-editor.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {





            }
        };
    });