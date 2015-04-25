'use strict';

/**
 * @ngdoc service
 * @name wongoApp.keyboardManager
 * @description
 * # keyboardManager
 * Service in the wongoApp.
 */
angular.module('wongoApp')
    .service('KeyboardManager', function($log, QueryEditorView) {
        return {
            handle: function(e) {
                var keyCode,
                    altKey,
                    ctrlKey;


                keyCode = e.keyCode;
                altKey = e.altKey;
                ctrlKey = e.ctrlKey;

                $log.info('-->', e.ctrlKey, keyCode);

                if (keyCode === 81 && ctrlKey) {
                    QueryEditorView.setFocus();
                    // should focus on queryEditor
                }
            }
        };
    });