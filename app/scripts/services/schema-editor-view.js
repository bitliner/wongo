'use strict';

/**
 * @ngdoc service
 * @name wongoApp.schemaEditorView
 * @description
 * # schemaEditorView
 * Service in the wongoApp.
 */
angular.module('wongoApp')
    .service('SchemaEditorView', function() {

        function SchemaEditorView() {
            this.isHidden = true;
        }
        SchemaEditorView.prototype.toggle = function() {
            this.isHidden = !this.isHidden;
        };
        SchemaEditorView.prototype.isHidden = function() {
            return this.isHidden;
        };

        return new SchemaEditorView();


    });