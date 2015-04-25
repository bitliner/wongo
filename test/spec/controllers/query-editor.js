'use strict';

describe('Controller: QueryEditorCtrl', function () {

  // load the controller's module
  beforeEach(module('wongoApp'));

  var QueryEditorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QueryEditorCtrl = $controller('QueryEditorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
