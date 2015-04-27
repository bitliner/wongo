'use strict';

/**
 * @ngdoc directive
 * @name wongoApp.directive:preventPageScrolling
 * @description
 * # preventPageScrolling
 */
angular.module('wongoApp')
    .directive('preventPageScrolling', function() {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {


                $(element).bind('mousewheel DOMMouseScroll', function(e) {
                    var e0 = e.originalEvent,
                        delta = e0.wheelDelta || -e0.detail;

                    this.scrollTop += (delta < 0 ? 1 : -1) * 30;
                    e.preventDefault();
                });
            }
        };
    });