'use strict';

/**
 * @ngdoc service
 * @name wongoApp.queryEditorView
 * @description
 * # queryEditorView
 * Service in the wongoApp.
 */
angular.module('wongoApp')
    .service('QueryEditorView', function($log) {
        function QueryEditorView() {}
        QueryEditorView.prototype.setFocus = function() {
            // $log.info('this.editor', this.editor);
            $log.info('Setting focus...')
            this.editor.focus();
        };
        QueryEditorView.prototype.setEditor = function(editor) {
            this.editor = editor;
        };
        QueryEditorView.prototype.getOptions = function() {

            var self = this;

            // $log.info('this.onLoad', this.onLoad)

            return {
                lineWrapping: true,
                lineNumbers: true,
                mode: 'javascript'
            };
        };
        QueryEditorView.prototype.getOnLoadHandler = function() {
            var self = this;
            return function(_editor) {
                $log.info('Loading QueryEditor...', this);
                self.setEditor(_editor);
                self.setFocus();
            }
        }


        return new QueryEditorView();

    });