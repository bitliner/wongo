'use strict';

/**
 * @ngdoc service
 * @name wongoApp.queryEditorView
 * @description
 * # queryEditorView
 * Service in the wongoApp.
 */
angular.module('wongoApp')
    .service('QueryEditorView', function($log, $modal, MongodbCommandParser) {

        var QueryEditorView = (function($modal, MongodbCommandParser) {

            function QueryEditorView(opts) {
                opts = opts || {};
            }
            QueryEditorView.prototype.setFocus = function() {
                // $log.info('this.editor', this.editor);
                $log.info('Setting focus...');
                this.editor.focus();
            };
            QueryEditorView.prototype.setEditor = function(editor) {
                this.editor = editor;
            };
            QueryEditorView.prototype.getOptions = function() {
                return {
                    lineWrapping: true,
                    // lineNumbers: true,
                    mode: 'javascript'
                };
            };
            QueryEditorView.prototype.getOnLoadHandler = function() {
                var self = this;
                return function(_editor) {
                    $log.info('Loading QueryEditor...', this);
                    self.setEditor(_editor);
                    self.setFocus();
                };
            };
            QueryEditorView.prototype.runCommand = function(str) {
                return MongodbCommandParser.parse(str);
            };
            QueryEditorView.prototype.openModalToSpecifyQueryName = function() {
                var self = this;

                var modalInstance = $modal.open({
                    templateUrl: 'myModalContent.html',
                    controller: 'ModalInstanceCtrl',
                    // size: size,
                    resolve: {
                        items: function() {
                            // return $scope.items;
                        }
                    }
                });

                modalInstance.result.then(function(selectedItem) {
                    // $scope.selected = selectedItem;
                }, function() {
                    // $log.info('Modal dismissed at: ' + new Date());
                });
            };

            return QueryEditorView;
        })($modal, MongodbCommandParser);



        return new QueryEditorView();

    });